import Link from "next/link";

type TextBlockProps = {
    title?: string;
    content?: string;
    url?: string;
    className?: string;
    children?: React.ReactNode;
};

export const TextBlock = ({ title, content, url, className, children }: TextBlockProps) => {
    const hasUrlAndTitle = !!(url && title);

    return (
        <div className={className}>
            {hasUrlAndTitle ? (
                <Link
                    href={url}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="transition-all text-decoration: underline hover:text-colorDark"
                >
                    <p className="text-xl font-bold mb-2">{title}</p>
                </Link>
            ) : (
                <p className="text-xl font-bold mb-2">{title}</p>
            )}
            {content && <p className="text-base leading-relaxed">{content}</p>}
            {children}
        </div>
    );
};

export default TextBlock;
