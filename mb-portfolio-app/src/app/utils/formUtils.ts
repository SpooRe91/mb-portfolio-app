import { FormFieldSchema, FormFieldTypes } from "../zod/Schemas";
import { FORBIDDEN_PATTERNS } from "../constants/constants";

/**
 * Validates a form input value against a list of forbidden patterns.
 * @param value - The input value to be validated.
 * @returns {boolean} - Returns `true` if the value matches any forbidden pattern, otherwise `false`.
 */
export const fieldValidator = (value: string): boolean => {
    if (typeof value !== "string") {
        throw new TypeError("Invalid input type: Expected a string.");
    }

    for (const pattern of FORBIDDEN_PATTERNS) {
        if (pattern.test(value)) {
            return true;
        }
    }

    return false;
};

export const formValidator = (formData: FormFieldTypes): boolean => {
    try {
        FormFieldSchema.parse(formData);
    } catch (error) {
        return true;
    }

    return false;
};
