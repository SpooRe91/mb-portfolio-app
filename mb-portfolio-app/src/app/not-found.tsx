'use client';
import useExtractText from '@PortfolioApp/hooks/useExtractText';
import Image from 'next/image';
import Link from 'next/link';
import image from '../../public/404_confused.webp';

const NotFoundPage = () => {
	const { keyToText } = useExtractText();
	return (
		<div className="flex flex-col items-center justify-center bg-bg-transparent-black-tretriary text-colorLight sm:min-h-screen-h-sm md:min-h-screen-h-md">
			<Image
				src={image}
				alt="not-found-image"
				className="sm:max-h- absolute z-[-1] object-cover brightness-[0.5] sm:max-h-max-screen-h-sm sm:min-h-screen-h-sm md:max-h-max-screen-h-sm md:min-h-screen-h-md"
				placeholder="blur"
			/>
			<h1 className="mb-4 text-6xl font-bold sm:text-center sm:text-4xl md:text-6xl">
				{keyToText('NOT_FOUND.404')}
			</h1>
			<p className="mb-8 text-2xl sm:text-center sm:text-base md:text-2xl">
				{keyToText('NOT_FOUND.NOT_FOUND_TEXT')}
			</p>
			<Link href="/">
				<p className="rounded-md bg-colorMedLightBlue px-4 py-2 text-licorice shadow-lg transition-all duration-300 hover:bg-greenHover">
					{keyToText('NOT_FOUND.BACK_TO_HOME')}
				</p>
			</Link>
		</div>
	);
};

export default NotFoundPage;
