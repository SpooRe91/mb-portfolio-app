"use client";
import CircularProgress from "@mui/material/CircularProgress";
import { TextBlock } from "@PortfolioApp/Components";

type LoadingProps = {
    loadingText?: string;
    mainClassName?: string;
    secondaryClassName?: string;
    textClassName?: string;
};

export const GlobalLoader = ({
    loadingText,
    mainClassName,
    secondaryClassName,
    textClassName,
}: LoadingProps) => {
    return (
        <div
            className={`${mainClassName} z-[10] flex items-center w-full justify-center bg-bg-transparent-black-main`}
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
