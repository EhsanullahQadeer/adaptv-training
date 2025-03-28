import React from 'react';
import { imagesPaths } from '@/lib/public-assets-paths';
import LibraryCard from './LibraryCard';
import Filters from './Filters';
import { MovementEquipment, Muscle, TrainingStyles } from '@/types/client';

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

interface Props {
	muscleArr: Muscle[];
	trainingStylesArr: TrainingStyles[];
	movementEquipmentsArr: MovementEquipment[];
}

const FiltersList = (props: Props) => {
	const { muscleArr, trainingStylesArr, movementEquipmentsArr } = props;
	return (
		<div className="flex gap-5">
			<div className="max-md:hidden md:max-w-[260px] md:pr-5 flex-1 md:border-r border-light-gray">
				<Filters {...{ muscleArr, trainingStylesArr, movementEquipmentsArr }} />
			</div>

			<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:max-lg:grid-cols-2 gap-3 h-fit">
				{services.map((service, index) => (
					<LibraryCard key={index} {...{ ...service }} />
				))}
			</div>
		</div>
	);
};

export default FiltersList;
