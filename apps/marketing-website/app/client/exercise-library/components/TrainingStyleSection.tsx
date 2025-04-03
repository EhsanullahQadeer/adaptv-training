import React from 'react';
import { Typography } from '@workspace/ui/components';
import { MovementTrainingStylesResponse } from '@/types/client';
import Link from 'next/link';
import { pagesRoutes } from '@/lib/routes/pages-routes';

interface TrainingStyleSectionProps {
	trainingStyles: MovementTrainingStylesResponse;
}

const TrainingStyleSection = ({ trainingStyles }: TrainingStyleSectionProps) => {
	const trainingStylesArr = trainingStyles?.docs;
	const { clientExerciseLibraryList } = pagesRoutes;

	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Training Style
			</Typography>
			<div className="flex flex-wrap gap-3">
				{trainingStylesArr.map((train: any) => {
					const { trainingStyleName, id } = train;

					return (
						<Link key={id} href={{ pathname: clientExerciseLibraryList, query: { 'training-style': id } }}>
							<div
								key={id}
								className="flex gap-3.5 items-center px-4 py-3 md:px-5 md:py-4 rounded-full border border-ash-gray bg-white shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.05)] max-sm:h-8"
							>
								<Typography
									as="p_secondary"
									sizeVariant="small"
									className="tracking-[-0.08px] md:tracking-[-0.1px] leading-[20px] md:leading-[24px] font-normal md:font-medium"
								>
									{trainingStyleName}
								</Typography>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default TrainingStyleSection;
