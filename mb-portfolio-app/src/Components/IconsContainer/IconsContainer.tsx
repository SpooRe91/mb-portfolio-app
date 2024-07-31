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
 * A custom component which can accept the following props, to display images with or without a `Link` wrapper:
 * - `src: string(required)` - the `src` of the Image;
 * - `name: string(optional)` - the name of the Image, it will be applied to the `title` and `alt` of the `Image`;
 * - `extUrl: string(optional)` - the extUrl of the image if it is present, then the image will be wraped in `Link`;
 * - `containerClassName: string(optional)` - all the styles to be applied to the `<div>` element wrapper of the component;
 * - `imgClassname: string(optional)` - all the styles to be applied to the `<Image>` element;
 * - `linkClassName: string(optional)` - all the styles to be applied to the `<Link>` element;
 *
 * The `Image` component inside has `priority` attribute added, to ensure that the images load with such.
 * The `Link` has attributes: `target="_blank"` & `rel="noreferrer noopener"`
 *
 * NOTE: In order to wrap the`<Image>` element into a `<Link>` element, you must pass `extUrl` prop;
 */
const IconsContainer = ({
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
