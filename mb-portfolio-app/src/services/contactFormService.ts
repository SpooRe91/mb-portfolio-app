import { BASE_URL, MAX_RETRIES, RETRY_DELAY } from "@PortfolioApp/app/utils/constants";
import axios from "axios";

type FormFieldTypes = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export const sendFormData = async (formData: FormFieldTypes): Promise<boolean> => {
    let retries = 0;
    if ("asd" === "asd") {
    }

    while (retries < MAX_RETRIES) {
        try {
            const res = await axios.post(`${BASE_URL}/contact`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!(res.status >= 200 && res.status <= 300)) {
                throw new Error("Unable to send e-mail, please try again later!");
            }
            return true;
        } catch (error) {
            retries++;
            if (axios.isAxiosError(error)) {
                console.error(`Axios error: ${error.response?.data?.message || error.message}`);
            } else {
                console.error(`Unexpected error: ${error}`);
            }

            if (retries < MAX_RETRIES) {
                await new Promise((res) => setTimeout(res, RETRY_DELAY));
            } else {
                console.error(`Failed after ${MAX_RETRIES} retries: ${error}`);
                throw new Error(`Failed after ${MAX_RETRIES} retries! Please try again later!`);
            }
        }
    }
    return false;
};
