import { iconsPaths } from '@/lib/public-assets-paths';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DifficultySection = () => {
	const { weightBeginner, weightIntermediate, weightAdvance } = iconsPaths;

	const difficultyLevelsArr = [
		{ id: 1, difficultyLevel: 'Beginner', exercisesCount: 37, icon: weightBeginner },
		{ id: 2, difficultyLevel: 'Intermediate', exercisesCount: 58, icon: weightIntermediate },
		{ id: 3, difficultyLevel: 'Advance', exercisesCount: 85, icon: weightAdvance },
	];

	const { clientExerciseLibraryList } = pagesRoutes;
	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Difficulty
			</Typography>
			<div className="flex gap-3 w-full overflow-x-auto scrollbar-hide">
				{difficultyLevelsArr.map((level) => {
					const { difficultyLevel, exercisesCount, icon, id } = level;

					return (
						<Link key={id} href={clientExerciseLibraryList}>
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
									{exercisesCount} Excercise
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
