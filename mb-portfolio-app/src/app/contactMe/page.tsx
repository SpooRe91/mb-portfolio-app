"use client";
import ContactForm from "@PortfolioApp/Components/Form/ContactForm";
import TextBlock from "@PortfolioApp/Components/TextBlock/TextBlockComponent";
import useExtractText from "@PortfolioApp/hooks/useExtractText";

const Contact = () => {
    const { keyToText } = useExtractText();

    return (
        <div className="w-full p-8 md:min-h-screen-h-md sm:min-h-screen-h-sm p-b-[11rem] flex md:flex-row sm:flex-col items-center">
            <div className="flex flex-col items-center">
                <h1 className="md:text-4xl sm:text-xl font-bold text-colorDark mb-8">
                    {keyToText("CONTACT.HEADER")}
                </h1>
                <TextBlock
                    className="text-colorMediumDark p-[0.8rem] text-center"
                    titleClassName="sm:text-base md-text-4xl"
                    title={keyToText("CONTACT.SEND_EMAIL_TEXT")}
                    content={keyToText("CONTACT.SEND_EMAIL_AFFIRMATION")}
                    contentClassName="sm:text-base md-text-4xl"
                />
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;
