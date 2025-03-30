import { Typography } from '@workspace/ui/components';
import React from 'react';
import ScrollableCategories from './components/ScrollableCategories';
import BlogCard from './components/BlogCard';
import AccessToPlatformSection from '@/components/AccessToPlatformSection';
import { getClientBlogCategories, getClientBlogPosts, getFeaturedClientBlog } from '@/lib/services/cmsService';
import FeaturedBlogPost from './components/FeaturedBlogPost';
import Subscribe from '@/components/Subscribe';

const page = async () => {
	const [blogCategoriesApiResponse, clientBlogPostsApiResponse, clientFeaturedBlogApiResponse] = await Promise.all([
		getClientBlogCategories(),
		getClientBlogPosts(),
		getFeaturedClientBlog(),
	]);

	const categoriesArr = blogCategoriesApiResponse.docs;
	const blogPostsArr = clientBlogPostsApiResponse.docs;
	const featuredBlogPost = clientFeaturedBlogApiResponse.featuredPost;

	return (
		<>
			<div className="pt-8 md:pt-[70px] bg-snow-white">
				<div className="mx-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<div className="mb-12 m-auto text-black text-center">
							<Typography as={'h1'} className="mb-2.5">
								Fitness and Wellness Stories
							</Typography>
							<Typography as={'h5'}>
								Expert insights, practical tips, and the latest trends to help you stay informed{' '}
							</Typography>

							<Subscribe></Subscribe>
						</div>

						{featuredBlogPost ? <FeaturedBlogPost {...{ blog: featuredBlogPost }} /> : <></>}
					</div>
				</div>

				<div className="bg-white">
					<div className="px-4">
						<div className="max-w-[1100px] mx-auto overflow-hidden">
							<ScrollableCategories {...{ categoriesArr }} />
							<div className="mt-4">
								<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-5 h-fit">
									{blogPostsArr.map((blog, index: number) => (
										<BlogCard key={index} {...{ blog }} />
									))}
								</div>
							</div>
						</div>
					</div>

					<AccessToPlatformSection
						title="Your best workout awaits"
						subtitle="Discover classes and trainers tailored to your fitness goals."
						buttonText="Start Training"
						textMaxWidth="max-w-[740px]"
					/>
				</div>
			</div>
		</>
	);
};

export default page;
