'use client';
import React from 'react';
import Link from 'next/link';
import { Button, TextBlock } from '@UI';
import { Card, ProjectType } from '@CommonImports';

type ProjectCardProps = {
	projectsData: ProjectType;
	index: number;
	isMobile: boolean;
};

export const ProjectCard = ({
	projectsData,
	index,
	isMobile,
}: ProjectCardProps) => {
	const { img, url, title, text, content } = projectsData;

	return (
		<div
			className={`flex flex-wrap ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-center gap-8 ${title.includes('Multi-tool') ? 'content-center' : 'content-start'} w-full max-w-screen-lg rounded-lg bg-bg-transparent-black-secondary p-[1rem] shadow-box-shadow-border-bottom transition-all md:mx-[5rem] md:min-h-[635px] md:hover:bg-bg-transparent-project-hover md:hover:text-colorMedLightBlue md:hover:[transform:translateZ(15px)]`}
		>
			<Card
				img={img}
				imgWidth={350}
				text={text}
				className={'h-[250px] w-[250px]'}
				textClassName="w-full drop-shadow-homeTextShadow"
			/>
			<TextBlock
				title={title}
				content={content}
				url={url}
				className={`text-block flex w-80 flex-col items-center gap-4 text-colorMedLightBlue transition-all hover:contrast-100 md:contrast-0`}
			>
				<Link
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-colorDark hover:text-tech-text-color"
				>
					<Button
						variant="outlined"
						size={!isMobile ? 'medium' : 'small'}
						color="inherit"
					>
						View project
					</Button>
				</Link>
			</TextBlock>
		</div>
	);
};
