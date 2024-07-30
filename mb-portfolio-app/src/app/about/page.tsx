import useExtractText from "@PortfolioApp/hooks/useExtractText";

const About = () => {
    const { keyToText } = useExtractText();
    return (
        <section className="z-[10] relative flex flex-col items-center backdrop-blur-[5px] text-about-text-color p-6 md:min-h-screen-h-md sm:min-h-screen-h-sm sm:p-[0.8rem] sm:gap-[0.5rem]">
            <div className="flex flex-wrap gap-5 flex-col align-middle items-center max-w-4xl bg-bg-transparent-black-main p-[1.25rem] rounded-[5px] shadow-box-shadow-dark">
                <h1 className="text-3xl font-bold mb-4 sm:mb-0">{keyToText("ABOUT.HEADER")}</h1>
                <p className={`text-left md:text-lg sm:text-sm`}>{keyToText("ABOUT.FIRST_PARAGRAPH")}</p>
                <p className={`text-left md:text-lg sm:text-sm`}>{keyToText("ABOUT.SECOND_PARAGRAPH")}</p>
            </div>
        </section>
    );
};

export default About;
