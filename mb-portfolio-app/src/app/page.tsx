const HomePage = () => {
    return (
        <div
            className={`md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col items-center justify-center max-w-4xl sm:gap-[0.5rem] md:mx-auto rounded-[8px] h-full relative`}
        >
            <h1
                className={`w-full text-center md:text-4xl md:px-5 md:py-8 sm:text-lg sm:px-3 sm:py-5 text-tech-text-color`}
            >
                Welcome to my portfolio
            </h1>
            <p
                className={`max-w-[40rem] text-center md:text-[1.2rem] md:px-5 md:py-8 sm:text-[0.9rem] sm:px-4 sm:py-4 sm:[word-spacing:-1.5px] text-colorMediumDark `}
            >
                Here you can find information about my projects, myself and my contact information. Should you
                have any remarks, questions, suggestions or an offer, please do not hesitate to reach me.
            </p>
        </div>
    );
};

export default HomePage;
