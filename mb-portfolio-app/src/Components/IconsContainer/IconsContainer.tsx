import Image from "next/image";
import Link from "next/link";

type IconContainerProps = {
    src: string;
    name?: string;
    extUrl?: string;
    containerClassName?: string;
    imgClassname?: string;
    linkClassName?: string;
};

/**
 * A custom component that displays an image with optional `Link` wrapping.
 * @param {string} [src] (required) - The source URL of the image. This is a required prop.
 * @param {string} [name] - The name of the image. It is used for the `title` and `alt` attributes of the image.
 * @param {string} [extUrl] - The external URL for wrapping the image in a `<Link>`. If provided, the image will be wrapped in a `Link` component.
 * @param {string} [containerClassName] - CSS class names to be applied to the `<div>` wrapper element of the component.
 * @param {string} [imgClassName] - CSS class names to be applied to the `<Image>` element.
 * @param {string} [linkClassName] - CSS class names to be applied to the `<Link>` element.
 *
 * @example
 *
 *<div className={`${containerClassName}`}>
 *          {extUrl ? (
 *              <Link href={extUrl} target="_blank" rel="noreferrer noopener" className={`${linkClassName}`}>
 *                  <Image title={name} src={src} alt={name || ""} className={`${imgClassname}`} priority />
 *              </Link>
 *          ) : (
 *               <Image title={name} src={src} alt={name || ""} className={`${imgClassname}`} priority />
 *          )}
 *</div>
 *
 * @note
 * The `Image` component has the `priority` attribute added to ensure images load with high priority.
 * The `Link` component has attributes `target="_blank"` and `rel="noreferrer noopener"`.
 * To wrap the `<Image>` element in a `<Link>` element, provide the `extUrl` prop.
 */
export const IconsContainer = ({
    src,
    name,
    extUrl,
    containerClassName,
    imgClassname,
    linkClassName,
}: IconContainerProps) => {
    return (
        <div className={`${containerClassName}`}>
            {extUrl ? (
                <Link href={extUrl} target="_blank" rel="noreferrer noopener" className={`${linkClassName}`}>
                    <Image title={name} src={src} alt={name || ""} className={`${imgClassname}`} priority />
                </Link>
            ) : (
                <Image title={name} src={src} alt={name || ""} className={`${imgClassname}`} priority />
            )}
        </div>
    );
};

export default IconsContainer;
