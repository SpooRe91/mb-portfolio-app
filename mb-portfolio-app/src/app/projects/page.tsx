"use client";
import { LocalLoader, ServerDown, ProjectCard, Notification } from "@PortfolioApp/Components";
import { useGetViewWidth, useExtractText, useGetProjects } from "@PortfolioApp/hooks";
import { v4 as uuid } from "uuid";
import { projectsBG } from "../../../public/backgrounds";
import Image from "next/image";

const ProjectsComponent = () => {
    const { isMobile } = useGetViewWidth();
    const { keyToText } = useExtractText();
    const { isLoading, projectsData, message, handleClearMessage } = useGetProjects();

    if (isLoading) {
        return (
            <LocalLoader
                mainClassName="md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col items-center justify-center"
                loadingText={keyToText("PROJECTS.LOCAL_LOADING_TEXT")}
            />
        );
    }

    if (!isLoading && !projectsData.length) {
        return (
            <>
                <ServerDown />
                <div className="flex md:flex-row md:justify-center sm:flex-col sm:items-center sm:px-3 w-full shadow-box-shadow-border-bottom bg-bg-transparent-black-secondary">
                    <h3 className="sm:p-[0.5rem] md:p-[1rem] md:text-lg sm:text-sm text-center text-colorMedLightBlue">
                        {keyToText("PROJECTS.MORE_PORJECTS_ON_GH")}
                    </h3>
                </div>
            </>
        );
    }

    return (
        <section className="relative md:min-h-screen-h-md sm:min-h-screen-h-sm sm:pt-[5rem] md:pt-[0] pb-[15rem]">
            {!isMobile && (
                <Image
                    src={projectsBG}
                    alt="BG IMAGE"
                    className="w-full min-h-bg-image-height object-cover fixed z-[-1] brightness-[0.5]"
                    priority
                />
            )}
            <div className="flex flex-col items-center gap-24 w-full rounded-lg">
                {(message.error || message.notification) && (
                    <Notification
                        error={message?.error}
                        notification={message?.notification}
                        handleClearMessage={handleClearMessage}
                        mainClassName="z-[99] flex justify-end fixed top-[15rem] right-[2rem]"
                        hasAnimation={true}
                    />
                )}
                {
                    <div className="flex md:flex-row md:justify-around sm:flex-col sm:items-center sm:px-3 w-full shadow-box-shadow-border-bottom bg-bg-transparent-black-secondary mt-[1rem]">
                        <h1 className="text-4xl px-5 py-8 text-colorMedLightBlue">
                            {keyToText("PROJECTS.MY_PROJECTS")}
                        </h1>
                    </div>
                }
                {!!projectsData.length && (
                    <div className="relative [transform-style:preserve-3d] [transform:perspective(1000px)] bg-bg-transparent-black-main grid items-center place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-screen-xl ml-[1rem] mr-[2rem] rounded-[8px]">
                        {!isMobile && (
                            <span className="rounded-[8px] brightness-[0.25] absolute z-[-1] top-0 left-0 w-full h-full bg-projects-secondary-bg bg-transparent bg-fixed bg-cover bg-no-repeat bg-center bg-clip-border"></span>
                        )}
                        {projectsData.map((projectElement, index) => (
                            <ProjectCard
                                key={uuid()}
                                projectsData={projectElement}
                                isMobile={isMobile}
                                index={index}
                            />
                        ))}
                    </div>
                )}
                {!isLoading && (
                    <div className="flex md:flex-row md:justify-center sm:flex-col sm:items-center sm:px-3 w-full shadow-box-shadow-border-bottom bg-bg-transparent-black-secondary">
                        <h3 className="sm:p-[0.5rem] md:p-[1rem] md:text-lg sm:text-sm text-center text-colorMedLightBlue">
                            {keyToText("PROJECTS.MORE_PORJECTS_ON_GH")}
                        </h3>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsComponent;
