import Image from 'next/legacy/image';
import React from 'react';

type CardComponentProps = {
	img?: string;
	text: string;
	className?: string;
	imgClassName?: string;
	textClassName?: string;
	imgWidth?: number;
	imgHeight?: number;
};

export const Card = ({
	img,
	text,
	className,
	imgClassName,
	textClassName,
	imgWidth = 250,
	imgHeight = 250,
}: CardComponentProps) => {
	return (
		<div
			className={`bg-gunmetal flex flex-col items-center overflow-hidden rounded-xl text-center ${
				img && 'shadow-image-container-box-shadow'
			} ${img && className}`}
		>
			{img && (
				<div
					className={`relative w-full shadow-image-container-box-shadow ${imgClassName}`}
					style={{
						maxWidth: `${imgWidth}px`,
						height: `${imgHeight}px`,
					}}
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
			<div className={`px-1 py-2 ${textClassName}`}>
				<p className="rounded-lg text-base leading-relaxed">{text}</p>
			</div>
		</div>
	);
};
