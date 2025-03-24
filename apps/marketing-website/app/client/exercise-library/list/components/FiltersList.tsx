import React from 'react';
import { imagesPaths } from '@/lib/public-assets-paths';
import LibraryCard from './LibraryCard';
import Filters from './Filters';

const { boy } = imagesPaths;
export const services = [
	{
		category: 'Strength Training',
		title: 'Structuring the Perfect Training Session',
		imageSrc: boy,
		dotColor: '#FF5733',
		targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
		equipmentsRequired: ['Dumbbells', 'Bench', 'Exercise Mat', 'Foam Roller'],
	},
	{
		category: 'Cardio Fitness',
		title: 'Boost Your Endurance with HIIT Workouts',
		imageSrc: boy,
		dotColor: '#3388FF',
		targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
		equipmentsRequired: ['Dumbbells', 'Bench', 'Exercise Mat', 'Foam Roller'],
	},
	{
		category: 'Yoga & Flexibility',
		title: 'Achieve Mind-Body Balance with Yoga',
		imageSrc: boy,
		dotColor: '#28A745',
		targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
		equipmentsRequired: ['Dumbbells', 'Bench', 'Exercise Mat', 'Foam Roller'],
	},
	{
		category: 'Yoga & Flexibility',
		title: 'Achieve Mind-Body Balance with Yoga',
		imageSrc: boy,
		dotColor: '#28A745',
		targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
		equipmentsRequired: ['Dumbbells', 'Bench', 'Exercise Mat', 'Foam Roller'],
	},
];

const FiltersList = () => {
	return (
		<div className="flex">
			<div className="max-sm:hidden max-w-[260px] pr-5 flex-1 border-r border-light-gray">
				<Filters />
			</div>

			<div className="flex-1 w-full sm:pl-5 flex flex-wrap gap-3">
				{services.map((service, index) => (
					<LibraryCard key={index} {...{ ...service }} />
				))}
			</div>
		</div>
	);
};

export default FiltersList;
