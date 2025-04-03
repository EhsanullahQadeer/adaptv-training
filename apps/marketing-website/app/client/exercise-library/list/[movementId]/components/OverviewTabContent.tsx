import FAQsSection from '@/components/FAQsSection';
import { Movement, Muscle } from '@/types/client';
import { Typography } from '@workspace/ui/components';
import { BarbellIcon, DifficultyLevelIcon, MuscleIcon, TrainingStyleIcon } from '@workspace/ui/icons';
import { FC } from 'react';
import ProgressionMovements from './ProgressionMovements';
import LexicalReadOnly from '@/components/LexicalReadOnly';

interface TrainingInfoCardProps {
	icon: FC<{ height: number; width: number }>;
	bgColor: string;
	textColor: string;
	title: string;
	value: string;
}

const TrainingInfoCard: FC<TrainingInfoCardProps> = ({ icon: Icon, bgColor, textColor, title, value }) => (
	<div className="flex-1 min-w-0 rounded-xl border border-light-gray p-3 pb-2.5 max-sm:p-2">
		<div className="flex gap-1 sm:gap-1.5 items-center">
			<div className={`rounded-full p-[3px] ${bgColor} ${textColor}`}>
				<Icon height={10} width={10} />
			</div>
			<Typography
				as="p_caption"
				sizeVariant="small"
				fontWeight="font-medium"
				className="tracking-[-0.06px] leading-[16px] whitespace-nowrap line-clamp-1 capitalize"
			>
				{title}
			</Typography>
		</div>
		<Typography
			as="h5_2"
			fontWeight="font-semibold"
			className="leading-[26px] md:leading-[30px] tracking-[-0.1px] md:tracking-[-0.12px] w-full truncate capitalize"
		>
			{value}
		</Typography>
	</div>
);

interface Props {
	movement: Movement;
}

const OverviewTabContent = (props: Props) => {
	const { movement } = props;

	const { movementName, faqs, primaryMuscleFocus, equipment, trainingStyle, progressionMovements, difficulty } =
		movement;

	const { equipmentName } = equipment;
	const { trainingStyleName } = trainingStyle;

	return (
		<div>
			<div className="flex gap-1 items-center">
				<MuscleIcon />
				<div>
					{primaryMuscleFocus.map((muscle: Muscle, index: number) => (
						<Typography
							key={index}
							as={'span_secondary'}
							fontWeight="font-semibold"
							sizeVariant="small"
							className="tracking-[-0.07px] leading-[18px]"
						>
							{muscle.muscleName}
							{index < primaryMuscleFocus.length - 1 && ', '}
						</Typography>
					))}
				</div>
			</div>

			<div className="mt-2">
				<Typography
					as="h4_2"
					fontWeight="font-semibold"
					className="max-md:text-[28px] tracking-[-1.12px] md:tracking-[-1.28px]"
				>
					{movementName}
				</Typography>
			</div>

			<div className="mt-2 md:mt-4 flex items-center gap-2 md:gap-3 w-full">
				<TrainingInfoCard
					icon={TrainingStyleIcon}
					bgColor="bg-ocean-glow"
					textColor="text-white"
					title="Training Style"
					value={trainingStyleName}
				/>
				<TrainingInfoCard
					icon={DifficultyLevelIcon}
					bgColor="bg-vibrant-yellow"
					textColor="text-black"
					title="Difficulty"
					value={difficulty}
				/>
				<TrainingInfoCard
					icon={BarbellIcon}
					bgColor="bg-forest-green"
					textColor="text-white"
					title="Equipment"
					value={equipmentName}
				/>
			</div>

			<div className="mt-4 md:mt-8">
				<LexicalReadOnly jsonData={blogPostBody} />
			</div>

			{progressionMovements?.length ? (
				<div className="mt-6 md:mt-8">
					<ProgressionMovements {...{ progressionMovements }} />
				</div>
			) : (
				<></>
			)}

			{faqs.length ? (
				<div className="mt-6 md:mt-8">
					<FAQsSection {...{ isBlogPage: true, FAQsArr: faqs }} />
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default OverviewTabContent;
