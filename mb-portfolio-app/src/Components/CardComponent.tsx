import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

type CardComponentProps = {
    img?: string;
    text: string;
    className?: string;
    imgClassName?: string;
    textClassName?: string;
    imgWidth?: number;
    imgHeight?: number;
};

const CardComponent = ({
    img,
    text,
    className,
    imgClassName,
    textClassName,
    imgWidth = 350,
    imgHeight = 250,
}: CardComponentProps) => {
    return (
        <div
            className={`flex flex-col items-center text-center bg-gunmetal rounded-xl overflow-hidden ${
                img && "shadow-image-container-box-shadow"
            } ${className}`}
        >
            {img && (
                <div
                    className={`relative w-full shadow-image-container-box-shadow ${imgClassName}`}
                    style={{ maxWidth: `${imgWidth}px`, height: `${imgHeight}px` }}
                >
                    <Image
                        src={img}
                        alt="Card image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                </div>
            )}
            <div className={`px-1 py-2 ${img && "backdrop-blur-sm"} ${textClassName}`}>
                <p className="text-base leading-relaxed rounded-lg">{text}</p>
            </div>
        </div>
    );
};

export default CardComponent;
