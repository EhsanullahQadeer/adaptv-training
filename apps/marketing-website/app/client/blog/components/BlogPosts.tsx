'use client';

import React, { useState, useEffect, useCallback } from 'react';
import BlogCard from './BlogCard';
import { getClientBlogPostsByServerAction } from '@/lib/server-actions/client-blog-actions';
import ScrollableCategories from './ScrollableCategories';

interface IProps {
	categoriesArr: BlogCategory[];
	blogPostsArr: Array<any>;
}

const BlogPosts = ({ blogPostsArr, categoriesArr }: IProps) => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const [filteredPosts, setFilteredPosts] = useState(blogPostsArr);
	const [loading, setLoading] = useState(false);

	const fetchFilteredPosts = useCallback(
		async (categoryId: string | null) => {
			if (!categoryId) {
				setFilteredPosts(blogPostsArr);
				return;
			}

			try {
				setLoading(true);
				const filteredApiResponse = await getClientBlogPostsByServerAction(
					categoryId && categoryId !== 'All' ? categoryId : '',
				);

				setFilteredPosts(filteredApiResponse.docs);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				setLoading(false);
			}
		},
		[blogPostsArr],
	);

	useEffect(() => {
		if (selectedCategory) {
			fetchFilteredPosts(selectedCategory);
		} else {
			setFilteredPosts(blogPostsArr);
		}
	}, [selectedCategory, blogPostsArr, fetchFilteredPosts]);

	return (
		<div className="max-w-[1100px] mx-auto overflow-hidden">
			<ScrollableCategories categoriesArr={categoriesArr} onCategoryChange={setSelectedCategory} />

			<div className="mt-4">
				{filteredPosts.length > 0 ? (
					<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-5 h-fit">
						{filteredPosts.map((blog, index: number) => (
							<BlogCard key={index} blog={blog} />
						))}
					</div>
				) : (
					<p className="text-center text-gray-500">No posts found in this category.</p>
				)}
			</div>
		</div>
	);
};

export default BlogPosts;
