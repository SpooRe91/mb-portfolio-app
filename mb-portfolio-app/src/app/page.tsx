"use client";
import { useExtractText } from "@PortfolioApp/hooks";
import { homeBG } from "../../public/backgrounds";
import Image from "next/image";

const HomePage = () => {
    const { keyToText } = useExtractText();

    return (
        <section className="relative min-h-screen md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col items-center justify-center">
            <Image
                src={homeBG}
                alt="BG IMAGE"
                className="w-full min-h-screen object-cover fixed z-[-1] brightness-[0.25]"
                priority
            />
            <div
                className={`animate-homePage-slide-in-top w-full flex flex-col items-center backdrop-blur-[5px] justify-center max-w-4xl sm:gap-[0.5rem] md:mx-auto rounded-[8px] h-full relative transition-all`}
            >
                <h1
                    className={`animate-homePage-fade-in w-full sm:font-extrabold md:font-normal text-center md:text-4xl md:px-5 md:py-8 sm:text-lg sm:px-3 sm:py-5 text-tech-text-color`}
                >
                    {keyToText("HOME.WELCOME_MAIN")}
                </h1>
                <p
                    className={`animate-homePage-fade-in max-w-[40rem] text-center md:text-[1.2rem] md:px-5 md:py-8 sm:text-[0.9rem] sm:px-4 sm:py-4 text-colorDarkMedBlue`}
                >
                    {keyToText("HOME.SECONDARY_TEXT")}
                </p>
            </div>
        </section>
    );
};

export default HomePage;
