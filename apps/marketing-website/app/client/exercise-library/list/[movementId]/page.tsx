import Image from 'next/image';
import { Typography } from '@workspace/ui/components';
import { getSingleMovement } from '@/lib/services/cmsService';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import LibraryCard from '../components/LibraryCard';
import MovementTabs from './components/MovementTabs';
import SuggestedExercise from './components/SuggestedExercise';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';

interface PageProps {
	params: {
		movementId: string;
	};
}

const page = async ({ params }: PageProps) => {
	const { movementId } = params;
	console.log('params id', movementId);

	const movementPostApiResponse = await getSingleMovement(movementId);

	console.log('movementPostApiResponse', movementPostApiResponse);

	const { id, movementName, suggestedMovements, movementMediaType, movementImageMedia, movementVideoMediaUrl } =
		movementPostApiResponse;

	const { alt = '', url = '', height, width } = movementImageMedia || {};

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
						{movementMediaType === 'image' ? (
							<Image
								width={width}
								height={height}
								src={cmsAssetsUrl(url)}
								alt={alt}
								className="rounded-xl w-full h-full object-cover"
							/>
						) : movementVideoMediaUrl ? (
							<iframe
								className="w-full h-[648px] rounded-xl"
								src={movementVideoMediaUrl.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
								title="Movement Video"
								frameBorder="0"
								allowFullScreen
							/>
						) : null}
					</div>
					<div className="flex lg:flex-row gap-[20px] mt-7 flex-col">
						<div className="lg:w-2/3 w-full">
							<MovementTabs {...{ movement: movementPostApiResponse }} />
						</div>
						{suggestedMovements ? (
							<div className="lg:w-1/3">
								<Typography as={'h5'}>Suggested excercise</Typography>
								<div className="lg:flex hidden flex-col mt-5 gap-4 w-full">
									{suggestedMovements.map((movement, index: number) => (
										<SuggestedExercise key={index} {...{ movement }} />
									))}
								</div>
								<div className="lg:hidden flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit mt-4">
									{suggestedMovements.map((movement, index: number) => (
										<LibraryCard key={index} {...{ movement }} />
									))}
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
