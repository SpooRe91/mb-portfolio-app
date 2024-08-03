"use client";
import useGetProjects from "@PortfolioApp/hooks/useGetProjects";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import ServerDown from "@PortfolioApp/Components/ServerDown/ServerDown";
import LocalLoader from "@PortfolioApp/Components/Loader/LocalLoader";
import NotificationComponent from "@PortfolioApp/Components/Notification/NotificationComponent";
import useExtractText from "@PortfolioApp/hooks/useExtractText";
import { v4 as uuid } from "uuid";
import ProjectCardComponent from "@PortfolioApp/Components/ProjectCard/ProjectCardComponent";

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
            {!!projectsData.length && (
                <div className="grid items-center place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-screen-xl mx-auto bg-bg-transparent-black-secondary">
                    {projectsData.map((projectElement, index) => (
                        <ProjectCardComponent
                            key={uuid()}
                            {...projectElement}
                            isMobile={isMobile}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectsComponent;
