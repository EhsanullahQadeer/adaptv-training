import { Button, Input, Typography } from '@workspace/ui/components';
import React from 'react';
import ScrollableCategories from './components/ScrollableCategories';
import BlogCard from './components/BlogCard';
import AccessToPlatformSection from '@/components/AccessToPlatformSection';
import { getClientBlogCategories, getClientBlogPosts, getFeaturedClientBlog } from '@/lib/services/cmsService';
import FeaturedBlogPost from './components/FeaturedBlogPost';

const page = async () => {
	const blogCategoriesApiResponse = await getClientBlogCategories();
	const clientBlogPostsApiResponse = await getClientBlogPosts();
	const clientFeaturedBlogApiResponse = await getFeaturedClientBlog();

	console.log('blogCategoriesApiResponse', blogCategoriesApiResponse);
	console.log('clientBlogPostsApiResponse', clientBlogPostsApiResponse);
	console.log('clientFeaturedBlogApiResponse', clientFeaturedBlogApiResponse);

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

							<div className="mt-6 mx-auto max-w-[728px] border border-pale-silver flex flex-col sm:flex-row items-center w-full rounded-xl bg-white shadow-light">
								<Input
									placeholder="Your name"
									className="flex-1 border-none bg-transparent focus:ring-0 text-base px-4 max-sm:pt-6 max-sm:pb-4 h-[60px] sm:h-[70px] rounded-none rounded-l-xl shadow-none"
								/>
								<span className="h-px sm:h-6 w-[94%] sm:w-px bg-light-gray"></span>
								<Input
									placeholder="Your email address"
									className="flex-1 border-none bg-transparent focus:ring-0 text-base px-4 max-sm:pt-4 max-sm:pb-6 h-[60px] sm:h-[70px] rounded-none shadow-none"
								/>
								<Button size="xl" className="m-2.5 max-sm:hidden">
									Subscribe
								</Button>
							</div>

							<div className="sm:hidden mt-4">
								<Button size="xl" className="w-full">
									Subscribe
								</Button>
							</div>
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
