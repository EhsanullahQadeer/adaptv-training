import { Typography } from '@workspace/ui/components';
import { WeightAdvance, WeightBeginner, WeightIntermediate } from '@workspace/ui/icons';
import React from 'react';

const difficultyLevelsArr = [
	{ id: 1, difficultyLevel: 'Beginner', exercisesCount: 37, icon: <WeightBeginner /> },
	{ id: 2, difficultyLevel: 'Intermediate', exercisesCount: 58, icon: <WeightIntermediate /> },
	{ id: 3, difficultyLevel: 'Advance', exercisesCount: 85, icon: <WeightAdvance /> },
];

const DifficultySection = () => {
	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Muscle
			</Typography>
			<div className="flex flex-wrap gap-3">
				{difficultyLevelsArr.map((level) => {
					const { difficultyLevel, exercisesCount, icon, id } = level;

					return (
						<div
							key={id}
							className="flex flex-col px-4 py-3 md:px-[100px] md:py-5 rounded-xl border border-light-gray bg-white"
						>
							<Typography
								as="p_secondary"
								sizeVariant="small"
								className="tracking-[-0.08px] md:tracking-[-0.1px] leading-[20px] md:leading-[24px] font-medium"
							>
								{difficultyLevel}
							</Typography>
							{icon}
							<Typography
								as="p"
								className="tracking-[-0.09px] leading-[20px] text-charcoal-gray whitespace-nowrap text-sm md:text-base"
							>
								{exercisesCount} Excercise
							</Typography>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DifficultySection;
