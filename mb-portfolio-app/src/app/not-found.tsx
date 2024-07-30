"use client";
import useExtractText from "@PortfolioApp/hooks/useExtractText";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/404_confused.webp";

const NotFoundPage = () => {
    const { keyToText } = useExtractText();
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen-h-md sm:min-h-screen-h-sm bg-bg-transparent-black-tretriary text-colorLight">
            <Image
                src={image}
                alt="not-found-image"
                className="md:min-h-screen-h-md md:max-h-max-screen-h-sm sm:min-h-screen-h-sm sm:max-h-max-screen-h-sm sm:max-h- object-cover absolute z-[-1] brightness-[0.5]"
                placeholder="blur"
            />
            <h1 className="text-6xl font-bold mb-4 md:text-6xl sm:text-4xl sm:text-center">
                {keyToText("NOT_FOUND.404")}
            </h1>
            <p className="text-2xl mb-8 md:text-2xl sm:text-base sm:text-center">
                {keyToText("NOT_FOUND.NOT_FOUND_TEXT")}
            </p>
            <Link href="/">
                <p className="px-4 py-2 bg-colorMedLightBlue text-licorice rounded-md shadow-lg hover:bg-greenHover transition-all duration-300">
                    {keyToText("NOT_FOUND.BACK_TO_HOME")}
                </p>
            </Link>
        </div>
    );
};

export default NotFoundPage;
