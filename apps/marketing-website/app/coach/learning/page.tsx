import { getCoachLearningResourceCategories, getCoachLearningResourcePosts } from '@/lib/services/cmsService';
import LearningResources from './LearningResources';

const page = async () => {
	const learningCategoriesApiResponse = await getCoachLearningResourceCategories();
	const learningPostsApiResponse = await getCoachLearningResourcePosts();

	const categoriesArr = learningCategoriesApiResponse.docs;
	const learningPostsArr = learningPostsApiResponse.docs;

	const categoryCounts = learningPostsArr.reduce(
		(acc, post) => {
			const categoryName = post.category.categoryName;
			acc[categoryName] = (acc[categoryName] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	return (
		<LearningResources
			categoriesArr={categoriesArr}
			learningPostsArr={learningPostsArr}
			categoryCounts={categoryCounts}
		/>
	);
};

export default page;
