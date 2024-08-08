"use client";
import { TextBlock, ContactForm } from "@PortfolioApp/Components";
import { useExtractText } from "@PortfolioApp/hooks";
import { contactBG } from "../../../public/backgrounds";
import Image from "next/image";

const Contact = () => {
    const { keyToText } = useExtractText();

    return (
        <section className="min-h-screen md:min-h-screen-h-md sm:min-h-screen-h-sm sm:pb-[12rem]">
            <Image
                src={contactBG}
                alt="BG IMAGE"
                className="top-0 left-0 w-full min-h-bg-image-height object-cover fixed z-[-1] brightness-[0.5]"
                priority
            />
            <div className="w-full p-8 flex md:flex-row sm:flex-col sm:items-center md:items-start md:justify-center gap-[1rem]">
                <div className="flex flex-col items-center p-[1rem] bg-bg-transparent-black-tretriary backdrop-blur-[5px] rounded-lg shadow-box-shadow-border-bottom">
                    <h1 className="md:text-4xl sm:text-xl font-bold text-colorDarkMedBlue mb-8">
                        {keyToText("CONTACT.HEADER")}
                    </h1>
                    <TextBlock
                        className="text-colorMediumDark p-[0.8rem] text-center"
                        titleClassName="sm:text-base md:text-xl"
                        title={keyToText("CONTACT.SEND_EMAIL_TEXT")}
                        content={keyToText("CONTACT.SEND_EMAIL_AFFIRMATION")}
                        contentClassName="sm:text-base md:text-lg"
                    />
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
