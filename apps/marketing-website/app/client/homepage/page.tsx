import { Button, Typography } from '@workspace/ui/components';
import React from 'react';
import { imagesPaths } from '@/lib/public-assets-paths';
import Image from 'next/image';
import CoachingSection from '@/components/CoachingSection';
import { GlobleIcon, KingIcon, PercentCircle } from '@workspace/ui/icons';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';
import SmartFeatures from './components/SmartFeatures';
import SmartTracking from './components/SmartTracking';
import AdaptiveClient from '@/components/AdaptiveClient';
import { clientsData } from '@/app/homepage/Data';
const { exerciseLibrary, exercisemobile } = imagesPaths;

const coachingFeatures = [
	{
		title: 'Exclusive features first',
		icon: <KingIcon height={'100%'} width={'100%'} />,
		desc: 'Cutting-edge tools designed to elevate your training experience.',
	},
	{
		title: 'Special launch discount',
		icon: <PercentCircle height={'100%'} width={'100%'} />,
		desc: 'Enjoy special offers available only to early members.',
	},
	{
		title: 'Fitness community',
		icon: <GlobleIcon height={'100%'} width={'100%'} />,
		desc: 'Connect with top coaches and individuals from day one.',
	},
];
const page = () => {
	return (
		<div className="mt-8 relative  md:mt-[70px] bg-white">
			<div className=" m-auto z-10 relative  ">
				<div className="md:mb-14 mb-   max-w-[343px] md:max-w-[663px] m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Find Your Coach. Train Anywhere.{' '}
					</Typography>
					<Typography as={'h5'}>Personalized training with top fitness pros—anytime, anywhere. </Typography>
					<div className="mt-5 md:mt-6">
						<Button size="default" type="button">
							Join the Waitlist
						</Button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Image
						src={exercisemobile}
						className="sm:h-auto h-[450px] w-[1273px] object-cover overflow-hidden"
						alt="exercise library"
						width={1300}
						height={100}
					></Image>
				</div>
				<div className="max-w-[1100px]  mx-auto  gap-5">
					<div className="my-14 mx-4">
						<CoachingSection
							features={coachingFeatures}
							heading1="Coaching isn’t just about training—"
							heading2="it’s about building connections and changing lives."
							heading3=" Maximize your impact with these exclusive benefits."
						/>
					</div>
				</div>
				<div className="pt-30 bg-black">
					<div className="max-w-[1100px] pb-7.5  mx-auto">
						<Typography as={'h3'} color="text-white" className="flex mx-4 sm:mb-0 mb-6 justify-center items-center">
							Enhance workout with smart features{' '}
						</Typography>
						<SmartFeatures />
						<div className="md:mt-30 max-w-[343px] md:max-w-[663px] m-auto text-black text-center">
							<Typography as={'h2'} color="text-white" className="mb-3.5">
								Master Every Movement. Elevate Your Training.{' '}
							</Typography>{' '}
							<Typography color="text-[#FFFFFFBF]" as={'h6'}>
								Explore a comprehensive library of exercises across different training styles.
							</Typography>
							<div className="mt-5 md:mt-6">
								<Button variant="light" type="button" size="xl">
									Explore the Excercise Library
								</Button>
							</div>
						</div>
					</div>
					<Image src={exerciseLibrary} alt="exercise library" className="w-full" width={1400} height={100}></Image>
				</div>
				<div className="max-w-[1100px] mx-auto pt-30">
					<Typography as={'h3'} color="text-black" className="flex mx-4 sm:mb-0 mb-6 justify-center items-center">
						Optimize your training with smart tracking
					</Typography>
					<div className="mx-4 mt-9">
						<SmartTracking />
					</div>
					<AdaptiveClient steps={clientsData} />
				</div>
			</div>
			<FAQsAccesPlatformSection />
		</div>
	);
};

export default page;
