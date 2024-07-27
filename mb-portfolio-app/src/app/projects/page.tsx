"use client";
import CardComponent from "../../Components/Card/CardComponent";
import TextBlock from "../../Components/TextBlock/TextBlockComponent";

import useGetProjects from "@PortfolioApp/hooks/useGetProjects";
import Button from "@mui/material/Button";
import Link from "next/link";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import { TECHS_USED } from "../constants";
import GlobalLoader from "@PortfolioApp/Components/Loader/GlobalLoader";
import NotificationComponent from "@PortfolioApp/Components/Notification/NotificationComponent";
import ServerDown from "@PortfolioApp/Components/ServerDown/ServerDown";

const ProjectsComponent = () => {
    const { isMobile } = useGetViewWidth();
    const { isLoading, projectsData, message, handleSetMessage } = useGetProjects();

    return isLoading ? (
        <GlobalLoader loadingText={"Fetching projects data, please wait..."} />
    ) : (
        <section className="flex flex-col items-center gap-24 w-full backdrop-blur-sm rounded-lg pb-[20rem]">
            {(message.error || message.notification) && (
                <NotificationComponent {...message} handleSetMessage={handleSetMessage} />
            )}
            {!!projectsData.length ? (
                <div className="flex flex-col items-center gap-1 max-w- w-full bg-bg-transparent-black-main shadow-box-shadow-dark">
                    <h1 className="text-4xl px-5 py-8 text-colorMediumDark">My projects</h1>
                    <TextBlock
                        title={"and most of the technologies I currently use"}
                        className="flex flex-col gap-4 items-center text-center justify-cetetext-block p-2 text-tech-text-color"
                    >
                        <p className="max-w-[450px] py-[1rem] px-[0.75rem]">{TECHS_USED}</p>
                    </TextBlock>
                </div>
            ) : (
                <ServerDown />
            )}
            <div className="grid items-center place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-screen-xl mx-auto">
                {projectsData.map(
                    (
                        { url, img, title, text, content },
                        i //index is stable in this case, the data is static
                    ) => (
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
                            shadow-box-shadow-dark 
                            bg-bg-transparent-black-main
                            md:hover:text-colorMedLightBlue
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
                    )
                )}
            </div>
        </section>
    );
};

export default ProjectsComponent;
