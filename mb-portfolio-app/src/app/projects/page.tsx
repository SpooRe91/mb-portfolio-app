'use client';
import {
	LocalLoader,
	ServerDown,
	ProjectCard,
	Notification,
	useGetViewWidth,
	useExtractText,
	useFetchProjects,
} from '@CommonImports';
import { projectsBG } from '../../../public/backgrounds';
import Image from 'next/image';

const ProjectsComponent = () => {
	const { isMobile } = useGetViewWidth();
	const { keyToText } = useExtractText();
	const { data, isLoading, message, handleClearMessage } = useFetchProjects();

	if (isLoading) {
		return (
			<LocalLoader
				mainClassName="md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col items-center justify-center"
				loadingText={keyToText('PROJECTS.LOCAL_LOADING_TEXT')}
			/>
		);
	}

	if (!isLoading && !data) {
		return (
			<>
				<ServerDown />
				<div className="flex w-full bg-bg-transparent-black-secondary shadow-box-shadow-border-bottom sm:flex-col sm:items-center sm:px-3 md:flex-row md:justify-center">
					<h3 className="text-center text-colorMedLightBlue sm:p-[0.5rem] sm:text-sm md:p-[1rem] md:text-lg">
						{keyToText('PROJECTS.MORE_PORJECTS_ON_GH')}
					</h3>
				</div>
			</>
		);
	}

	return (
		<section className="relative pb-[15rem] sm:min-h-screen-h-sm sm:pt-[5rem] md:min-h-screen-h-md md:pt-[0]">
			{!isMobile && (
				<Image
					src={projectsBG}
					alt="BG IMAGE"
					className="fixed z-[-1] min-h-bg-image-height w-full object-cover brightness-[0.5]"
					priority
				/>
			)}
			<div className="flex w-full flex-col items-center gap-24 rounded-lg">
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
					<div className="mt-[1rem] flex w-full bg-bg-transparent-black-secondary shadow-box-shadow-border-bottom sm:flex-col sm:items-center sm:px-3 md:flex-row md:justify-around">
						<h1 className="px-5 py-8 text-4xl text-colorMedLightBlue">
							{keyToText('PROJECTS.MY_PROJECTS')}
						</h1>
					</div>
				}
				{!!data?.length && (
					<div className="relative ml-[1rem] mr-[2rem] grid max-w-screen-xl grid-cols-1 place-items-center items-center gap-8 rounded-[8px] bg-bg-transparent-black-main p-8 [transform-style:preserve-3d] [transform:perspective(1000px)] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{!isMobile && (
							<span className="absolute left-0 top-0 z-[-1] h-full w-full rounded-[8px] bg-transparent bg-projects-secondary-bg bg-cover bg-fixed bg-clip-border bg-center bg-no-repeat brightness-[0.25]"></span>
						)}
						{data.map((projectElement, index) => (
							<ProjectCard
								key={projectElement?.id}
								projectsData={projectElement}
								isMobile={isMobile}
								index={index}
							/>
						))}
					</div>
				)}
				{!isLoading && (
					<div className="flex w-full bg-bg-transparent-black-secondary shadow-box-shadow-border-bottom sm:flex-col sm:items-center sm:px-3 md:flex-row md:justify-center">
						<h3 className="text-center text-colorMedLightBlue sm:p-[0.5rem] sm:text-sm md:p-[1rem] md:text-lg">
							{keyToText('PROJECTS.MORE_PORJECTS_ON_GH')}
						</h3>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProjectsComponent;
