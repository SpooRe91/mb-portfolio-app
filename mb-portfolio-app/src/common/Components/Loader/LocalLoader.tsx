'use client';
import { CircularProgress } from '@UI';
import { TextBlock } from '@CommonImports';

type LoadingProps = {
	loadingText?: string;
	mainClassName?: string;
	textClassName?: string;
};

/**
 * You can add props to differnt components:
 * 
 * - `loadingText`:`string` - the text you wish to have on your loader;
 * - `mainClassName`:`string` - the stylings for the div wrapper;
 * - `textClassName`:`string` - the stylings for the loadingText:
 * 
 * Code structure:
 * `<div className={`${mainClassName}`}>
 *      <CircularProgress color="inherit" className="text-colorMediumDark" />
 *      <TextBlock
 *      title={loadingText ? loadingText : "Loading..."}
 *      titleClassName={`md:text-2xl sm:text-base ${textClassName}`}
 *      className="tracking-widest text-colorMediumDark md:text-3xl sm:text-xl text-center"
 *   />
</div>`
 */
export const LocalLoader = ({
	loadingText,
	mainClassName,
	textClassName,
}: LoadingProps) => {
	return (
		<div className={`${mainClassName}`}>
			<CircularProgress color="inherit" className="text-colorMediumDark" />
			<TextBlock
				title={loadingText ? loadingText : 'Loading...'}
				titleClassName={`md:text-2xl sm:text-base ${textClassName}`}
				className="text-center tracking-widest text-colorMediumDark drop-shadow-homeTextShadow sm:text-xl md:text-3xl"
			/>
		</div>
	);
};
