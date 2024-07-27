"use client";
import CircularProgress from "@mui/material/CircularProgress";
import TextBlock from "../TextBlock/TextBlockComponent";

type LoadingProps = {
    loadingText?: string;
};

const GlobalLoader = ({ loadingText }: LoadingProps) => {
    return (
        <div className="relative z-[10] flex items-center w-full min-h-screen justify-center bg-bg-transparent-black-main">
            <div className="w-full h-[100px] flex flex-col gap-4 items-center justify-center bg-bg-transparent-black-main">
                <CircularProgress color="inherit" className="text-colorMediumDark" />
                <TextBlock
                    title={loadingText ? loadingText : "Loading..."}
                    className="tracking-widest text-colorMediumDark md:text-3xl sm:xl text-center"
                />
            </div>
        </div>
    );
};

export default GlobalLoader;
