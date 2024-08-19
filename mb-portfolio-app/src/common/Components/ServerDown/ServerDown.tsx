'use client';
import { useExtractText } from '@CommonImports';
import { TextBlock } from '@UI';

export const ServerDown = () => {
	const { keyToText } = useExtractText();

	return (
		<div className="max-w- flex w-full flex-col items-center gap-1 bg-bg-transparent-black-main shadow-box-shadow-dark">
			<h1 className="px-5 py-8 text-center text-colorMediumDark sm:text-xl md:text-4xl">
				{keyToText('SERVER_ERROR.HEADER')}
			</h1>
			<TextBlock
				title={keyToText('SERVER_ERROR.SECONDARY_TEXT')}
				className="justify-cetetext-block flex flex-col items-center gap-4 p-2 text-center text-tech-text-color"
			></TextBlock>
		</div>
	);
};
