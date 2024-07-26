"use client";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";

const HomePage = () => {
    const { isMobile } = useGetViewWidth();
    return (
        <div
            className={`flex flex-col items-center max-w-4xl ${!isMobile ? "my-[10rem] gap-[2rem] mx-[auto]" : "gap-[0.5rem] mx-6"} rounded-[8px] h-full relative bg-bg-transparent-black-secondary shadow-box-shadow-dark`}
        >
            <h1
                className={`w-full text-center ${!isMobile ? "text-4xl px-5 py-8" : "text-lg px-3 py-5"}  text-tech-text-color`}
            >
                Welcome to my portfolio
            </h1>
            <p
                className={`max-w-[40rem] text-center ${!isMobile ? "text-[1.2rem] px-5 py-8" : "text-[0.9rem] px-4 py-5  [word-spacing:-1.5px]"} text-colorMediumDark `}
            >
                Here you can find information about my projects, myself and my contact information. Should you
                have any remarks, questions, suggestions or an offer, please do not hesitate to reach me.
            </p>
        </div>
    );
};

export default HomePage;
