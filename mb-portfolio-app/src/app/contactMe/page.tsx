"use client";
import { TextBlock, ContactForm } from "@PortfolioApp/Components";
import { useExtractText } from "@PortfolioApp/hooks";
import { contactBG } from "../../../public/backgrounds";
import Image from "next/image";

const Contact = () => {
    const { keyToText } = useExtractText();

    return (
        <section className="relative min-h-screen md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col justify-center sm:pb-[12rem]">
            <Image
                src={contactBG}
                alt="BG IMAGE"
                className="w-full min-h-bg-image-height object-cover fixed z-[-1] brightness-[0.5] mt-[7rem]"
                priority
            />
            <div className="w-full p-8 flex md:flex-row sm:flex-col sm:items-center md:items-start md:gap-[1rem] md:justify-center">
                <div className="flex flex-col items-center p-[1rem]">
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
