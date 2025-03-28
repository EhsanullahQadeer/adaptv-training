import { imagesPaths } from '@/lib/public-assets-paths';
import { Button, Input, Typography } from '@workspace/ui/components';
import { ArrowIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
import ScrollableCategories from './components/ScrollableCategories';
import { populars } from './Data';
import BlogCard from './components/BlogCard';
import AccessToPlatformSection from '@/components/AccessToPlatformSection';
import { getClientBlogCategories, getClientBlogPosts } from '@/lib/services/cmsService';
const { blogFeature } = imagesPaths;

const page = async () => {
	const blogCategoriesApiResponse = await getClientBlogCategories();
	const clientBlogPostsApiResponse = await getClientBlogPosts();

	console.log('blogCategoriesApiResponse', blogCategoriesApiResponse);
	console.log('clientBlogPostsApiResponse', clientBlogPostsApiResponse);

	const categoriesArr = blogCategoriesApiResponse.docs;
	const blogPostsArr = clientBlogPostsApiResponse.docs;

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

						<Typography as={'h4'}>Featured</Typography>
						<div className="mt-5 w-fit flex lg:flex-row mx-auto flex-col border border-light-gray rounded-lg mb-10">
							<div className="flex-1 w-full max-h-[420px] overflow-hidden">
								<Image
									src={blogFeature}
									alt="image tracking"
									className="rounded-t-lg lg:rounded-l-lg w-full h-full object-cover"
									width={1000}
									height={1000}
								/>
							</div>

							<div className="flex-1 lg:max-w-[40%] p-[24px] flex justify-between flex-col">
								<div className="flex flex-col lg:w-auto md:w-[790px]">
									<span className="px-[6px] py-[3px] text-[10px] rounded-lg bg-[#9A38A6] w-fit text-white font-bold">
										Training & Workouts
									</span>

									<Typography className="md:my-2 my-1" as={'h4_2'} color="text-black">
										Maximize Your Workouts: How Smart Tech Enhances Training
									</Typography>
									<Typography color="text-[#515151]">
										Learn how to effectively assess a client’s fitness level, mobility, and health history to create a
										personalized training plan. Understand key assessment techniques like movement screening
									</Typography>
								</div>
								<div className="flex gap-1.5 items-center mt-8">
									<span className="text-[14px] font-semibold">Read more</span>
									<ArrowIcon />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white">
					<div className="px-4">
						<div className="max-w-[1100px] mx-auto overflow-hidden">
							<ScrollableCategories {...{ categoriesArr }} />
							<div className="mt-4 flex lg:flex-row flex-col gap-5">
								<div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-5 h-fit">
									{blogPostsArr.map((blog, index: number) => (
										<BlogCard key={index} {...{ blog }} />
									))}
								</div>
								<div className="text-left lg:w-[240px]">
									<Typography
										color="text-black"
										className="border-b pb-4 border-black sm:text-2xl text-lg font-semibold"
									>
										Public
									</Typography>
									{populars.map((popular, index) => (
										<Typography
											key={index}
											as={'h6'}
											sizeVariant="small"
											className="py-4 border-b w-full border-[#00000029]"
										>
											{popular}
										</Typography>
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
