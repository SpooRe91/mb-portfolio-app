"use client";
import { fetchPortfolioData } from "@PortfolioApp/services";
import { ProjectType } from "@PortfolioApp/types/types";
import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { extractAndReturnError } from "@PortfolioApp/app/utils";
import { v4 as uuid } from "uuid";

type NotificationProps = {
    error?: string;
    notification?: string;
};

type UseGetProjectsResult = {
    isLoading: boolean;
    error: Error | null;
    data: ProjectType[] | undefined;
    message: NotificationProps;
    handleClearMessage: () => void;
};

/**
 * Custom React hook to fetch and manage projects data from a remote API.
 *
 * This hook handles:
 * - Data fetching
 * - Loading state management
 * - Error handling
 *
 * @returns {UseGetProjectsResult} The state of the data fetching including:
 * - `isLoading` - A boolean indicating if data is currently being fetched.
 * - `data` - An array of project objects retrieved from the API. Each project includes properties like `img`, `title`, `url`, `text`, and `content`.
 * - `message` - A string containing an error message if an error occurs during data fetching, or `null` if no error is present.
 * - `handleClearMessage` - A function which will clear the message whatever it is, it should be passed to the component receiving the message.
 */

export const useFetchProjects = (): UseGetProjectsResult => {
    const [message, setMessage] = useState<NotificationProps>({ error: "", notification: "" });

    const { data, error, isLoading } = useQuery<ProjectType[], Error>({
        queryKey: ["projects"],
        queryFn: fetchPortfolioData,
        retry: 4,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        refetchInterval: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (error) {
            setMessage({ error: extractAndReturnError(error), notification: "" });
        } else if (data) {
            setMessage({ error: "", notification: "Projects fetched successfully!" });
        }
    }, [error, data]);

    const handleClearMessage = useCallback(() => {
        setMessage({ error: "", notification: "" });
    }, []);

    const mappedData: ProjectType[] | undefined = data?.map((el) => ({
        ...el,
        id: uuid(),
    }));

    return { data: mappedData || data, error, isLoading, message, handleClearMessage };
};

export default useFetchProjects;
