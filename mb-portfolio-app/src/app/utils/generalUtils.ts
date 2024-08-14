import axios from "axios";
import { ZodError } from "zod";

/**
 * Extracts and formats error messages from different error types.
 * @param error - The error object to extract the message from.
 * @returns `@type{string}`- The formatted error message.
 */

export const extractAndReturnError = (error: any): string => {
    if (axios.isAxiosError(error)) {
        return `Axios error: ${error.response?.data?.message || error.message}`;
    }

    if (error instanceof ZodError) {
        return `Validation error: ${error.errors.map((e) => e.message).join(", ")}`;
    }

    if (error instanceof Error) {
        try {
            const parseErrors = JSON.parse(error.message as string);
            if (Array.isArray(parseErrors) && parseErrors[0]?.message) {
                return parseErrors[0]?.message;
            }
        } catch (parseError) {
            return error.message;
        }
    }

    return `An unknown error occurred: ${String(error)}`;
};
