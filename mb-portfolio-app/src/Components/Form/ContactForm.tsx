"use client";
import GlobalLoader from "../Loader/GlobalLoader";
import useContactForm from "@PortfolioApp/hooks/useContactForm";
import NotificationComponent from "../Notification/NotificationComponent";
import useExtractText from "@PortfolioApp/hooks/useExtractText";

const ContactForm = () => {
    const {
        status,
        isLoading,
        formData,
        formError,
        isFormDisabled,
        handleClearMessage,
        handleFormCheck,
        handleChange,
        handleSubmit,
    } = useContactForm();
    const { keyToText } = useExtractText();

    return (
        <div className="md:max-w-[600px] sm:max-w-[500px] mx-auto w-full sm:pb-[12rem] md:p-0 bg-bg-transparent-black-tretriary backdrop-blur-[5px] rounded-lg shadow-md">
            {(status.error || status.notification) && (
                <NotificationComponent
                    {...status}
                    mainClassName="absolute md:top-[-4rem] md:right-0 md:mr-[1rem]"
                    secondaryClassname="md:text-[1rem] sm:text-[0.8rem]"
                    handleClearMessage={handleClearMessage}
                    hasAnimation={true}
                />
            )}
            {isLoading && (
                <div className="absolute left-0 top-0 w-full p-[1rem 0.8rem] min-h-full">
                    <GlobalLoader
                        loadingText="Preparing the mail pigeon, this may take a little..."
                        mainClassName="min-h-[365px] p-[1rem] min-w-full rounded-[8px]"
                        secondaryClassName="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:h-[340px] sm:h-[360px]"
                        textClassName="text-colorMedLightBlue"
                    />
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 sm:p-[1rem]">
                <section className="w-full flex md:flex-row md:gap-[3rem] sm:flex-col text-colorMediumDark">
                    <div className="md:w-full ">
                        <label htmlFor="firstName" className="block text-colorDark">
                            {keyToText("FORM.FIRST_NAME_LABEL")}
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData?.firstName}
                            onChange={handleChange}
                            onBlur={handleFormCheck}
                            className="mt-1 p-2 w-full border border-colorMediumDark bg-input-field-bg rounded-md shadow-box-shadow-dark text-slate-50"
                            required
                        />
                        {formError.firstName && <p className="text-red-600">{formError.firstName}</p>}
                    </div>
                    <div className="w-full sm:w-max-[550px]">
                        <label htmlFor="lastName" className="block text-colorDark">
                            {keyToText("FORM.LAST_NAME_LABEL")}
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData?.lastName}
                            onChange={handleChange}
                            onBlur={handleFormCheck}
                            className="mt-1 p-2 w-full border border-colorMediumDark bg-input-field-bg rounded-md shadow-box-shadow-dark text-slate-50"
                            required
                        />
                        {formError.lastName && <p className="text-red-600">{formError.lastName}</p>}
                    </div>
                </section>
                <div>
                    <label htmlFor="email" className="block text-colorDark">
                        {keyToText("FORM.EMAIL_LABEL")}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleChange}
                        onBlur={handleFormCheck}
                        className="mt-1 p-2 w-full border border-colorMediumDark bg-input-field-bg rounded-md shadow-box-shadow-dark text-slate-50"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                    />
                    {formError.email && <p className="text-red-600">{formError.email}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-colorDark">
                        {keyToText("FORM.MESSAGE_LABEL")}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData?.message}
                        onChange={handleChange}
                        onBlur={handleFormCheck}
                        className="mt-1 p-2 w-full border border-colorMediumDark bg-input-field-bg rounded-md shadow-box-shadow-dark text-slate-50"
                        required
                    />
                    {formError.message && <p className="text-red-600">{formError.message}</p>}
                </div>
                {!isFormDisabled && (
                    <button
                        type="submit"
                        className="w-full py-2 bg-colorMedLightBlue text-white rounded-md hover:bg-colorMediumDark"
                        disabled={isFormDisabled}
                    >
                        Send
                    </button>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
