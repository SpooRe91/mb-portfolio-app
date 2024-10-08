import Link from 'next/link';

type TextBlockProps = {
	title?: string;
	content?: string;
	url?: string;
	className?: string;
	contentClassName?: string;
	titleClassName?: string;
	children?: React.ReactNode;
};

export const TextBlock = ({
	title,
	content,
	url,
	className,
	contentClassName,
	titleClassName,
	children,
}: TextBlockProps) => {
	const hasUrlAndTitle = !!(url && title);

	return (
		<div className={className}>
			{hasUrlAndTitle ? (
				<Link
					href={url}
					target="_blank"
					rel="noopenner noreferrer"
					className="text-decoration: underline transition-all hover:text-tech-text-color"
				>
					<p className={`mb-2 text-xl font-bold ${titleClassName}`}>{title}</p>
				</Link>
			) : (
				<p className={`mb-2 text-xl font-bold ${titleClassName}`}>{title}</p>
			)}
			{content && (
				<p className={`text-base leading-relaxed ${contentClassName}`}>
					{content}
				</p>
			)}
			{children}
		</div>
	);
};
