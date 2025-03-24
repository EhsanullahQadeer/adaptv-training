// import Timer from '@/app/assets/icons/Timer';
import { Typography } from '@workspace/ui/components';
import { TimerIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
	category: string;
	title: string;
	imageSrc: string;
	dotColor?: string;
}
const SuggestionCard: React.FC<ServiceCardProps> = ({ category, title, imageSrc, dotColor }) => {
	return (
		<div className="flex gap-2">
			<div>
				<Image
					width={300}
					height={150}
					src={imageSrc}
					alt={title}
					className="rounded-md md:w-[104px] md:h-[79px] object-cover"
				/>
			</div>

			<div>
				<span className="px-[6px] w-fit items-center py-[4px] mb-1 bg-[#E8E8E8] flex gap-1 rounded-md">
					<span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: dotColor }}></span>
					<Typography as={'caption'} sizeVariant="small" color="text-black" fontWeight="font-medium">
						{category}
					</Typography>
				</span>
				<Typography
					as={'caption'}
					sizeVariant="large"
					color="text-black"
					fontWeight="font-semibold"
					className=" md:w-36  overflow-hidden line-clamp-1"
				>
					{title}
				</Typography>{' '}
				<span className="flex items-center gap-1 ">
					<TimerIcon />
					<span className="text-[14px] font-semibold">45 min</span>
				</span>
			</div>
		</div>
	);
};

export default SuggestionCard;
