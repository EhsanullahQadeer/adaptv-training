import Image from 'next/image';
import OverviewFAQ from './components/OverviewFAQ';
import SuggestionCard from './components/SuggestionCard';
import ServiceCard from '../components/ServiceCard';
import { Typography } from '@workspace/ui/components';
import { getCoachLearningPost, getCoachLearningResourcePosts } from '@/lib/services/cmsService';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';

interface BlogCategory {
	id: string;
	categoryName: string;
	labelColor: string;
	createdAt: string;
	updatedAt: string;
}

interface LearningPost {
	category: BlogCategory;
	title: string;
	id: string;
	faq: any[];
	learningContentMediaType: 'image' | 'video';
	learningContentImageMedia?: {
		alt: string;
		url: string;
		height: number;
		width: number;
	};
	learningContentVideoMedia?: string;
	'suggested-learning'?: any[];
	learningContentBody: any;
}

export type paramsType = Promise<{  serviceid: string; }>;

const page = async (props:{ params: paramsType }) => {
	const { serviceid } = await props.params;

	// Fetch main post data and suggested learning in parallel
	const [learningPostApiResponse, suggestedLearningResponse] = await Promise.allSettled([
		getCoachLearningPost(serviceid),
		getCoachLearningResourcePosts(), // Fetch suggested posts
	]);

	// Handle main post fetch error
	if (learningPostApiResponse.status === 'rejected') {
		throw new Error('Failed to load learning resource');
	}

	const post = learningPostApiResponse.value as LearningPost;
	const {
		category,
		title,
		id,
		faq,
		learningContentMediaType,
		learningContentImageMedia,
		learningContentVideoMedia,
		['suggested-learning']: suggestedLearning,
		learningContentBody,
	} = post;

	const { alt = '', url = '', height = 0, width = 0 } = learningContentImageMedia || {};

	const { coachLearning } = pagesRoutes;
	const breadcrumbs = [
		{ label: 'Learning', href: coachLearning },
		{ label: title, href: `/coach/learning/${id}` },
	];

	return (
		<div className="mt-4 md:mt-9 mb-6 md:mb-20 bg-white">
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
						) : learningContentVideoMedia ? (
							<iframe
								className="w-full h-[648px] rounded-xl"
								src={learningContentVideoMedia.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
								title="Movement Video"
								frameBorder="0"
								allowFullScreen
							/>
						) : null}
					</div>
					<div className="flex lg:flex-row gap-[20px] mt-7 flex-col">
						<div className="lg:w-2/3 w-full">
							<OverviewFAQ {...{ category, title, faq, learningContentBody }} />
						</div>
						{((suggestedLearningResponse.status === 'fulfilled' && suggestedLearningResponse.value?.docs?.length > 0) ||
							(suggestedLearning && suggestedLearning.length > 0)) && (
							<div className="lg:w-1/3">
								<Typography as={'h5'}>Suggested learning</Typography>
								<div className="lg:flex hidden flex-col mt-5 gap-4 w-full">
									{(suggestedLearningResponse.status === 'fulfilled'
										? suggestedLearningResponse.value.docs
										: suggestedLearning || []
									).map((suggestion, index: number) => (
										<SuggestionCard key={index} {...{ post: suggestion }} />
									))}
								</div>
								<div className="lg:hidden flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 h-fit mt-4">
									{(suggestedLearningResponse.status === 'fulfilled'
										? suggestedLearningResponse.value.docs
										: suggestedLearning || []
									).map((suggestion, index: number) => (
										<ServiceCard key={index} {...{ post: suggestion }} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
