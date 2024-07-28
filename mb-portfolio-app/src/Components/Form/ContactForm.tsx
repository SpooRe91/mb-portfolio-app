"use client";
import { useCallback, useMemo, useState } from "react";
import NotificationComponent from "../Notification/NotificationComponent";
import { sendFormData } from "@PortfolioApp/services/contactFormService";
import GlobalLoader from "../Loader/GlobalLoader";
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

const ContactForm = () => {
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

    return (
        <div className="max-w-[600px] mx-auto w-full sm:pb-[12rem] md:p-0 bg-bg-transparent-black-tretriary backdrop-blur-[5px] rounded-lg shadow-md">
            {(status.error || status.notification) && (
                <NotificationComponent {...status} handleClearMessage={handleClearMessage} />
            )}
            {isLoading && (
                <div className="absolute left-0 top-0 w-full p-[1rem 0.8rem] min-h-full">
                    <GlobalLoader
                        loadingText="Preparing the mail pigeon, this may take a little..."
                        mainClassName="min-h-[365px] p-[1rem] min-w-full rounded-[8px]"
                        secondaryClassName="md:min-h-full"
                    />
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 sm:p-[1rem]">
                <section className="w-full flex md:flex-row md:gap-[3rem] sm:flex-col">
                    <div className="md:w-full ">
                        <label htmlFor="firstName" className="block text-colorDark">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleFormCheck}
                            className="mt-1 p-2 w-full border border-colorMediumDark rounded-md text-black"
                            required
                        />
                        {formError.firstName && <p className="text-red-600">{formError.firstName}</p>}
                    </div>
                    <div className="w-full sm:w-max-[550px]">
                        <label htmlFor="lastName" className="block text-colorDark">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleFormCheck}
                            className="mt-1 p-2 w-full border border-colorMediumDark rounded-md text-black"
                            required
                        />
                        {formError.lastName && <p className="text-red-600">{formError.lastName}</p>}
                    </div>
                </section>
                <div>
                    <label htmlFor="email" className="block text-colorDark">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleFormCheck}
                        className="mt-1 p-2 w-full border border-colorMediumDark rounded-md text-black"
                        required
                        pattern="^[a-zA-Z0-9.]+@[a-zA-Z]+.[a-zA-Z]+$"
                    />
                    {formError.email && <p className="text-red-600">{formError.email}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-colorDark">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleFormCheck}
                        className="mt-1 p-2 w-full border border-colorMediumDark rounded-md text-black"
                        required
                    />
                    {formError.message && <p className="text-red-600">{formError.message}</p>}
                </div>
                {!isFormDisalbed && (
                    <button
                        type="submit"
                        className="w-full py-2 bg-colorMedLightBlue text-white rounded-md hover:bg-colorMediumDark"
                        disabled={isFormDisalbed}
                    >
                        Send
                    </button>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
