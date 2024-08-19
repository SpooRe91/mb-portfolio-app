type TextCardProps = {
	title: string;
	text: string;
	titleClassName?: string;
	textClassName?: string;
	containerClassName?: string;
};
/**
 * A reusable component that displays a card with a title and text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display in the card.
 * @param {string} props.text - The text content to display in the card.
 * @param {string} [props.titleClassName] - Optional CSS class name for the title element.
 * @param {string} [props.textClassName] - Optional CSS class name for the text element.
 * @param {string} [props.containerClassName] - Optional CSS class name for the container element.
 *
 * @returns {React.Element} The rendered component.
 */
export const TextCard = ({
	title,
	text,
	titleClassName,
	textClassName,
	containerClassName,
}: TextCardProps) => {
	return (
		<div className={containerClassName}>
			<h2 className={titleClassName}>{title}</h2>
			<p className={textClassName}>{text}</p>
		</div>
	);
};
