import React from "react";
import TextBlock from "../TextBlock/TextBlockComponent";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import { Email } from "@mui/icons-material";
import Link from "next/link";

const ServerDown = () => {
    const { isMobile } = useGetViewWidth();
    return (
        <div className="flex flex-col items-center gap-1 max-w- w-full bg-bg-transparent-black-main shadow-box-shadow-dark">
            <h1 className="text-center md:text-4xl sm:text-xl px-5 py-8 text-colorMediumDark">
                SORRY, SEEMS THE SERVER IS HAVING A BAD DAY
            </h1>
            <TextBlock
                title={"Please try again later!"}
                className="flex flex-col gap-4 items-center text-center justify-cetetext-block p-2 text-tech-text-color"
            >
                <p className="max-w-[450px] py-[1rem] px-[0.75rem]">
                    Or drop me an e-mail and I will look into it!
                </p>
            </TextBlock>
            {!isMobile ? (
                <div className="flex flex-row p-[0.5rem] relative items-center my-1 hover:text-greenHover transition-colors">
                    <div className="flex flex-row items-center">
                        <Email className="mr-2" /> <p>m.bogdanov9110@gmail.com</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row justify-center my-3">
                    <Link
                        href="mailto:m.bogdanov9110@gmail.com"
                        className="text-colorMediumLight mb-4 flex items-center gap-1"
                    >
                        <Email className="mr-2" /> <p>e-mail me</p>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ServerDown;
