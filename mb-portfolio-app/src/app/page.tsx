'use client';
import { HOME_PAGE_CARD_TITLES, useExtractText } from '@CommonImports';
import { RocketLaunch, TextCard } from '@UI';
import Image from 'next/image';
import Link from 'next/link';
import { homeBG } from '../../public/backgrounds';
import { cardImages } from '../../public/homePageCardImages';
import { motion } from 'framer-motion';

const HomePage = () => {
	const { keyToText } = useExtractText();

	return (
		<section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br sm:min-h-screen-h-sm-noNav sm:pb-[15rem] sm:pt-[5rem] md:min-h-screen-h-md">
			<motion.div
				className="absolute left-0 top-0 h-full w-full"
				initial={{ scale: 1.1, y: '-10%' }}
				animate={{ scale: 1, y: '0%' }}
				transition={{ duration: 1.2, ease: 'easeOut' }}
				style={{ zIndex: -1 }}
			>
				<Image
					src={homeBG}
					alt="BG IMAGE"
					className="fixed min-h-screen w-full object-cover brightness-[0.5]"
					priority
				/>
			</motion.div>

			<motion.div
				className="mx-auto max-w-6xl px-[1rem] text-center"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
			>
				<div className="mb-6 flex items-center justify-center sm:flex-wrap md:flex-nowrap">
					<RocketLaunch className="mr-4 text-[#dfdfdf] sm:text-2xl md:text-5xl" />
					<h1
						className="font-extrabold text-transparent sm:text-2xl md:text-5xl"
						style={{
							textShadow:
								'1px 1px 1px #000000, 2px 2px 10px #5ab099, 2px 2px 10px #5ab099, 2px 2px 0px #5eb79f',
						}}
					>
						{keyToText('HOME.WELCOME_MAIN') as string}
					</h1>
				</div>
				<p className="mb-8 text-lg text-[#a2c9fc] drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]">
					{keyToText('HOME.SECONDARY_TEXT') as string}
				</p>
				<button className="rounded-full bg-[#1B263B] px-6 py-3 font-bold text-[#E0E1DD] drop-shadow-homeTextShadow transition-all hover:bg-[#68948a]">
					<Link
						className="drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]"
						href="/projects"
					>
						Get Started
					</Link>
				</button>
			</motion.div>
			<motion.div
				className="mx-auto max-w-full px-[1rem] text-center"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
			>
				<div className="mt-12 grid sm:grid-cols-1 sm:gap-[10rem] md:grid-cols-2 md:gap-[2rem] lg:grid-cols-3">
					{HOME_PAGE_CARD_TITLES.map((key, i) => (
						<div
							key={i}
							className={`flex flex-col items-center gap-[1rem] rounded-[12px] bg-bg-transparent-black-secondary p-4 text-[#a2c9fc]`}
						>
							<div className="h-[11rem] w-full flex-shrink-0 md:w-full">
								<Image
									src={cardImages[key]}
									alt={key}
									className="h-full max-h-[11rem] w-full rounded-lg object-cover brightness-[0.75]"
								/>
							</div>

							<div className="md:ml-4 md:mr-4 md:w-full">
								<p>{keyToText(key) as string}</p>
								<TextCard
									title={keyToText(`HOME.${key}.TITLE`) as string}
									text={keyToText(`HOME.${key}.TEXT`) as string}
									titleClassName="font-bold mb-2 text-colorDarkMedBlue drop-shadow-homeTextShadow sm:text-[1rem] md:text-[1.5rem]"
									textClassName="text-[#a2c9fc] drop-shadow-homeTextShadow sm:text-[1rem] md:text-[1.2rem]"
								/>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default HomePage;
