'use client';

import React, { useState } from 'react';
import LibraryCard from './LibraryCard';
import Filters from './Filters';
import { Movement, MovementEquipment, Muscle, TrainingStyles } from '@/types/client';
import { getMovementsByServerAction } from '@/lib/server-actions/client-blog-actions';

interface Props {
	muscleArr: Muscle[];
	trainingStylesArr: TrainingStyles[];
	movementEquipmentsArr: MovementEquipment[];
	movementsPostsArr: Movement[];
	defaultSelectedFilters?: {
		primaryMuscle?: string[];
		trainingStyle?: string[];
		equipment?: string[];
		difficulty?: string;
	};
}

const FiltersList = (props: Props) => {
	const { muscleArr, trainingStylesArr, movementEquipmentsArr, movementsPostsArr, defaultSelectedFilters } = props;

	// Handle the filtered movements
	const [filteredMovements, setFilteredMovements] = useState(movementsPostsArr);

	const handleFilterChange = async (newFilters: any) => {
		const updatedMovements = await getMovementsByServerAction(newFilters);
		setFilteredMovements(updatedMovements.docs);
	};

	return (
		<div className="flex gap-5">
			<div className="max-md:hidden md:max-w-[260px] md:pr-5 flex-1 md:border-r border-light-gray">
				<Filters
					{...{ muscleArr, trainingStylesArr, movementEquipmentsArr, defaultSelectedFilters }}
					onFilterChange={handleFilterChange}
				/>
			</div>

			<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:max-lg:grid-cols-2 gap-4 md:gap-3 h-fit">
				{filteredMovements.length === 0 ? (
					<div className="col-span-full text-center py-8 text-gray-500">
						<h2 className="text-xl font-semibold text-charcoal-gray mb-4">Oops! No movements found</h2>
						<p className="text-sm md:text-base">
							It seems like there are no movements available at the moment. Please check back later or explore other
							categories to discover great resources.
						</p>
					</div>
				) : (
					filteredMovements.map((movement, index: number) => <LibraryCard key={index} {...{ movement }} />)
				)}
			</div>
		</div>
	);
};

export default FiltersList;
