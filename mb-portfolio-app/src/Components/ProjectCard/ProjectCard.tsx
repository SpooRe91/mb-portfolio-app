import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Card, TextBlock } from "@PortfolioApp/Components";

type ProjectCardProps = {
    img: string;
    title: string;
    url: string;
    text: string;
    content: string;
    index: number;
    isMobile: boolean;
};

export const ProjectCard = ({ url, img, title, text, content, index, isMobile }: ProjectCardProps) => {
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
        px-4 
        py-6 
        rounded-lg 
        shadow-box-shadow-border-bottom 
        bg-bg-transparent-black-tretiary
        md:hover:text-colorMedLightBlue
        md:hover:bg-bg-transparent-project-hover
        md:mx-[5rem]
        transition-all
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
                className={`flex flex-col gap-4 items-center text-block text-colorMedLightBlue p-2 w-80 md:contrast-0 hover:contrast-100 transition-all`}
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
