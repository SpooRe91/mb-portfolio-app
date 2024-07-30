"use client";
import { fetchPortfolioData } from "@PortfolioApp/services/dataFetcher";
import { useEffect, useState, useCallback, useRef } from "react";

type ProjectType = {
    img: string;
    title: string;
    url: string;
    text: string;
    content: string;
};

type NotificationProps = {
    error?: string;
    notification?: string;
};

type UseGetProjectsResult = {
    isLoading: boolean;
    projectsData: ProjectType[];
    message: NotificationProps;
    handleClearMessage: () => void;
};
const MAX_FETCH_COUNT = 5;
/**
 * Custom React hook to fetch and manage projects data from a remote API.
 *
 * This hook handles:
 * - Loading state management
 * - Error handling
 * - Polling and refetching if data fetching fails
 * - Limiting the number of refetch attempts to prevent excessive network requests
 *
 * @returns {UseGetProjectsResult} The state of the data fetching including:
 * - `isLoading` - A boolean indicating if data is currently being fetched.
 * - `projectsData` - An array of project objects retrieved from the API. Each project includes properties like `img`, `title`, `url`, `text`, and `content`.
 * - `message` - A string containing an error message if an error occurs during data fetching, or `null` if no error is present.
 * - `handleClearMessage` - A function which will clear the message whatever it is, it should be passed to the component receiving the message.
 */
const useGetProjects = (): UseGetProjectsResult => {
    const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<NotificationProps>({ error: "", notification: "" });
    const refetchCountRef = useRef<number>(0);
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    const dataFetch = useCallback(async () => {
        if (refetchCountRef.current >= MAX_FETCH_COUNT) {
            setMessage({ error: "Maximum refetch attempts reached. Please try again later." });
            setIsLoading(false);
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
            return;
        }

        try {
            const result = await fetchPortfolioData();
            if (result) {
                setProjectsData(result);
                setIsLoading(false);
                setMessage({ notification: "Projects fetched, enoy!" });
                refetchCountRef.current = 0;
                if (intervalIdRef.current) {
                    clearInterval(intervalIdRef.current);
                }
                return;
            }
        } catch (err) {
            console.error(
                `Error fetching data, retrying...${!!refetchCountRef.current ? refetchCountRef.current : ""}`,
                err
            );
            setMessage({
                error: `Error fetching data, retrying...${!!refetchCountRef.current ? refetchCountRef.current : ""}`,
            });
            refetchCountRef.current += 1;
        }
    }, []);

    useEffect(() => {
        dataFetch();

        intervalIdRef.current = setInterval(() => {
            if (isLoading || !projectsData.length) {
                dataFetch();
            } else {
                clearInterval(intervalIdRef.current as NodeJS.Timeout);
            }
        }, 5000);

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [dataFetch, isLoading, projectsData.length]);

    const handleClearMessage = useCallback(() => {
        setMessage({ error: "", notification: "" });
    }, []);

    return { projectsData, isLoading, message, handleClearMessage };
};

export default useGetProjects;
