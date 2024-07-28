import Link from "next/link";

type TextBlockProps = {
    title?: string;
    content?: string;
    url?: string;
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    children?: React.ReactNode;
};

const TextBlock = ({
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
                    className="transition-all text-decoration: underline hover:text-tech-text-color"
                >
                    <p className={`text-xl font-bold mb-2 ${titleClassName}`}>{title}</p>
                </Link>
            ) : (
                <p className={`text-xl font-bold mb-2 ${titleClassName}`}>{title}</p>
            )}
            {content && <p className={`text-base leading-relaxed ${contentClassName}`}>{content}</p>}
            {children}
        </div>
    );
};

export default TextBlock;
