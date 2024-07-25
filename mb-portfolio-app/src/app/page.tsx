"use client";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";

const HomePage = () => {
    const { isMobile } = useGetViewWidth();
    return (
        <div className="flex flex-col items-center w-full h-full relative">
            <h1
                className={`w-full text-center ${!isMobile ? "text-4xl" : "text-lg"} px-5 py-8 text-tech-text-color bg-bg-transparent-black-secondary`}
            >
                Welcome to my portfolio
            </h1>
        </div>
    );
};

export default HomePage;
