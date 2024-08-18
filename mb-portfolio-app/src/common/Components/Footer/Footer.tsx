'use client';
import { GitHub, LinkedIn } from '@UI';
import { useExtractText } from '@CommonImports';
import Link from 'next/link';

export const Footer = () => {
	const { keyToText } = useExtractText();

	return (
		<section
			className={`border-t-[1px solid kobicha] absolute bottom-0 left-0 z-[10] m-auto mx-[auto] flex w-full flex-col items-center bg-bg-transparent-black-secondary px-4 py-8 text-colorMediumDark shadow-box-shadow-border-top`}
		>
			<h1 className="mb-4 font-bold sm:text-sm md:text-3xl">
				{keyToText('FOOTER.HEADER')}
			</h1>
			<p className="text-center sm:text-sm md:text-lg">
				{keyToText('FOOTER.SECONDARY_TEXT')}
			</p>

			<div className="flex space-x-4 p-[0.5rem]">
				<Link
					href="https://github.com/SpooRe91"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-colorMediumLight transition-colors hover:text-rawUmber"
				>
					<GitHub /> <p>{keyToText('FOOTER.SOCIAL_GITHUB')}</p>
				</Link>
				<Link
					href="https://www.linkedin.com/in/mbogdanov9110/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-colorMediumLight transition-colors hover:text-rawUmber"
				>
					<LinkedIn /> <p>{keyToText('FOOTER.SOCIAL_LINKEDIN')}</p>
				</Link>
			</div>
		</section>
	);
};
