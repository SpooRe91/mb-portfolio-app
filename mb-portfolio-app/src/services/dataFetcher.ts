"use client";
import axios, { AxiosError } from "axios";

const utilKey = process.env.NEXT_PUBLIC_UTIL_KEY;
const BASE_URL = "https://mb-multi-tool-api.vercel.app/personal/portfolio";

type ProjectType = {
    img: string;
    title: string;
    url: string;
    text: string;
    content: string;
};

export const fetchPortfolioData = async (): Promise<ProjectType[] | null> => {
    if (!utilKey) {
        throw new Error("NEXT_PUBLIC_UTIL_KEY is not defined in the environment variables.");
    }

    try {
        const res = await axios.get<ProjectType[]>(BASE_URL, {
            headers: {
                "x-util-key": utilKey,
            },
        });
        if (!res.data) {
            console.error("No data returned from the API.");
            return null;
        }
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error);
            console.error(`Axios error: ${error.response?.data?.message || error.message}`);
        } else {
            console.error(`Unexpected error: ${error}`);
        }
        return null;
    }
};
