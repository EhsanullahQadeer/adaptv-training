import Image from 'next/image';
import OverviewFAQ from './components/OverviewFAQ';
import SuggestionCard from './components/SuggestionCard';
import ServiceCard from '../components/ServiceCard';
import { Typography } from '@workspace/ui/components';
import { getCoachLearningPost } from '@/lib/services/cmsService';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { constantSuggestionData } from './components/data';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';

interface PageProps {
	params: {
		serviceid: string;
	};
}

const page = async ({ params }: PageProps) => {
	const { serviceid } = params;
	console.log('params id', serviceid);

	const learningPostApiResponse = await getCoachLearningPost(serviceid);

	console.log('learningPostApiResponse', learningPostApiResponse);

	const { category, title, id, faq, learningContentMediaType, learningContentImageMedia } = learningPostApiResponse;

	const { categoryName } = category;

	const { alt, url, height, width } = learningContentImageMedia || {};

	const { coachLearning } = pagesRoutes;
	const breadcrumbs = [
		{ label: 'Learning', href: coachLearning },
		{ label: title, href: `/coach/learning/${id}` },
	];

	return (
		<div className="mt-4 md:mt-9 bg-white">
			<div className="mx-4">
				<div className="max-w-[1100px] mx-auto">
					<Breadcrumbs {...{ items: breadcrumbs }} />
					<div className="max-h-[648px] overflow-hidden rounded-xl">
						{learningContentMediaType === 'image' ? (
							<Image
								width={width}
								height={height}
								src={cmsAssetsUrl(url)}
								alt={alt}
								className="rounded-xl w-full h-full object-cover"
							/>
						) : (
							<></>
						)}
					</div>
					<div className="flex lg:flex-row gap-[20px] mt-7 flex-col">
						<div className="lg:w-2/3 w-full">
							<OverviewFAQ {...{ categoryName, title, faq }} />
						</div>
						<div className="lg:w-1/3">
							<Typography as={'h5'}>Suggested learning</Typography>
							<div className="lg:flex hidden flex-col mt-5 gap-4 w-full">
								{constantSuggestionData.map((suggestion, index: number) => (
									<SuggestionCard key={index} {...{ post: suggestion }} />
								))}
							</div>
							<div className="lg:hidden flex-1 w-full flex flex-wrap gap-5 mt-4">
								{constantSuggestionData.map((suggestion, index: number) => (
									<ServiceCard key={index} {...{ post: suggestion }} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
