import { imagesPaths } from '@/lib/public-assets-paths';
import { Muscle } from '@/types/client';
import { Typography } from '@workspace/ui/components';
import { BarbellIcon, MuscleIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LibraryCardProps {
	movement: any;
}

const { boy } = imagesPaths;

const LibraryCard: React.FC<LibraryCardProps> = (props) => {
	const { movement } = props;

	const { id, movementName, equipment, primaryMuscleFocus, trainingStyle } = movement;

	const { equipmentName } = equipment;

	const { trainingStyleName } = trainingStyle;

	const primaryMusclesArr = primaryMuscleFocus.map((muscle: Muscle) => {
		const { muscleName } = muscle;
		return muscleName;
	});

	const renderListWithLimit = (items: string[]) => {
		const displayedItems = items.slice(0, 2);
		const remainingCount = items.length - 2;

		return (
			<>
				{displayedItems.map((item, index) => (
					<Typography
						key={index}
						as={'span_secondary'}
						fontWeight="font-semibold"
						sizeVariant="small"
						className="tracking-[-0.07px] leading-[18px]"
					>
						{item}
						{index < displayedItems.length - 1 && ', '}
					</Typography>
				))}
				{remainingCount > 0 && (
					<Typography
						as={'span_secondary'}
						fontWeight="font-semibold"
						sizeVariant="small"
						className="tracking-[-0.07px] leading-[18px]"
					>
						, +{remainingCount}
					</Typography>
				)}
			</>
		);
	};

	return (
		<Link href={`/client/exercise-library/list/${id}`}>
			<div className="flex-1 bg-whisper-gray max-h-[367px] sm:max-h-[380px] rounded-xl p-3.5 cursor-pointer overflow-hidden">
				<div className="mb-3 flex items-center gap-1">
					<div className="bg-soft-gray py-1 px-1.5 rounded-md w-max">
						<Typography
							as={'p_caption'}
							fontWeight="font-medium"
							sizeVariant="small"
							className="leading-[16px] tracking-[-0.06px]"
						>
							{trainingStyleName}
						</Typography>
					</div>

					<div className="py-1.5 px-2 bg-soft-gray rounded-md flex flex-col gap-[1.5px] w-7">
						<div className="w-full h-[2.5px] rounded-xs bg-[#DB3700]"></div>
						<div className="w-full h-[2.5px] rounded-xs bg-[#DB3700]"></div>
						<div className="w-full h-[2.5px] rounded-xs bg-[#DB3700]"></div>
					</div>
				</div>

				<Typography
					as={'p_caption'}
					fontWeight="font-bold"
					sizeVariant="large"
					className="tracking-[-0.08px] leading-[22px] line-clamp-2"
				>
					{movementName}
				</Typography>

				<div className="mt-2 flex flex-col gap-1">
					<div className="flex gap-1 items-center">
						<MuscleIcon />
						<div>{renderListWithLimit(primaryMusclesArr)}</div>
					</div>

					<div className="flex gap-1 items-center">
						<BarbellIcon />
						<div>{equipmentName}</div>
					</div>
				</div>
				<div className="mt-3.5 max-h-[197px] sm:max-h-[140px] overflow-hidden rounded-md">
					<Image
						width={1040}
						height={648}
						src={boy} //image src will be here
						alt={movementName}
						className="rounded-md w-full h-full object-cover aspect-video"
					/>
				</div>
			</div>
		</Link>
	);
};

export default LibraryCard;
