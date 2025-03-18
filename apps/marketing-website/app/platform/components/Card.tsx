import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
import React from 'react';

interface CardProps {
	title: string;
	description: string;
	buttonText: string;
	image: string;
	reverse?: boolean;
	textSectionProps?: string;
	imageSectionProps?: string;
	leftSideWrapProps?: string;
	rightSideWrapProps?: string;
}

const Card: React.FC<CardProps> = ({
	title,
	description,
	buttonText,
	image,
	reverse = false,
	textSectionProps = '',
	imageSectionProps = '',
	leftSideWrapProps = '',
	rightSideWrapProps = '',
}) => {
	return (
		<div className={`bg-pale-azure rounded-3xl w-full p-5 pt-8 flex items-center justify-between md:h-[450px] md:p-0`}>
			{/* Left content */}
			<div className={`flex-1 ${leftSideWrapProps}`}>
				{!reverse && (
					<div className={textSectionProps}>
						<Typography as={'h3'} className="mb-2.5">
							{title}
						</Typography>
						<Typography as={'p_secondary'} className="text-slate-gray md:text-lg">
							{description}
						</Typography>
						<div className="mt-8">
							<button>{buttonText}</button>
						</div>
					</div>
				)}
				{reverse && (
					<Image
						width={1000}
						height={500}
						className={`w-full h-full object-cover ${imageSectionProps}`}
						src={image}
						alt={title.replace(/\s+/g, '_').toLowerCase()}
					/>
				)}
			</div>

			{/* Right content */}
			<div className={`flex-1 ${rightSideWrapProps}`}>
				{reverse && (
					<div className={textSectionProps}>
						<Typography as={'h3'} className="mb-2.5">
							{title}
						</Typography>
						<Typography as={'p_secondary'} className="text-slate-gray md:text-lg">
							{description}
						</Typography>
						<div className="mt-8">
							<button>{buttonText}</button>
						</div>
					</div>
				)}
				{!reverse && (
					<Image
						width={1000}
						height={500}
						className={`w-full h-full object-cover ${imageSectionProps}`}
						src={image}
						alt={title.replace(/\s+/g, '_').toLowerCase()}
					/>
				)}
			</div>
		</div>
	);
};

export default Card;
