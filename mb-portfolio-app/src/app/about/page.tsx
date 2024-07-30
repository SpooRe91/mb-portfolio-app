const About = () => {
    return (
        <section className="z-[10] relative flex flex-col items-center backdrop-blur-[5px] text-about-text-color p-6 md:min-h-screen-h-md sm:min-h-screen-h-sm">
            <div className="flex flex-wrap gap-5 flex-col align-middle items-center max-w-4xl bg-bg-transparent-black-main p-[1.25rem] rounded-[5px] shadow-box-shadow-dark">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className={`text-left md:text-lg sm:text-sm`}>
                    Hello, I am Martin Bogdanov, a Web Developer mainly working on Front-end development,
                    however a Full-stack development is also something I enjoy. I use my skills in JavaScript
                    and TypeScript, along with a robust selection of technologies that includes React, SASS,
                    GraphQL, NodeJS, Express, REST API, MongoDB and more.
                </p>
                <p className={`text-left md:text-lg sm:text-sm`}>
                    My journey in web development is driven by a commitment to critical thinking, dedication,
                    and problem-solving, all of which allow me to tackle challenges and deliver successful
                    outcomes. I am always enthusiastic about learning new technologies and advancing my career
                    as a Front-end or Full-stack developer. Let us connect and explore opportunities to
                    collaborate!
                </p>
            </div>
        </section>
    );
};

export default About;
