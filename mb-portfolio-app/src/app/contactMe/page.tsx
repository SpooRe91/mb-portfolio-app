'use client';
import { TextBlock, ContactForm } from '@PortfolioApp/Components';
import { useExtractText } from '@PortfolioApp/hooks';
import { contactBG } from '../../../public/backgrounds';
import Image from 'next/image';

const Contact = () => {
	const { keyToText } = useExtractText();

	return (
		<section className="min-h-screen sm:min-h-screen-h-sm sm:pb-[12rem] sm:pt-[2.5rem] md:min-h-screen-h-md md:pt-[0]">
			<Image
				src={contactBG}
				alt="BG IMAGE"
				className="fixed left-0 top-0 z-[-1] min-h-bg-image-height w-full object-cover brightness-[0.5]"
				priority
			/>
			<div className="flex w-full gap-[1rem] p-8 sm:flex-col sm:items-center md:flex-row md:items-start md:justify-center">
				<div className="flex flex-col items-center rounded-lg bg-bg-transparent-black-tretriary p-[1rem] shadow-box-shadow-border-bottom backdrop-blur-[5px]">
					<h1 className="mb-8 font-bold text-colorDarkMedBlue sm:text-xl md:text-4xl">
						{keyToText('CONTACT.HEADER')}
					</h1>
					<TextBlock
						className="p-[0.8rem] text-center text-colorMediumDark"
						titleClassName="sm:text-base md:text-xl"
						title={keyToText('CONTACT.SEND_EMAIL_TEXT')}
						content={keyToText('CONTACT.SEND_EMAIL_AFFIRMATION')}
						contentClassName="sm:text-base md:text-lg"
					/>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
