import { BASE_URL, MAX_RETRIES, RETRY_DELAY } from "@PortfolioApp/app/constants/constants";
import { extractAndReturnError } from "@PortfolioApp/app/utils";
import { FormFieldTypes } from "@PortfolioApp/app/zod/Schemas";
import axios from "axios";

export const sendFormData = async (formData: FormFieldTypes): Promise<boolean> => {
    let retries = 0;

    while (retries < MAX_RETRIES) {
        try {
            const res = await axios.post(`${BASE_URL}/contact`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!(res.status >= 200 && res.status <= 300)) {
                throw "Unable to send e-mail, please try again later!";
            }
            return true;
        } catch (error) {
            retries++;
            extractAndReturnError(error);

            if (retries < MAX_RETRIES) {
                await new Promise((res) => setTimeout(res, RETRY_DELAY));
            } else {
                console.error(`Failed after ${MAX_RETRIES} retries: ${error}`);
                throw `Failed after ${MAX_RETRIES} retries! Please try again later!`;
            }
        }
    }
    return false;
};
