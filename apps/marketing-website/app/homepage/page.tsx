import { Typography } from '@workspace/ui/components';
import React from 'react';
import { imagesPaths } from '@/lib/public-assets-paths';
import Image from 'next/image';
import CoachingSection from '@/components/CoachingSection';
import { DimensionalBlock, GlobleIcon, RequestVerified } from '@workspace/ui/icons';
import TrainingFeatures from './components/TrainingFeatures';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';
import AdaptiveClient from '@/components/AdaptiveClient';
import LearnGrow from './components/LearnGrow';
const { tabImage, collageFour, collageMobile } = imagesPaths;

const coachingFeatures = [
	{
		title: 'Own your business',
		icon: <RequestVerified height={'100%'} width={'100%'} />,
		desc: 'Customize your services, set your own schedule, and more.',
	},
	{
		title: 'Expand your reach',
		icon: <GlobleIcon height={'100%'} width={'100%'} />,
		desc: 'Connects you with Clients locally and globally.',
	},
	{
		title: 'Built for coaches',
		icon: <DimensionalBlock height={'100%'} width={'100%'} />,
		desc: 'Effortless business growth for fitness professionals.',
	},
];
const page = () => {
	return (
		<div className="mt-8 relative  md:mt-[70px] bg-white">
			<Image
				src={collageMobile}
				alt="collage"
				className="absolute top-0 z-0 sm:hidden object-cover "
				width={1000}
				height={416}
			></Image>
			<Image
				src={collageFour}
				alt="collage"
				className="absolute z-0 left-1/2 top-0 transform -translate-x-1/2 object-cover sm:block hidden"
				width={1300}
				height={1000}
			></Image>

			<div className=" m-auto z-10 relative  ">
				<div className="md:mb-14 mb-   max-w-[343px] md:max-w-[700px] m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Build Your Coaching Business
					</Typography>
					<Typography as={'h5'}>Grow your coaching business, offer personalized training. </Typography>
					<div className="mt-5 md:mt-6">
						<button>Become a coach</button> {/* remaining button */}
					</div>
				</div>

				<div className="max-w-[1100px]  mx-auto  gap-5">
					<div className="mb-14">
						<Image src={tabImage} alt="tab-image" width={1070} height={666} />
					</div>
					<div className="my-14 mx-4">
						<CoachingSection
							features={coachingFeatures}
							heading1="Coaching isn’t just about training—"
							heading2="it’s about building connections and changing lives."
							heading3=" Maximize your impact with these exclusive benefits."
						/>
					</div>
					<div className="my-14 mx-4 ">
						<Typography as={'h3'} color="text-black" className="flex sm:mb-0 mb-6 justify-center items-center">
							A Smarter way to train feature highlights
						</Typography>
						<TrainingFeatures />
					</div>
				
				</div>
				<LearnGrow/>
				<div className="max-w-[1100px]  mx-auto  gap-5">
				<AdaptiveClient/>
				</div>

			</div>
			<FAQsAccesPlatformSection />
		</div>
	);
};

export default page;
