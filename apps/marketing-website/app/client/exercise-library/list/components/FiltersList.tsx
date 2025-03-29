import React from 'react';
import LibraryCard from './LibraryCard';
import Filters from './Filters';
import { Movement, MovementEquipment, Muscle, TrainingStyles } from '@/types/client';

interface Props {
	muscleArr: Muscle[];
	trainingStylesArr: TrainingStyles[];
	movementEquipmentsArr: MovementEquipment[];
	movementsPostsArr: Movement[];
}

const FiltersList = (props: Props) => {
	const { muscleArr, trainingStylesArr, movementEquipmentsArr, movementsPostsArr } = props;
	return (
		<div className="flex gap-5">
			<div className="max-md:hidden md:max-w-[260px] md:pr-5 flex-1 md:border-r border-light-gray">
				<Filters {...{ muscleArr, trainingStylesArr, movementEquipmentsArr }} />
			</div>

			<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:max-lg:grid-cols-2 gap-4 md:gap-3 h-fit">
				{movementsPostsArr.map((movement, index: number) => (
					<LibraryCard key={index} {...{ movement }} />
				))}
			</div>
		</div>
	);
};

export default FiltersList;
