'use client';

import { CoachPost } from '@/types/learning';
import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import ServiceCard from './ServiceCard';
import getCoachLearningResourcePostsByServerAction from '@/lib/server-actions/learning-actions';

interface LearningResourcesProps {
	categoriesArr: BlogCategory[];
	learningPostsArr: CoachPost[];
	categoryCounts: Record<string, number>;
}

const LearningResources = ({ categoriesArr, learningPostsArr, categoryCounts }: LearningResourcesProps) => {
	const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);
	const [, setLoading] = useState(false);
	const [filteredPosts, setFilteredPosts] = useState<CoachPost[]>([]);

	// Function to fetch filtered posts by category
	const fetchFilteredPosts = React.useCallback(
		async (categoryId: string | null) => {
			if (!categoryId) {
				setFilteredPosts(learningPostsArr);
				return;
			}

			try {
				setLoading(true);
				const learningPostsApiResponse = await getCoachLearningResourcePostsByServerAction(categoryId);
				setFilteredPosts(learningPostsApiResponse.docs);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				setLoading(false);
			}
		},
		[learningPostsArr],
	);

	useEffect(() => {
		if (selectedCategory) {
			fetchFilteredPosts(selectedCategory.id);
		} else {
			setFilteredPosts(learningPostsArr);
		}
	}, [selectedCategory, learningPostsArr, fetchFilteredPosts]);

	return (
		<div className="pt-8 md:pt-[70px] bg-snow-white">
			<div className="mx-4">
				<div className="max-w-[780px] mb-12 md:mb-[60px] m-auto text-black text-center">
					<h1 className="mb-2.5">Coaching Learning Resources</h1>
					<h5>Master virtual training, grow your fitness business.</h5>
				</div>
			</div>

			<div className="pt-6 md:pt-[60px] pb-6 px-4 bg-white">
				<div className="max-w-[1100px] mx-auto flex md:flex-row flex-col gap-5">
					<div className="md:max-w-[260px] md:pr-5 flex-1 md:border-r border-light-gray">
						<Categories
							categoriesArr={categoriesArr}
							categoryCounts={categoryCounts}
							onCategorySelect={setSelectedCategory}
						/>
					</div>

					<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:max-lg:grid-cols-2 gap-3 h-fit">
						{filteredPosts.length === 0 ? (
							<div className="col-span-full text-center text-gray-500">No resources available for this category.</div>
						) : (
							filteredPosts.map((post, index) => <ServiceCard key={index} post={post} />)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LearningResources;
