"use client";
import { useCallback, useMemo, useState } from "react";
import { sendFormData } from "@PortfolioApp/services/contactFormService";
import { formValidator } from "@PortfolioApp/app/utils/formValidator";
import DOMPurify from "dompurify";

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

const useContactForm = () => {
    const [status, setStatus] = useState<SendStatus>({ error: "", notification: "" });
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [formData, setFormData] = useState({
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

    const isFormDisalbed = useMemo(
        () => !!Object.values(formError).find((el) => el.length) || isLoading,
        [formError, isLoading]
    );

    const handleClearMessage = useCallback(() => {
        setStatus({ error: "", notification: "" });
    }, []);

    const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const isInvalid = formValidator(value);

        const sanitizedValue = DOMPurify.sanitize(value);

        if (isInvalid) {
            setFormError({
                ...formError,
                [name]: `Invalid entry! Please amend!`,
            });
            console.log(formError);
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
        if (isFormDisalbed) {
            return;
        }

        try {
            setIsloading(true);
            const res = await sendFormData(formData);

            if (!res) {
                return;
            }
            setStatus({ ...status, notification: "E-mail sent successfully!" });
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } catch (error) {
            setStatus({ ...status, error: error as string });
        } finally {
            setIsloading(false);
        }
    };

    return {
        status,
        isLoading,
        formData,
        formError,
        isFormDisalbed,
        handleClearMessage,
        handleFormCheck,
        handleChange,
        handleSubmit,
    };
};

export default useContactForm;
