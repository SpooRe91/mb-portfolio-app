'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion
import { icons } from '../../../public/icons/index';
import {
	IconsContainer,
	useExtractText,
	ICON_NAMES_URLS,
} from '@CommonImports';
import {
	TextCard,
	AccountCircle,
	Build,
	Psychology,
	KeyboardArrowDown,
	TextBlock,
} from '@UI';

const About = () => {
	const { keyToText } = useExtractText();
	const [expandedSection, setExpandedSection] = useState<string | null>(null);

	const iconList = useMemo(() => {
		return Object.values(icons).map((src: string, i) => ({
			src,
			name: ICON_NAMES_URLS[i].name,
			extUrl: ICON_NAMES_URLS[i].extUrl,
		}));
	}, []);

	const toggleSection = (section: string) => {
		setExpandedSection(prev => (prev === section ? null : section));
	};

	// Animation variants for the framer-motion component
	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<section className="relative flex flex-col items-center justify-center pb-[15rem] sm:ml-[1rem] sm:mr-[1rem] sm:min-h-screen-h-sm sm:pt-[4rem] md:ml-[1rem] md:mr-[1rem] md:min-h-screen-h-md md:pt-[2rem]">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={fadeInUp}
				className="relative z-[10] flex flex-col items-center text-about-text-color sm:gap-[0.5rem]"
			>
				<div className="flex flex-col items-center gap-5 p-[1.25rem]">
					<h1 className="mb-4 text-3xl font-bold text-colorMediumLight">
						{keyToText('ABOUT.HEADER')}
					</h1>
					<div className="mb-6 w-full max-w-4xl rounded-lg bg-bg-transparent-black-secondary shadow-box-shadow-secondary transition-all md:hover:shadow-box-shadow-top-and-bottom">
						<div
							onClick={() => toggleSection('whoAmI')}
							className="flex items-center justify-between gap-4 p-4 md:hover:cursor-pointer"
						>
							<AccountCircle fontSize="large" />
							<h2 className="text-xl font-semibold text-colorDark sm:text-[1rem] md:text-[1.25rem]">
								{keyToText('ABOUT.HEADER_WHO_I_AM')}
							</h2>
							<button className="text-blue-500 hover:underline">
								<KeyboardArrowDown
									className={`${expandedSection === 'whoAmI' ? 'rotate-[180deg]' : 'rotate-[0deg]'} text-[2rem] text-colorMediumDark transition-all`}
								/>
							</button>
						</div>
						<div
							className={`transition-max-height overflow-hidden duration-500 ${expandedSection === 'whoAmI' ? 'max-h-[500px]' : 'max-h-0'} sm:overflow-y-auto md:overflow-y-hidden`}
						>
							<div className="p-4">
								<TextCard
									title=""
									text={keyToText('ABOUT.FIRST_PARAGRAPH')}
									titleClassName="text-colorDark"
									textClassName="text-colorMediumDark"
									containerClassName="bg-bg-transparent-black-secondary rounded-lg shadow-box-shadow-secondary mb-4 p-[1rem]"
								/>
								<TextCard
									title=""
									text={keyToText('ABOUT.SECOND_PARAGRAPH')}
									titleClassName="text-colorDark"
									textClassName="text-colorMediumDark"
									containerClassName="bg-bg-transparent-black-secondary rounded-lg shadow-box-shadow-secondary p-[1rem]"
								/>
							</div>
						</div>
					</div>
					<div className="mb-6 w-full max-w-4xl rounded-lg bg-bg-transparent-black-secondary shadow-box-shadow-secondary transition-all md:hover:shadow-box-shadow-top-and-bottom">
						<div
							onClick={() => toggleSection('experienceSkills')}
							className="flex items-center justify-between gap-4 p-4 md:hover:cursor-pointer"
						>
							<Build fontSize="large" />
							<h2 className="text-xl font-semibold text-colorDark sm:text-[1rem] md:text-[1.25rem]">
								{keyToText('ABOUT.HEADER_EXP_SKILLS')}
							</h2>
							<button className="text-blue-500">
								<KeyboardArrowDown
									className={`${expandedSection === 'experienceSkills' ? 'rotate-[180deg]' : 'rotate-[0deg]'} text-[2rem] text-colorMediumDark transition-all`}
								/>
							</button>
						</div>
						<div
							className={`transition-max-height overflow-hidden duration-500 ${expandedSection === 'experienceSkills' ? 'max-h-[500px]' : 'max-h-0'} sm:overflow-y-auto md:overflow-y-hidden`}
						>
							<div className="p-4">
								<TextCard
									title=""
									text={keyToText('ABOUT.EXPERIENCE_SKILL_1')}
									titleClassName="text-colorDark"
									textClassName="text-colorMediumDark"
									containerClassName="bg-bg-transparent-black-secondary rounded-lg shadow-box-shadow-secondary mb-4 p-[1rem]"
								/>
								<TextCard
									title=""
									text={keyToText('ABOUT.EXPERIENCE_SKILL_2')}
									titleClassName="text-colorDark"
									textClassName="text-colorMediumDark"
									containerClassName="bg-bg-transparent-black-secondary rounded-lg shadow-box-shadow-secondary p-[1rem]"
								/>
							</div>
						</div>
					</div>
					<div className="mb-6 w-full max-w-4xl rounded-lg bg-bg-transparent-black-secondary shadow-box-shadow-secondary transition-all md:hover:shadow-box-shadow-top-and-bottom">
						<div
							onClick={() => toggleSection('approach')}
							className="flex items-center justify-between gap-4 p-4 md:hover:cursor-pointer"
						>
							<Psychology fontSize="large" />
							<h2 className="text-xl font-semibold text-colorDark sm:text-[1rem] md:text-[1.25rem]">
								{keyToText('ABOUT.HEADER_APPROACH')}
							</h2>
							<button className="text-blue-500 hover:underline">
								<KeyboardArrowDown
									className={`${expandedSection === 'approach' ? 'rotate-[180deg]' : 'rotate-[0deg]'} text-[2rem] text-colorMediumDark transition-all`}
								/>
							</button>
						</div>
						<div
							className={`transition-max-height overflow-hidden duration-500 ${expandedSection === 'approach' ? 'max-h-[500px]' : 'max-h-0'} sm:overflow-y-auto md:overflow-y-hidden`}
						>
							<div className="p-4">
								<TextCard
									title=""
									text={keyToText('ABOUT.APPROACH_1')}
									titleClassName="text-colorDark"
									textClassName="text-colorMediumDark"
									containerClassName="bg-bg-transparent-black-secondary rounded-lg shadow-box-shadow-secondary mb-4 p-[1rem]"
								/>
								<TextCard
									title=""
									text={keyToText('ABOUT.APPROACH_2')}
									titleClassName="text-colorDark"
									textClassName="text-colorMediumDark"
									containerClassName="bg-bg-transparent-black-secondary rounded-lg shadow-box-shadow-secondary p-[1rem]"
								/>
							</div>
						</div>
					</div>
					<div className="w-4xl max-w-4xl rounded-[8px] bg-bg-transparent-black-main shadow-box-shadow-border-bottom">
						<TextBlock
							title={keyToText('PROJECTS.TECHS_I_USE')}
							titleClassName="mb-0 sm:text-base md:text-xl"
							className="flex flex-col items-center justify-center p-2 text-center text-tech-text-color drop-shadow-homeTextShadow"
						/>
						<div className="flex w-full max-w-[750px] flex-row flex-wrap justify-center gap-[1rem] p-[1rem] [transform-style:preserve-3d] [transform:perspective(1000px)]">
							{iconList.map(({ src, name, extUrl }, index) => (
								<div
									key={index}
									className="[transform-style:preserve-3d] [transform:perspective(1000px)] sm:h-[35px] sm:w-[35px] md:h-[64px] md:w-[64px]"
								>
									<IconsContainer
										src={src}
										name={name}
										extUrl={extUrl}
										imgClassname={`w-full h-full ${name === 'GitHub' && 'brightness-[1] invert'} sm:rounded-[50%] md:rounded-[8px]`}
										containerClassName="sm:w-[35px] sm:h-[35px] md:w-[64px] md:h-[64px] overflow-hidden md:hover:[transform:translateZ(20px)] transition-all"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
export default About;
