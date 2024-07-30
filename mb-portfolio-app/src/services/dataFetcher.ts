import { BASE_URL, UTIL_KEY } from "@PortfolioApp/app/utils/constants";
import axios from "axios";

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
        const res = await axios.get<ProjectType[]>(`${BASE_URL}/portfolio`, {
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
        if (axios.isAxiosError(error)) {
            throw `Axios error: ${error.response?.data?.message || error.message}`;
        }
        throw `Unexpected error: ${error}`;
    }
};
