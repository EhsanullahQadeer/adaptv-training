import ServiceCard from './components/ServiceCard';
import { Typography } from '@workspace/ui/components';
import Categories from './components/Categories';
import { getCoachLearningResourceCategories, getCoachLearningResourcePosts } from '@/lib/services/cmsService';

const page = async () => {
	const learningCategoriesApiResponse = await getCoachLearningResourceCategories();

	const learningPostsApiResponse = await getCoachLearningResourcePosts();

	console.log('learningPostsApiResponse', learningPostsApiResponse);

	console.log('learningCategoriesApiResponse', learningCategoriesApiResponse);

	const categoriesArr = learningCategoriesApiResponse.docs;
	const learningPostsArr = learningPostsApiResponse.docs;

	return (
		<>
			<div className="pt-8 md:pt-[70px] bg-snow-white">
				<div className="mx-4">
					<div className="max-w-[780px] mb-12 md:mb-[60px] m-auto text-black text-center">
						<Typography as={'h1'} className="mb-2.5">
							Coaching Learning Resources
						</Typography>
						<Typography as={'h5'}>Master virtual training, grow your fitness business.</Typography>
					</div>
				</div>

				<div className="pt-6 md:pt-[60px] px-4 bg-white">
					<div className="max-w-[1100px] mx-auto flex sm:flex-row flex-col gap-5">
						<div className="sm:max-w-[260px] sm:pr-5 flex-1 sm:border-r border-light-gray">
							<Categories {...{ categoriesArr }} />
						</div>
						<div className="flex-1 w-full flex flex-wrap gap-3">
							{learningPostsArr.map((post, index: number) => (
								<ServiceCard key={index} {...{ post }} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
