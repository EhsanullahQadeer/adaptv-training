import { Typography } from '@workspace/ui/components';
import React from 'react';
import { imagesPaths } from '@/lib/public-assets-paths';
import Image from 'next/image';
import CoachingSection from '@/components/CoachingSection';
import { DimensionalBlock, GlobleIcon, RequestVerified } from '@workspace/ui/icons';
import TrainingFeatures from './components/TrainingFeatures';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';
import LearnSection from '../about/components/LearnSection';
const { tabImage } = imagesPaths;

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
		<div className="mt-8 flex justify-center items-center  md:mt-[70px] bg-white">
			<div
				style={{ backgroundPositionX: 'center', backgroundSize: 'contain ' }}
				className="bg-[url(/assets/images/collage-mobile.png)] sm:bg-[url(/assets/images/collage-four.png)] m-auto bg-no-repeat  w-[1300px]"
			>
				<div className="md:mb-14 mb-7   max-w-[350px] md:max-w-[700px] m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Build Your Coaching Business
					</Typography>
					<Typography as={'h5'}>Grow your coaching business, offer personalized training. </Typography>
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
					<div>
					<FAQsAccesPlatformSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
