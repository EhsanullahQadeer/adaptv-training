'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Movement, MovementEquipment, Muscle, TrainingStyles } from '@/types/client';
import FiltersList from './FiltersList';
import {
	getMovementEquipmentByServerAction,
	getMovementsByServerAction,
	getMovementTrainingStylesByServerAction,
	getMusclesByServerAction,
} from '@/lib/server-actions/client-blog-actions';

const FiltersWrapper = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get('search');
	const trainingStyle = searchParams.get('training-style');
	const primaryMuscleFocus = searchParams.get('primary-muscle');
	const secondaryMuscleFocus = searchParams.get('secondary-muscle');
	const equipment = searchParams.get('equipment');
	const difficultyLevel = searchParams.get('difficulty-level');

	const defaultSelectedFilters = React.useMemo(
		() => ({
			...(primaryMuscleFocus && { primaryMuscleFocus: [primaryMuscleFocus] }),
			...(secondaryMuscleFocus && { secondaryMuscleFocus: [secondaryMuscleFocus] }),
			...(trainingStyle && { trainingStyle: [trainingStyle] }),
			...(equipment && { equipment: [equipment] }),
			...(difficultyLevel && { difficulty: difficultyLevel }),
			...(search && { search }),
		}),
		[primaryMuscleFocus, secondaryMuscleFocus, trainingStyle, equipment, difficultyLevel, search],
	);

	const [filtersData, setFiltersData] = useState<{
		muscleArr: Muscle[];
		trainingStylesArr: TrainingStyles[];
		movementEquipmentsArr: MovementEquipment[];
		movementsPostsArr: Movement[];
	}>({
		muscleArr: [],
		trainingStylesArr: [],
		movementEquipmentsArr: [],
		movementsPostsArr: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			const [musclesApiResponse, trainingStylesApiResponse, movementEquipmentsApiResponse, movementsPostApiResponse] =
				await Promise.all([
					getMusclesByServerAction(),
					getMovementTrainingStylesByServerAction(),
					getMovementEquipmentByServerAction(),
					getMovementsByServerAction(defaultSelectedFilters),
				]);

			setFiltersData({
				muscleArr: musclesApiResponse?.docs || [],
				trainingStylesArr: trainingStylesApiResponse?.docs || [],
				movementEquipmentsArr: movementEquipmentsApiResponse?.docs || [],
				movementsPostsArr: movementsPostApiResponse?.docs || [],
			});
		};

		fetchData();
	}, [defaultSelectedFilters, searchParams]); // Re-fetch data when search params change

	return (
		<FiltersList
			muscleArr={filtersData.muscleArr}
			trainingStylesArr={filtersData.trainingStylesArr}
			movementEquipmentsArr={filtersData.movementEquipmentsArr}
			movementsPostsArr={filtersData.movementsPostsArr}
			defaultSelectedFilters={defaultSelectedFilters}
		/>
	);
};

export default FiltersWrapper;
