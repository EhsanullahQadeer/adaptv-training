import { getMovements, getMuscles, getMovementTrainingStyles } from '@/lib/services/cmsService';
import { Suspense } from 'react';
import MusclesSection from './MusclesSection';
import TrainingStyleSection from './TrainingStyleSection';
import DifficultySection from './DifficultySection';
import EquipmentsSection from './EquipmentsSection';

async function ExerciseLibraryLoader() {
	// Fetch all data in parallel
	const [movements, muscles, trainingStyles] = await Promise.all([
		getMovements(),
		getMuscles(),
		getMovementTrainingStyles(),
	]);

	return (
		<div className="max-md:my-8 md:mt-[70px] md:mb-[135px] max-w-[1100px] m-auto flex flex-col gap-[42px]">
			<MusclesSection movements={movements} muscles={muscles} />
			<TrainingStyleSection trainingStyles={trainingStyles} />
			<DifficultySection movements={movements} />
			<EquipmentsSection movements={movements} />
		</div>
	);
}

export function ExerciseLibraryData() {
	return (
		<Suspense fallback={<div className="h-[600px]" />}>
			<ExerciseLibraryLoader />
		</Suspense>
	);
}
