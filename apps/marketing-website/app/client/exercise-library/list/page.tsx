import { Button, Input } from '@workspace/ui/components';
import { SearchIcon } from '@workspace/ui/icons';
import React from 'react';
import FiltersList from './components/FiltersList';
import { getMovementEquipment, getMovements, getMovementTrainingStyles, getMuscles } from '@/lib/services/cmsService';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';

const Page = async (params: Promise<{ searchParams: Promise<Record<string, string | undefined>> }>) => {
	const { searchParams } = await params;
	const searchObj = await searchParams;
	const trainingStyle = searchObj['training-style'];
	const primaryMuscleFocus = searchObj['primary-muscle'];
	const equipment = searchObj['equipment'];
	const difficultyLevel = searchObj['difficulty-level'];

	const defaultSelectedFilters = {
		...(primaryMuscleFocus && { primaryMuscleFocus: [primaryMuscleFocus] }),
		...(trainingStyle && { trainingStyle: [trainingStyle] }),
		...(equipment && { equipment: [equipment] }),
		...(difficultyLevel && { difficulty: difficultyLevel }),
	};

	const [musclesApiResponse, trainingStylesApiResponse, movementEquipmentsApiResponse, movementsPostApiResponse] =
		await Promise.all([
			getMuscles(),
			getMovementTrainingStyles(),
			getMovementEquipment(),
			getMovements({
				trainingStyle: trainingStyle ? [trainingStyle] : undefined,
				primaryMuscleFocus: primaryMuscleFocus ? [primaryMuscleFocus] : undefined,
				equipment: equipment ? [equipment] : undefined,
				difficultyLevel,
			}),
		]);

	const muscleArr = musclesApiResponse?.docs;
	const trainingStylesArr = trainingStylesApiResponse?.docs;
	const movementEquipmentsArr = movementEquipmentsApiResponse?.docs;
	const movementsPostsArr = movementsPostApiResponse?.docs;

	const { clientExerciseLibrary, clientExerciseLibraryList } = pagesRoutes;
	const breadcrumbs = [
		{ label: 'Excercise Library', href: clientExerciseLibrary },
		{ label: 'Result', href: clientExerciseLibraryList },
	];

	return (
		<>
			<div className="bg-snow-white pt-8 md:pt-[34px] px-4">
				<div className="mb-[42px] sm:mb-8 max-w-[1100px] mx-auto">
					<Breadcrumbs {...{ items: breadcrumbs }} />

					<div className="w-full max-sm:hidden">
						<Input
							placeholder="Find an excercise.."
							className="bg-white text-base tracking-[-0.08px] leading-[20px] h-[66px] pl-5 border-light-gray rounded-xl shadow-light"
							rightAdornment={
								<Button
									type="button"
									className="tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 h-auto"
								>
									<SearchIcon />
									Search
								</Button>
							}
						/>
					</div>

					<div className="w-full sm:hidden">
						<Input
							placeholder="Find an excercise.."
							className="bg-white text-base tracking-[-0.08px] leading-[20px] h-[50px] pl-5 border-light-gray rounded-xl shadow-light"
						/>
						<div className="mt-4 w-full">
							<Button
								type="button"
								className="tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 w-full h-auto"
							>
								<SearchIcon />
								Search
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="my-8 px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<FiltersList
							{...{ muscleArr, trainingStylesArr, movementEquipmentsArr, movementsPostsArr, defaultSelectedFilters }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
