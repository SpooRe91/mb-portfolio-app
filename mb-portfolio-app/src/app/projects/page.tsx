"use client";
import { LocalLoader, ServerDown, ProjectCard, Notification } from "@PortfolioApp/Components";
import { useGetViewWidth, useExtractText, useGetProjects } from "@PortfolioApp/hooks";
import { v4 as uuid } from "uuid";

const ProjectsComponent = () => {
    const { isMobile } = useGetViewWidth();
    const { keyToText } = useExtractText();
    const { isLoading, projectsData, message, handleClearMessage } = useGetProjects();

    return (
        <section className="flex flex-col items-center gap-24 w-full rounded-lg pb-[20rem] mt-[1rem]">
            {(message.error || message.notification) && (
                <Notification
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
                        <ProjectCard key={uuid()} {...projectElement} isMobile={isMobile} index={index} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectsComponent;
