import { BASE_URL, UTIL_KEY } from "@PortfolioApp/app/constants";
import axios, { AxiosError } from "axios";

type ProjectType = {
    img: string;
    title: string;
    url: string;
    text: string;
    content: string;
};

export const fetchPortfolioData = async (): Promise<ProjectType[] | null> => {
    if (!UTIL_KEY) {
        throw new Error("NEXT_PUBLIC_UTIL_KEY is not defined in the environment variables.");
    }

    try {
        const res = await axios.get<ProjectType[]>(BASE_URL, {
            headers: {
                "x-util-key": UTIL_KEY,
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
