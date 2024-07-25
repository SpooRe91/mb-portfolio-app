"use client";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
    const { isMobile } = useGetViewWidth();
    const [isTextCopied, setIsTextCopied] = useState<boolean>(false);

    const removeCopiedText = () => {
        const timeout = setTimeout(() => {
            setIsTextCopied(() => false);
            clearTimeout(timeout);
        }, 1500);
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText("m.bogdanov9110@gmail.com");
            return;
        } catch (error) {
            console.error(`We ran into an error while attempting to copy: ${error}`);
        } finally {
            setIsTextCopied(true);
            removeCopiedText();
        }
    };

    return (
        <section
            className={`flex flex-col absolute bottom-0 left-0 m-auto border-t-[1px solid kobicha] mx-[auto] w-full mt-12 items-center bg-bg-transparent-black-secondary text-colorMediumDark py-8 px-4 ${!isMobile ? "mt-12 mx-auto" : "mt-5 mx-6"} shadow-box-shadow-secondary`}
        >
            <h1 className={`${!isMobile ? "text-3xl" : "text-sm"} font-bold mb-4`}>Contact Me</h1>
            <p className={`${!isMobile ? "text-lg" : "text-sm"} text-center`}>
                I am happy to connect! You can send me an email or find me on my other social media platforms:
            </p>
            {!isMobile ? (
                <div
                    onClick={() => handleCopyEmail()}
                    className="flex flex-row gap-3 p-[0.5rem] relative items-center my-3 hover:cursor-pointer hover:text-greenHover transition-colors"
                >
                    <div className="flex flex-row items-center">
                        <Email className="mr-2" /> <p>m.bogdanov9110@gmail.com</p>
                    </div>
                    <div className="absolute top-0 font-bold text-green-500 mb-6">
                        {isTextCopied && <p>Email copied!</p>}
                    </div>
                </div>
            ) : (
                <div className="flex flex-row justify-center my-3">
                    <Link
                        href="mailto:m.bogdanov9110@gmail.com"
                        className="text-colorMediumLight mb-4 flex items-center"
                    >
                        <Email className="mr-2" /> e-mail me
                    </Link>
                </div>
            )}
            <div className="flex space-x-4">
                <Link
                    href="https://github.com/SpooRe91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorMediumLight transition-colors hover:text-rawUmber flex items-center"
                >
                    <GitHub className="mr-2" /> GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mbogdanov9110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorMediumLight transition-colors hover:text-rawUmber flex items-center"
                >
                    <LinkedIn className="mr-2" /> LinkedIn
                </Link>
            </div>
        </section>
    );
};

export default Footer;
