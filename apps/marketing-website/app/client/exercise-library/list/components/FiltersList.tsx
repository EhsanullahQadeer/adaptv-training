'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LibraryCard from './LibraryCard';
import Filters from './Filters';
import { Movement, MovementEquipment, Muscle, TrainingStyles } from '@/types/client';
import { getMovementsByServerAction } from '@/lib/server-actions/client-blog-actions';
import { toast } from '@workspace/ui/components/sonner';
import { MovementsGridSkeleton } from './MovementsGridSkeleton';
import { FiltersSkeleton } from './FiltersSkeleton';

interface Props {
	isLoadingFilters?: boolean;
	muscleArr: Muscle[];
	trainingStylesArr: TrainingStyles[];
	movementEquipmentsArr: MovementEquipment[];
	movementsPostsArr: Movement[];
	defaultSelectedFilters?: {
		primaryMuscleFocus?: string[];
		secondaryMuscleFocus?: string[];
		trainingStyle?: string[];
		equipment?: string[];
		difficultyLevel?: string;
		search?: string;
	};
}

const FiltersList = (props: Props) => {
	const { muscleArr, trainingStylesArr, movementEquipmentsArr, movementsPostsArr, defaultSelectedFilters, isLoadingFilters = false } = props;

	const searchParams = useSearchParams();
	const router = useRouter();
	const [filteredMovements, setFilteredMovements] = useState(movementsPostsArr);
	const [isLoadingMovements, setIsLoadingMovements] = useState(true);

	const getFiltersFromURL = React.useCallback(() => {
		const params = new URLSearchParams(searchParams.toString());

		return {
			primaryMuscleFocus: params.get('primary-muscle')?.split(',') || defaultSelectedFilters?.primaryMuscleFocus || [],
			secondaryMuscleFocus:
				params.get('secondary-muscle')?.split(',') || defaultSelectedFilters?.secondaryMuscleFocus || [],
			trainingStyle: params.get('training-style')?.split(',') || defaultSelectedFilters?.trainingStyle || [],
			equipment: params.get('equipment')?.split(',') || defaultSelectedFilters?.equipment || [],
			difficultyLevel: params.get('difficulty-level') || defaultSelectedFilters?.difficultyLevel || undefined,
			search: params.get('search') || defaultSelectedFilters?.search || undefined,
		};
	}, [searchParams, defaultSelectedFilters]);

	const updateURLFilters = React.useCallback(
		(newFilters: any) => {
			const params = new URLSearchParams();
			if (newFilters.primaryMuscleFocus?.length) params.set('primary-muscle', newFilters.primaryMuscleFocus.join(','));
			if (newFilters.secondaryMuscleFocus?.length)
				params.set('secondary-muscle', newFilters.secondaryMuscleFocus.join(','));
			if (newFilters.trainingStyle?.length) params.set('training-style', newFilters.trainingStyle.join(','));
			if (newFilters.equipment?.length) params.set('equipment', newFilters.equipment.join(','));
			if (newFilters.difficultyLevel) params.set('difficulty-level', newFilters.difficultyLevel);
			if (newFilters.search) params.set('search', newFilters.search);
			router.replace(`?${params.toString()}`, { scroll: false });
		},
		[router],
	);

	// Handle the filtered movements when filters change
	const handelFilterChange = (filters: any) => {
		updateURLFilters(filters);
	};

	useEffect(() => {
		const filters = getFiltersFromURL();
		const hasParams = searchParams.toString().length > 0;

		if (!hasParams && defaultSelectedFilters) {
			updateURLFilters(defaultSelectedFilters);
		}

		const fetchMovements = async () => {
			try {
				setIsLoadingMovements(true);
				const movement = await getMovementsByServerAction(filters);
				setFilteredMovements(movement.docs);
			} catch {
				toast.error('some error');
			} finally {
				setIsLoadingMovements(false);
			}
		};

		fetchMovements();
	}, [defaultSelectedFilters, getFiltersFromURL, searchParams, updateURLFilters]);

	return (
		<div className="flex gap-5">
			<div className="max-md:hidden md:max-w-[260px] md:pr-5 flex-1 md:border-r border-light-gray">
				{isLoadingFilters ? (
					<FiltersSkeleton />
				) : (
					<Filters
						{...{ muscleArr, trainingStylesArr, movementEquipmentsArr, defaultSelectedFilters }}
						onFilterChange={handelFilterChange}
					/>
				)}
			</div>

			{isLoadingMovements ? (
				<MovementsGridSkeleton />
			) : (
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
			)}
		</div>
	);
};

export default FiltersList;
