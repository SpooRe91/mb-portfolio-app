"use client";
import CircularProgress from "@mui/material/CircularProgress";
import TextBlock from "../TextBlock/TextBlockComponent";

type LoadingProps = {
    loadingText?: string;
    mainClassName?: string;
    secondaryClassName?: string;
    textClassName?: string;
};

const GlobalLoader = ({ loadingText, mainClassName, secondaryClassName, textClassName }: LoadingProps) => {
    return (
        <div
            className={`relative z-[10] flex items-center w-full justify-center bg-bg-transparent-black-main ${mainClassName}`}
        >
            <div
                className={`w-full flex flex-col gap-4 items-center justify-center bg-bg-transparent-black-main sm:p-[1rem] rounded-[8px] ${secondaryClassName}`}
            >
                <CircularProgress color="inherit" className="text-colorMediumDark" />
                <TextBlock
                    title={loadingText ? loadingText : "Loading..."}
                    titleClassName={`md:text-2xl sm:text-base ${textClassName}`}
                    className="tracking-widest text-colorMediumDark md:text-3xl sm:text-xl text-center"
                />
            </div>
        </div>
    );
};

export default GlobalLoader;
