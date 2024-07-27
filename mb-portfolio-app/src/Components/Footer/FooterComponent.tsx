"use client";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
    const { isMobile } = useGetViewWidth();
    const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);

    const removeCopiedText = () => {
        const timeout = setTimeout(() => {
            setIsEmailCopied(() => false);
            clearTimeout(timeout);
        }, 1500);
    };

    // const handleCopyEmail = async () => {
    //     try {
    //         await navigator.clipboard.writeText("m.bogdanov9110@gmail.com");
    //         return;
    //     } catch (error) {
    //         console.error(`We ran into an error while attempting to copy: ${error}`);
    //     } finally {
    //         setIsEmailCopied(true);
    //         removeCopiedText();
    //     }
    // };

    return (
        <section
            className={`z-[10] shadow-box-shadow-dark flex flex-col absolute bottom-0 left-0 m-auto border-t-[1px solid kobicha] mx-[auto] w-full mt-12 items-center bg-bg-transparent-black-secondary text-colorMediumDark py-8 px-4 ${!isMobile ? "mt-12 mx-auto" : "mt-5 mx-6"}`}
        >
            <h1 className="md:text-3xl sm:text-sm font-bold mb-4">Contact Me</h1>
            <p className="md:text-lg sm:text-sm text-center">
                I am happy to connect! You can find me on my social media platforms:
            </p>

            <div className="flex space-x-4">
                <Link
                    href="https://github.com/SpooRe91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorMediumLight transition-colors hover:text-rawUmber flex items-center gap-1"
                >
                    <GitHub /> <p> GitHub</p>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mbogdanov9110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorMediumLight transition-colors hover:text-rawUmber flex items-center gap-1"
                >
                    <LinkedIn /> <p>LinkedIn</p>
                </Link>
            </div>
        </section>
    );
};

export default Footer;
