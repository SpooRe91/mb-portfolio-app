'use client';
import { CircularProgress } from '@UI';
import { TextBlock } from '@CommonImports';

type LoadingProps = {
	loadingText?: string;
	mainClassName?: string;
	secondaryClassName?: string;
	textClassName?: string;
};

export const GlobalLoader = ({
	loadingText,
	mainClassName,
	secondaryClassName,
	textClassName,
}: LoadingProps) => {
	return (
		<div
			className={`${mainClassName} z-[10] flex w-full items-center justify-center bg-bg-transparent-black-main`}
		>
			<div
				className={`flex w-full flex-col items-center justify-center gap-4 rounded-[8px] bg-bg-transparent-black-main sm:p-[1rem] ${secondaryClassName}`}
			>
				<CircularProgress color="inherit" className="text-colorMediumDark" />
				<TextBlock
					title={loadingText ? loadingText : 'Loading...'}
					titleClassName={`md:text-2xl sm:text-base ${textClassName}`}
					className="text-center tracking-widest text-colorMediumDark drop-shadow-homeTextShadow sm:text-xl md:text-3xl"
				/>
			</div>
		</div>
	);
};
