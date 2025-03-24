import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import { ArrowIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
import ScrollableCategories from './components/ScrollableCategories';
import { blogs, categories, populars } from './Data';
import BlogCard from './components/BlogCard';
import AccessToPlatformSection from '@/components/AccessToPlatformSection';
const { blogFeature } = imagesPaths;

const page = () => {
	return (
		<div className="mt-8 md:mt-[70px] bg-white">
			<div className="mx-4">
				<div className=" mb-12 m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Fitness and Wellness Stories
					</Typography>
					<Typography as={'h5'}>
						Expert insights, practical tips, and the latest trends to help you stay informed{' '}
					</Typography>
				</div>

				<div className="max-w-[1100px] mx-auto flex  flex-col gap-5">
					<Typography as={'h4'}>Featured</Typography>
					<div className="mt-4 w-fit flex lg:flex-row mx-auto flex-col border border-light-gray rounded-lg  ">
						<Image
							src={blogFeature}
							alt="image tracking"
							className="rounded-t-lg lg:rounded-l-lg"
							width={1000}
							height={1000}
						/>
						<div className="p-[24px] flex justify-between flex-col">
							<div className="flex flex-col lg:w-auto md:w-[790px]">
								<span className="px-[6px] py-[3px] text-[10px] rounded-lg bg-[#9A38A6] w-fit text-white font-bold">
									Training & Workouts
								</span>

								<Typography className="md:my-2 my-1" as={'h7'} color="text-black">
									Maximize Your Workouts: How Smart Tech Enhances Training
								</Typography>
								<Typography color="text-[#515151]" className="">
									Learn how to effectively assess a client’s fitness level, mobility, and health history to create a
									personalized training plan. Understand key assessment techniques like movement screening
								</Typography>
							</div>
							<div className=" mt-auto  flex gap-1.5 items-center ">
								<span className="text-[14px] font-semibold">Read more</span>
								<ArrowIcon />
							</div>
						</div>
					</div>
					<ScrollableCategories categories={categories} />
					<div className="flex md:flex-row flex-col gap-5">
						<div className="md:grid h-fit flex flex-wrap md:grid-cols-3 gap-3 ">
							{blogs.map((blog, index) => (
								<BlogCard key={index} {...blog} />
							))}
						</div>
						<div className=" text-left md:w-[250px]">
							<Typography color="text-black" className="border-b py-4 border-black sm:text-2xl text-lg font-semibold ">
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
	);
};

export default page;
