import { BASE_URL } from "@PortfolioApp/app/constants";
import axios from "axios";

type FormFieldTypes = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export const sendFormData = async (formData: FormFieldTypes): Promise<boolean> => {
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
        if (axios.isAxiosError(error)) {
            throw `Axios error: ${error.response?.data?.message || error.message}`;
        }
        throw `Unexpected error: ${error}`;
    }
};
