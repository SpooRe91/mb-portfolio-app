"use client";
import { useCallback, useMemo, useState } from "react";
import { sendFormData } from "@PortfolioApp/services/contactFormService";
import { fieldValidator, formValidator } from "@PortfolioApp/app/utils/formUtils";
import DOMPurify from "dompurify";
import { FormFieldTypes } from "@PortfolioApp/app/zod/Schemas";

type FormFieldErrorTypes = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

type SendStatus = {
    error: string;
    notification: string;
};

/**
 * Custom hook to manage contact form state and handle submission.
 * @returns {object} - The contact form state and handlers.
 */
const useContactForm = () => {
    const [status, setStatus] = useState<SendStatus>({ error: "", notification: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormFieldTypes>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [formError, setFormError] = useState<FormFieldErrorTypes>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const isFormDisabled = useMemo(
        () => !!Object.values(formError).find((el) => el.length) || isLoading,
        [formError, isLoading]
    );

    const handleClearMessage = useCallback(() => {
        setStatus({ error: "", notification: "" });
    }, []);

    const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const isInvalid = fieldValidator(value);

        const sanitizedValue = DOMPurify.sanitize(value);

        if (isInvalid) {
            setFormError({
                ...formError,
                [name]: "Invalid entry! Please amend!",
            });
        } else {
            setFormError({
                ...formError,
                [name]: "",
            });
        }

        setFormData({
            ...formData,
            [name]: sanitizedValue,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setFormError({
            ...formError,
            [name]: "",
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormDisabled) {
            return;
        }
        const isFormInvalid = formValidator(formData);

        if (isFormInvalid) {
            setStatus({ ...status, error: "Your form is not valid, please check your inputs" });
            return;
        }

        try {
            setIsLoading(true);
            const res = await sendFormData(formData);

            if (!res) {
                return;
            }
            setStatus({ ...status, notification: "E-mail sent successfully!" });
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } catch (error) {
            setStatus({ ...status, error: error as string });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        status,
        isLoading,
        formData,
        formError,
        isFormDisabled,
        handleClearMessage,
        handleFormCheck,
        handleChange,
        handleSubmit,
    };
};

export default useContactForm;
