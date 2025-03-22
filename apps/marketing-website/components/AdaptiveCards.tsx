import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
import React from 'react';
import { Button } from '@workspace/ui/components/button';

interface AdaptiveCardsProps {
	title: string;
	description: string;
	imageSrc: string;
	stepNumber?: number;
	showButton?: boolean;
	buttonText?: string;
}

const AdaptiveCards: React.FC<AdaptiveCardsProps> = ({
	title,
	description,
	imageSrc,
	stepNumber = 1,
	showButton = false,
	buttonText = 'Learn More',
}) => {
	return (
		<div className="flex lg:flex-row flex-col items-center lg:justify-between">
			{/* Mobile Dashed Line & Step Indicator */}
			<div className="flex lg:hidden items-center w-full mx-4 mb-2">
				<div>
					<div className="flex text-[21px] font-semibold items-center justify-center w-10 h-10 rounded-full bg-[#E7E7E7]">
						{stepNumber}
					</div>
				</div>
				<div className="relative w-full block h-[1px] bg-[linear-gradient(to_right,black_50%,transparent_50%)] bg-[length:8px_2px]"></div>
			</div>

			{/* Text Content */}
			<div className="lg:w-2/5 flex flex-col lg:mb-0 mb-4">
				<Typography as={'h2'} className="leading-[100%] mb-1">
					{title}
				</Typography>
				<Typography as={'h6'} color="text-[#475467]">
					{description}
				</Typography>
				{showButton && (
					<div className="mt-8 w-fit">
						<Button type="button" size="default">
							{buttonText}
						</Button>
					</div>
				)}
			</div>

			{/* Desktop Dashed Line & Step Indicator */}
			<div className="relative lg:block hidden">
				<div className="relative w-[1px] h-80 bg-[linear-gradient(to_bottom,transparent_50%,black_50%)] bg-[length:2px_8px] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,white,transparent_30%,transparent_70%,white)]"></div>
				<div className="absolute flex text-[21px] bottom-[176px] right-[-24px] font-semibold items-center justify-center w-10 h-10 rounded-full bg-[#E7E7E7]">
					{stepNumber}
				</div>
			</div>

			<Image alt="personalize info" src={imageSrc} width={440} height={440} />
		</div>
	);
};

export default AdaptiveCards;
