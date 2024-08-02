"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import useGetProjects from "@PortfolioApp/hooks/useGetProjects";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import CardComponent from "../../Components/Card/CardComponent";
import TextBlock from "../../Components/TextBlock/TextBlockComponent";
import ServerDown from "@PortfolioApp/Components/ServerDown/ServerDown";
import LocalLoader from "@PortfolioApp/Components/Loader/LocalLoader";
import NotificationComponent from "@PortfolioApp/Components/Notification/NotificationComponent";
import useExtractText from "@PortfolioApp/hooks/useExtractText";

const ProjectsComponent = () => {
    const { isMobile } = useGetViewWidth();
    const { keyToText } = useExtractText();
    const { isLoading, projectsData, message, handleClearMessage } = useGetProjects();

    return (
        <section className="flex flex-col items-center gap-24 w-full rounded-lg pb-[20rem] mt-[1rem]">
            {(message.error || message.notification) && (
                <NotificationComponent
                    error={message?.error}
                    notification={message?.notification}
                    handleClearMessage={handleClearMessage}
                    mainClassName="z-[99] flex justify-end absolute top-[6rem] right-[1rem]"
                    hasAnimation={true}
                />
            )}
            {isLoading ? (
                <LocalLoader
                    mainClassName="md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col items-center justify-center"
                    loadingText={keyToText("PROJECTS.LOCAL_LOADING_TEXT")}
                />
            ) : !projectsData.length ? (
                <ServerDown />
            ) : (
                <div className="flex md:flex-row md:justify-around sm:flex-col sm:items-center sm:px-3 w-full shadow-box-shadow-dark">
                    <h1 className="text-4xl px-5 py-8 text-colorMediumDark">
                        {keyToText("PROJECTS.MY_PROJECTS")}
                    </h1>
                </div>
            )}
            { !!projectsData.length && (
                <div className="grid items-center place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-screen-xl mx-auto bg-bg-transparent-black-secondary">
                    {projectsData.map(({ url, img, title, text, content }, i) => (
                        <div
                            key={i}
                            className={`flex 
                                flex-wrap 
                                ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} 
                                gap-8 
                                justify-center 
                                max-w-screen-lg 
                                w-full 
                                md:min-h-[635px]
                                px-4 
                                py-6 
                                rounded-lg 
                                shadow-box-shadow-project 
                                bg-bg-transparent-black-tretiary
                                md:hover:text-colorMedLightBlue
                                md:hover:bg-bg-transparent-project-hover
                                md:mx-[5rem]
                                transition-all
                                `}
                        >
                            <CardComponent
                                img={img}
                                imgWidth={350}
                                text={text}
                                className={"w-[250px] h-[250px]"}
                                textClassName="w-full"
                            />
                            <TextBlock
                                title={title}
                                content={content}
                                url={url}
                                className={`flex flex-col gap-4 items-center text-block text-colorMedLightBlue p-2 w-80 md:contrast-0 hover:contrast-100 transition-all`}
                            >
                                <Link
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-colorDark hover:text-tech-text-color"
                                >
                                    <Button
                                        variant="outlined"
                                        size={!isMobile ? "medium" : "small"}
                                        color="inherit"
                                    >
                                        View project
                                    </Button>
                                </Link>
                            </TextBlock>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectsComponent;
