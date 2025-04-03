'use client';
import { MovementEquipment, Muscle, TrainingStyles } from '@/types/client';
import { MultiSelect, Typography } from '@workspace/ui/components';
import React, { useState, useMemo } from 'react';

interface Props {
	muscleArr: Muscle[];
	trainingStylesArr: TrainingStyles[];
	movementEquipmentsArr: MovementEquipment[];
	defaultSelectedFilters?: {
		primaryMuscleFocus?: string[];
		secondaryMuscleFocus?: string[];
		trainingStyle?: string[];
		equipment?: string[];
		difficulty?: string;
	};
	onFilterChange: (newFilters: any) => void;
}

const difficulties = [
	{ label: 'Beginner', value: 'beginner' },
	{ label: 'Intermediate', value: 'intermediate' },
	{ label: 'Difficult', value: 'difficult' },
];

const Filters: React.FC<Props> = ({
	muscleArr,
	trainingStylesArr,
	movementEquipmentsArr,
	defaultSelectedFilters = {},
	onFilterChange,
}) => {
	const [selectedFilters, setSelectedFilters] = useState({
		primaryMuscleFocus: defaultSelectedFilters?.primaryMuscleFocus
			? defaultSelectedFilters.primaryMuscleFocus
			: ([] as string[]),
		secondaryMuscleFocus: defaultSelectedFilters?.secondaryMuscleFocus
			? defaultSelectedFilters.secondaryMuscleFocus
			: ([] as string[]),
		trainingStyle: defaultSelectedFilters?.trainingStyle ? defaultSelectedFilters.trainingStyle : ([] as string[]),
		equipment: defaultSelectedFilters?.equipment ? defaultSelectedFilters.equipment : ([] as string[]),
	});
	const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
		defaultSelectedFilters?.difficulty ? defaultSelectedFilters.difficulty : null,
	);

	const muscleOptions = useMemo(
		() => muscleArr.map(({ id, muscleName }) => ({ value: id.toString(), label: muscleName })),
		[muscleArr],
	);

	const trainingStyleOptions = useMemo(
		() =>
			trainingStylesArr.map(({ id, trainingStyleName }) => ({
				value: id.toString(),
				label: trainingStyleName,
			})),
		[trainingStylesArr],
	);

	const equipmentOptions = useMemo(
		() =>
			movementEquipmentsArr.map(({ id, equipmentName }) => ({
				value: id.toString(),
				label: equipmentName,
			})),
		[movementEquipmentsArr],
	);

	const handleFilterChange = (key: keyof typeof selectedFilters) => (value: string[]) => {
		const updatedFilters = { ...selectedFilters, [key]: value };
		setSelectedFilters((prev) => ({ ...prev, [key]: value }));
		onFilterChange(updatedFilters);
	};
	const handleDifficultyChange = (difficulty: string) => {
		setSelectedDifficulty(difficulty);
		onFilterChange({ ...selectedFilters, difficultyLevel: difficulty });
	};

	const renderMultiSelect = (
		label: string,
		key: keyof typeof selectedFilters,
		options: { value: string; label: string }[],
		placeholder: string,
	) => (
		<div>
			<Typography as="span" fontWeight="font-semibold" sizeVariant="small" className="leading-[24px] tracking-[-0.08]">
				{label}
			</Typography>
			<div className="mt-2">
				<MultiSelect
					options={options}
					onValueChange={handleFilterChange(key)}
					defaultValue={selectedFilters[key]}
					placeholder={placeholder}
					variant="default"
					maxCount={1}
				/>
			</div>
		</div>
	);

	return (
		<div className="w-full flex flex-col gap-5">
			{renderMultiSelect('Primary Muscle', 'primaryMuscleFocus', muscleOptions, 'Select Primary Muscles')}
			{renderMultiSelect('Secondary Muscle', 'secondaryMuscleFocus', muscleOptions, 'Select Secondary Muscles')}
			{renderMultiSelect('Training Style', 'trainingStyle', trainingStyleOptions, 'Select Training Styles')}
			<div>
				<Typography
					as="span"
					fontWeight="font-semibold"
					sizeVariant="small"
					className="leading-[24px] tracking-[-0.08]"
				>
					Difficulty
				</Typography>
				<div className="mt-3 flex flex-col gap-2.5">
					{difficulties.map((difficulty) => {
						const { value, label } = difficulty;
						return (
							<button
								key={value}
								className={`w-full flex items-center justify-between px-4 py-2 border rounded-lg transition-all
              ${selectedDifficulty === value ? 'border-black' : 'border-soft-gray'}`}
								onClick={() => handleDifficultyChange(value)}
							>
								{label}
								<span
									className={`w-5 h-5 border-1 rounded-full flex items-center justify-center
                ${selectedDifficulty === value ? 'border-black' : 'border-gray-400'}`}
								>
									{selectedDifficulty === value && <span className="w-2.5 h-2.5 bg-black rounded-full"></span>}
								</span>
							</button>
						);
					})}
				</div>
			</div>

			{renderMultiSelect('Equipment', 'equipment', equipmentOptions, 'Select Equipment')}
		</div>
	);
};

export default Filters;
