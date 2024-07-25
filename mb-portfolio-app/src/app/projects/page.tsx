"use client";
import CardComponent from "../../Components/CardComponent";
import TextBlock from "../../Components/TextBlockComponent";

import useGetProjects from "@PortfolioApp/hooks/useGetProjects";
import GlobalLoader from "@PortfolioApp/Components/GlobalLoader";
import Button from "@mui/material/Button";
import Link from "next/link";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";
import { TECHS_USED } from "../constants";

const ProjectsComponent = () => {
    const { isMobile } = useGetViewWidth();
    const { isLoading, projectsData } = useGetProjects();

    return (
        <>
            {isLoading ? (
                <GlobalLoader />
            ) : (
                <section className="flex flex-col items-center gap-24 w-full backdrop-blur-sm rounded-lg pb-[20rem]">
                    <div className="flex flex-col items-center gap-1 max-w- w-full bg-bg-transparent-black-main">
                        <h1 className="text-4xl px-5 py-8 text-colorMediumDark">My projects</h1>
                        <TextBlock
                            title={"and most of the technologies I currently use"}
                            className="flex flex-col gap-4 items-center text-center justify-cetetext-block p-2 text-tech-text-color"
                        >
                            <p className="max-w-[450px] py-[1rem] px-[0.75rem]">{TECHS_USED}</p>
                        </TextBlock>
                    </div>
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
                            px-4 
                            py-6 
                            rounded-lg 
                            shadow-box-shadow-secondary 
                            bg-bg-transparent-black-main
                            ${!isMobile ? "hover:translate-x-1" : ""}
                            ${!isMobile ? "hover:text-colorDark" : ""}
                            transition-all
                            `}
                            >
                                <CardComponent
                                    img={img}
                                    imgWidth={350}
                                    text={text}
                                    className="w-80"
                                    textClassName="w-full"
                                />
                                <TextBlock
                                    title={title}
                                    content={content}
                                    url={url}
                                    className={`flex flex-col gap-4 items-center text-block text-colorDark p-2 w-80 ${!isMobile ? "contrast-0 hover:contrast-100" : ""} transition-all`}
                                >
                                    <Link
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-tech-text-color"
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
                </section>
            )}
        </>
    );
};

export default ProjectsComponent;
