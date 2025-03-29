import Image from 'next/image';
import { Typography } from '@workspace/ui/components';
import { getSingleMovement } from '@/lib/services/cmsService';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import LibraryCard from '../components/LibraryCard';
import MovementTabs from './components/MovementTabs';
import { imagesPaths } from '@/lib/public-assets-paths';

interface PageProps {
	params: {
		movementId: string;
	};
}

const { exerciseLibrary } = imagesPaths;

const page = async ({ params }: PageProps) => {
	const { movementId } = params;
	console.log('params id', movementId);

	const movementPostApiResponse = await getSingleMovement(movementId);

	console.log('movementPostApiResponse', movementPostApiResponse);

	const { id, movementName, suggestedMovements } = movementPostApiResponse;

	const { clientExerciseLibrary, clientExerciseLibraryList } = pagesRoutes;
	const breadcrumbs = [
		{ label: 'Excercise Library', href: clientExerciseLibrary },
		{ label: 'Result', href: clientExerciseLibraryList },
		{ label: movementName, href: `/client/exercise-library/list${id}` },
	];

	return (
		<div className="mt-4 md:mt-9 mb-4 md:mb-[60px] bg-white">
			<div className="mx-4">
				<div className="max-w-[1100px] mx-auto">
					<Breadcrumbs {...{ items: breadcrumbs }} />
					<div className="max-h-[648px] overflow-hidden rounded-xl">
						<Image
							width={1440}
							height={456}
							src={exerciseLibrary}
							alt="exerciseLibrary"
							className="rounded-xl w-full h-full object-cover"
						/>

						{/* {learningContentMediaType === 'image' ? (
							<Image
								width={width}
								height={height}
								src={cmsAssetsUrl(url)}
								alt={alt}
								className="rounded-xl w-full h-full object-cover"
							/>
						) : (
							<></>
						)} */}
					</div>
					<div className="flex lg:flex-row gap-[20px] mt-7 flex-col">
						<div className="lg:w-2/3 w-full">
							<MovementTabs {...{ movement: movementPostApiResponse }} />
						</div>
						{suggestedMovements ? (
							<div className="lg:w-1/3">
								<Typography as={'h5'}>Suggested excercise</Typography>
								<div className="lg:flex hidden flex-col mt-5 gap-4 w-full">
									{/* {constantSuggestionData.map((suggestion, index: number) => (
									<SuggestionCard key={index} {...{ post: suggestion }} />
								))} */}
								</div>
								<div className="lg:hidden flex-1 w-full flex flex-wrap gap-5 mt-4">
									{/* {constantSuggestionData.map((suggestion, index: number) => (
									<LibraryCard key={index} {...{ post: suggestion }} />
								))} */}
								</div>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
