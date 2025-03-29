import { Typography } from '@workspace/ui/components';
import { BarbellIcon, DifficultyLevelLgIcon, MuscleIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Movement, Muscle } from '@/types/client';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';

interface SuggestedExerciseProps {
	movement: Movement;
}

const SuggestedExercise: React.FC<SuggestedExerciseProps> = (props) => {
	const { movement } = props;

	const {
		id,
		movementName,
		equipment,
		primaryMuscleFocus,
		trainingStyle,
		movementMediaType,
		movementImageMedia,
		movementVideoThumbnail,
		difficulty,
	} = movement;

	const { equipmentName } = equipment;

	const { trainingStyleName } = trainingStyle;

	const difficultyColor =
		difficulty === 'beginner' ? 'text-green' : difficulty === 'intermediate' ? 'text-golden-rod' : 'text-vermilion';

	const { alt = '', url = '', height, width } = movementImageMedia || {};

	const {
		alt: thumbnailAlt = '',
		url: thumbnailUrl = '',
		height: thumbnailHeight,
		width: thumbnailWidth,
	} = movementVideoThumbnail || {};

	const isMovementMediaImage = movementMediaType === 'image';

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
			<div className="flex gap-3 cursor-pointer">
				<div className="max-w-[102px]">
					<Image
						width={isMovementMediaImage ? width : thumbnailWidth}
						height={isMovementMediaImage ? height : thumbnailHeight}
						src={cmsAssetsUrl(isMovementMediaImage ? url : thumbnailUrl)}
						alt={isMovementMediaImage ? alt : thumbnailAlt}
						className="rounded-md w-full h-full object-cover aspect-video"
					/>
				</div>

				<div className="flex-1">
					<div className="flex gap-1 mb-1">
						<span className="px-1.5 w-fit items-center py-1 bg-soft-gray rounded-md">
							<Typography
								as={'p_caption'}
								fontWeight="font-medium"
								sizeVariant="small"
								className="leading-[16px] tracking-[-0.06px]"
							>
								{trainingStyleName}
							</Typography>
						</span>

						<div className={`py-1.5 px-2 bg-soft-gray rounded-md flex flex-col gap-[1.5px] w-7 ${difficultyColor}`}>
							<DifficultyLevelLgIcon width={12} height={12} />
						</div>
					</div>

					<Typography
						as={'p_caption'}
						sizeVariant="large"
						fontWeight="font-semibold"
						className="overflow-hidden line-clamp-1 leading-[22px] tracking-[-0.08px]"
					>
						{movementName}
					</Typography>

					<div className="flex items-center gap-1.5 flex-wrap">
						<div className="flex gap-1 items-center ">
							<MuscleIcon />
							<div>{renderListWithLimit(primaryMusclesArr)}</div>
						</div>
						<div className="flex gap-1 items-center">
							<BarbellIcon />
							<div>{equipmentName}</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SuggestedExercise;
