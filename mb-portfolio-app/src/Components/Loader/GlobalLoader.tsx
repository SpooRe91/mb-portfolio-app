"use client";
import CircularProgress from "@mui/material/CircularProgress";
import TextBlock from "../TextBlock/TextBlockComponent";


const GlobalLoader = () => {
    return (
        <div className="relative z-[10] flex items-center w-full min-h-screen justify-center bg-bg-transparent-black-main">
            <div className="w-full h-[100px] flex flex-col gap-4 items-center justify-center bg-bg-transparent-black-main">
                <CircularProgress color="inherit" className="text-colorMediumDark" />
                <TextBlock title={"LOADING..."} className="tracking-widest text-colorMediumDark" />
            </div>
        </div>
    );
};

export default GlobalLoader;
