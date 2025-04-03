import { Suspense } from 'react';
import { getCoachLearningResourceCategories, getCoachLearningResourcePosts } from '@/lib/services/cmsService';
import LearningResources from './components/LearningResources';
import { Skeleton } from '@workspace/ui/components/skeleton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coach Learning Resources | Adaptv Training',
  description: 'Access exclusive learning resources and training materials to enhance your coaching skills on the Adaptv Training Platform.',
  keywords: 'coach training, fitness education, training resources, coaching materials',
  openGraph: {
    title: 'Coach Learning Resources | Adaptv Training',
    description: 'Access exclusive learning resources and training materials for coaches.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
		<Suspense fallback={<Skeleton className="min-h-screen w-full" />}>
			<LearningResources
				categoriesArr={categoriesArr}
				learningPostsArr={learningPostsArr}
				categoryCounts={categoryCounts}
			/>
		</Suspense>
	);
};

export default page;
