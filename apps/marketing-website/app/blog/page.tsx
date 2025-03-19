import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import { ArrowIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
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
					<div className="mt-4 flex md:flex-row flex-col border border-light-gray rounded-lg  ">
						<Image src={blogFeature} alt="image tracking" className="rounded-l-lg" width={1000} height={1000} />
						<div className="p-[24px] flex flex-col">
							<span className="px-[6px] py-[3px] text-[10px] rounded-lg bg-[#9A38A6] w-fit text-white font-bold">
								Training & Workouts
							</span>

							<Typography className="my-2.5" as={'h4_2'} color="text-black">
								Maximize Your Workouts: How Smart Tech Enhances Training
							</Typography>
							<Typography as="h6" sizeVariant="small" color="text-[#515151]" className="mt-5">
								Learn how to effectively assess a client’s fitness level, mobility, and health history to create a
								personalized training plan. Understand key assessment techniques like movement screening
							</Typography>
							<div className=" mt-[28px] flex gap-1.5 items-center ">
							<span className="text-[14px] font-semibold">Read more</span>
							<ArrowIcon />
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
