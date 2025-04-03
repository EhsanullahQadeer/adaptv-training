import { iconsPaths } from '@/lib/public-assets-paths';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import { MovementsResponse } from '@/types/client';
import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DifficultySectionProps {
	movements: MovementsResponse;
}

const DifficultySection = ({ movements }: DifficultySectionProps) => {
	const { weightBeginner, weightIntermediate, weightAdvance } = iconsPaths;

	const difficultyLevelsArr = [
		{ id: 1, difficultyLevel: 'Beginner', icon: weightBeginner },
		{ id: 2, difficultyLevel: 'Intermediate', icon: weightIntermediate },
		{ id: 3, difficultyLevel: 'Advance', icon: weightAdvance },
	];

	const difficultyCounts = movements.docs.reduce(
		(acc, movement) => {
			const difficulty = movement.difficulty?.toLowerCase();
			if (difficulty) {
				acc[difficulty] = (acc[difficulty] || 0) + 1;
			}
			return acc;
		},
		{} as Record<string, number>,
	);

	const { clientExerciseLibraryList } = pagesRoutes;
	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Difficulty
			</Typography>
			<div className="flex gap-3 w-full overflow-x-auto scrollbar-hide">
				{difficultyLevelsArr.map((level) => {
					const { difficultyLevel, icon, id } = level;

					return (
						<Link
							key={id}
							href={{
								pathname: clientExerciseLibraryList,
								query: { 'difficulty-level': difficultyLevel.toLowerCase() },
							}}
						>
							<div
								key={id}
								className="flex flex-col items-center p-5 md:px-[100px] md:py-5 rounded-xl border border-light-gray bg-white flex-1"
							>
								<Typography
									as="p_secondary"
									sizeVariant="small"
									className="tracking-[-0.08px] md:tracking-[-0.1px] leading-[20px] md:leading-[24px] font-medium"
								>
									{difficultyLevel}
								</Typography>
								<div className="w-[138px] h-[100px] sm:h-[138px]">
									<Image
										width={138}
										height={138}
										src={icon}
										alt={difficultyLevel}
										className="w-full h-full object-cover"
									/>
								</div>
								<Typography
									as="p"
									className="tracking-[-0.09px] leading-[20px] text-charcoal-gray whitespace-nowrap text-sm md:text-base"
								>
									{difficultyCounts[difficultyLevel.toLowerCase()] || 0} Excercise
								</Typography>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default DifficultySection;
