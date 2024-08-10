"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Card, TextBlock } from "@PortfolioApp/Components";

type ProjectType = {
    img: string;
    title: string;
    url: string;
    text: string;
    content: string;
};

type ProjectCardProps = {
    projectsData: ProjectType;
    index: number;
    isMobile: boolean;
};

export const ProjectCard = ({ projectsData, index, isMobile }: ProjectCardProps) => {
    const { img, url, title, text, content } = projectsData;

    return (
        <div
            className={`flex 
        flex-wrap 
        ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} 
        gap-8 
        justify-center 
            ${title.includes("Multi-tool") ? "content-center" : "content-start"}
        max-w-screen-lg 
        w-full 
        md:min-h-[635px]
        p-[1rem]
        rounded-lg 
        shadow-box-shadow-border-bottom 
        bg-bg-transparent-black-tretiary
        md:hover:text-colorMedLightBlue
        md:hover:bg-bg-transparent-black-secondary
        md:mx-[5rem]
        transition-all
        md:hover:[transform:translateZ(15px)]
        `}
        >
            <Card
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
                className={`flex flex-col gap-4 items-center text-block text-colorMedLightBlue w-80 md:contrast-0 hover:contrast-100 transition-all`}
            >
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colorDark hover:text-tech-text-color"
                >
                    <Button variant="outlined" size={!isMobile ? "medium" : "small"} color="inherit">
                        View project
                    </Button>
                </Link>
            </TextBlock>
        </div>
    );
};

export default ProjectCard;
