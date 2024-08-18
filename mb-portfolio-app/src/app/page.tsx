'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TextCard } from '@PortfolioApp/Components';
import { useExtractText } from '@PortfolioApp/hooks';
import { homeBG } from '../../public/backgrounds';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { HOME_PAGE_CARD_TITLES } from '@PortfolioApp/app/constants/constants';

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
				className="mx-auto max-w-4xl px-[1rem] text-center"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
			>
				<div className="mb-6 flex items-center justify-center sm:flex-wrap md:flex-nowrap">
					<RocketLaunchIcon className="mr-4 text-[#dfdfdf] sm:text-2xl md:text-5xl" />
					<h1
						className="font-extrabold text-transparent sm:text-2xl md:text-5xl"
						style={{
							textShadow:
								'1px 1px 1px #000000, 2px 2px 10px #5ab099, 2px 2px 10px #5ab099, 2px 2px 0px #5eb79f',
						}}
					>
						{keyToText('HOME.WELCOME_MAIN')}
					</h1>
				</div>
				<p className="mb-8 text-lg text-[#a2c9fc] drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]">
					{keyToText('HOME.SECONDARY_TEXT')}
				</p>
				<motion.button
					className="rounded-full bg-[#1B263B] px-6 py-3 font-bold text-[#E0E1DD] drop-shadow-homeTextShadow transition-all hover:bg-[#68948a]"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link
						className="drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]"
						href="/projects"
					>
						Get Started
					</Link>
				</motion.button>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{HOME_PAGE_CARD_TITLES.map((key, i) => (
						<div
							key={i}
							className="rounded-lg bg-[#1B263B] p-4 text-[#a2c9fc] shadow-lg drop-shadow-homeTextShadow"
						>
							<p>{keyToText(key)}</p>
							<TextCard
								title={keyToText(`HOME.${key}.TITLE`) as string}
								text={keyToText(`HOME.${key}.TEXT`) as string}
								titleClassName="font-bold mb-2 text-colorDarkMedBlue drop-shadow-homeTextShadow sm:text-[1rem] md:text-[1.25rem]"
								textClassName="text-[#a2c9fc] drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]"
							/>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default HomePage;
