"use client";
import { LocalLoader, ServerDown, ProjectCard, Notification } from "@PortfolioApp/Components";
import { useGetViewWidth, useExtractText, useGetProjects } from "@PortfolioApp/hooks";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { projectsBG } from "../../../public/backgrounds";

const ProjectsComponent = () => {
    const { isMobile } = useGetViewWidth();
    const { keyToText } = useExtractText();
    const { isLoading, projectsData, message, handleClearMessage } = useGetProjects();

    return (
        <section className="relative min-h-screen">
            {!isMobile && (
                <Image
                    src={projectsBG}
                    alt="BG IMAGE"
                    className="w-full min-h-bg-image-height object-cover fixed z-[-1] brightness-[0.5]"
                    priority
                />
            )}
            <div className="flex flex-col items-center gap-24 w-full rounded-lg pb-[20rem]">
                {(message.error || message.notification) && (
                    <Notification
                        error={message?.error}
                        notification={message?.notification}
                        handleClearMessage={handleClearMessage}
                        mainClassName="z-[99] flex justify-end absolute top-[7rem] right-[2rem]"
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
                    <div className="relative bg-bg-transparent-black-main grid items-center place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-screen-xl mx-auto rounded-[8px]">
                        {!isMobile && (
                            <span className="rounded-[8px] brightness-[0.5] absolute z-[-1] top-0 left-0 w-full h-full bg-projects-secondary-bg bg-transparent bg-fixed bg-cover bg-no-repeat bg-center bg-clip-border"></span>
                        )}
                        {projectsData.map((projectElement, index) => (
                            <ProjectCard key={uuid()} {...projectElement} isMobile={isMobile} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsComponent;
