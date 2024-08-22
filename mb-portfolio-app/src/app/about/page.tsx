'use client';
import {
	IconsContainer,
	useExtractText,
	ICON_NAMES_URLS,
} from '@CommonImports';
import { useMemo } from 'react';
import { icons } from '../../../public/icons/index';
import { v4 as uuid } from 'uuid';
import { TextBlock } from '@UI';
import { motion } from 'framer-motion';

type IconList = {
	src: string;
	name: string;
	extUrl: string;
}[];

const About = () => {
	const { keyToText } = useExtractText();

	const iconList = useMemo((): IconList => {
		return Object.values(icons).map((src: string, i) => ({
			src,
			name: ICON_NAMES_URLS[i].name,
			extUrl: ICON_NAMES_URLS[i].extUrl,
		}));
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Stagger the children animations
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	const iconVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: i * 0.1, // Stagger the icons
				duration: 0.3,
				ease: 'easeOut',
			},
		}),
	};

	return (
		<section className="relative flex flex-col items-center justify-center pb-[15rem] sm:ml-[1rem] sm:mr-[1rem] sm:min-h-screen-h-sm sm:pt-[4rem] md:ml-[1rem] md:mr-[1rem] md:min-h-screen-h-md md:pt-[2rem]">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={containerVariants}
				viewport={{ once: true }}
				className="relative z-[10] flex flex-col items-center text-about-text-color sm:gap-[0.5rem]"
			>
				<motion.div
					variants={textVariants}
					className="flex max-w-4xl flex-col flex-wrap items-center gap-5 rounded-[5px] bg-bg-transparent-black-secondary p-[1.25rem] align-middle shadow-box-shadow-border-bottom"
				>
					<h1 className="mb-4 text-3xl font-bold sm:mb-0">
						{keyToText('ABOUT.HEADER')}
					</h1>
					<p className={`text-left sm:text-sm md:text-lg`}>
						{keyToText('ABOUT.FIRST_PARAGRAPH')}
					</p>
					<p className={`text-left sm:text-sm md:text-lg`}>
						{keyToText('ABOUT.SECOND_PARAGRAPH')}
					</p>
				</motion.div>

				<motion.div variants={textVariants} className="flex flex-col">
					<TextBlock
						title={keyToText('PROJECTS.TECHS_I_USE')}
						titleClassName="mb-0 sm:text-base md:text-xl"
						className="flex flex-col items-center justify-center p-2 text-center text-tech-text-color drop-shadow-homeTextShadow"
					/>

					<div className="w-850px w-max-[850px] max-w-4xl rounded-[8px] bg-bg-transparent-black-main shadow-box-shadow-border-bottom">
						<div className="flex w-full max-w-[750px] flex-row flex-wrap justify-center gap-[1rem] p-[1rem] [transform-style:preserve-3d] [transform:perspective(1000px)]">
							{iconList.map(({ src, name, extUrl }, index) => (
								<motion.div
									key={uuid()}
									custom={index}
									variants={iconVariants}
									className="sm:h-[35px] sm:w-[35px] md:h-[64px] md:w-[64px]"
								>
									<IconsContainer
										src={src}
										name={name}
										extUrl={extUrl}
										imgClassname={`w-full h-full ${name === 'GitHub' && 'brightness-[1] invert'} sm:rounded-[50%] md:rounded-[8px]`}
										containerClassName="sm:w-[35px] sm:h-[35px] md:w-[64px] md:h-[64px] overflow-hidden md:hover:[transform:translateZ(20px)] transition-all"
									/>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
