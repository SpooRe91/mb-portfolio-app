"use client";

import { fetchPortfolioData } from "@PortfolioApp/services/dataFetcher";
import { useEffect, useState } from "react";

type ProjectType = {
    img: string;
    title: string;
    url: string;
    text: string;
    content: string;
};

const useGetProjects = () => {
    const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const result = await fetchPortfolioData();
                if (result) {
                    setProjectsData(result);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        dataFetch();

        const intervalId = setInterval(() => {
            if (isLoading || !projectsData.length) {
                console.log("ℹ %cRefetching projects data...", "color: orange");
                dataFetch();
            } else {
                clearInterval(intervalId);
            }
        }, 5000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [isLoading, projectsData.length]);

    return { projectsData, isLoading };
};

export default useGetProjects;
