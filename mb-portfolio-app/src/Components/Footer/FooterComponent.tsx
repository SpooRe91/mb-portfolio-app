"use client";
import { GitHub, LinkedIn } from "@mui/icons-material";
import useExtractText from "@PortfolioApp/hooks/useExtractText";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import Link from "next/link";

const Footer = () => {
    const { isMobile } = useGetViewWidth();
    const { keyToText } = useExtractText();

    return (
        <section
            className={`z-[10] shadow-box-shadow-dark flex flex-col absolute bottom-0 left-0 m-auto border-t-[1px solid kobicha] mx-[auto] w-full mt-12 items-center bg-bg-transparent-black-secondary text-colorMediumDark py-8 px-4 ${!isMobile ? "mt-12 mx-auto" : "mt-5 mx-6"}`}
        >
            <h1 className="md:text-3xl sm:text-sm font-bold mb-4">{keyToText("FOOTER.HEADER")}</h1>
            <p className="md:text-lg sm:text-sm text-center">{keyToText("FOOTER.SECONDARY_TEXT")}</p>

            <div className="flex space-x-4 sm:p-[0.2rem] md:p-0">
                <Link
                    href="https://github.com/SpooRe91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorMediumLight transition-colors hover:text-rawUmber flex items-center gap-1"
                >
                    <GitHub /> <p>{keyToText("FOOTER.SOCIAL_GITHUB")}</p>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mbogdanov9110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorMediumLight transition-colors hover:text-rawUmber flex items-center gap-1"
                >
                    <LinkedIn /> <p>{keyToText("FOOTER.SOCIAL_LINKEDIN")}</p>
                </Link>
            </div>
        </section>
    );
};

export default Footer;
