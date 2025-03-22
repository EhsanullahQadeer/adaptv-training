import React from 'react';
import { session } from '@/lib/public-assets-paths';
import Card from '@/components/platform/Card';

const { achievementsImg, sessionCalender, sessionJoinImg } = session;

const sections = [
	{
		title: 'Track your progress, stay motivated',
		description: 'See your weekly sessions, total training time, and calories burned—all in one place.',
		buttonText: 'View Achievements',
		image: achievementsImg,
		reverse: false,
		textSectionProps: 'max-w-[420px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8 sm:my-5',
		rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
	{
		title: 'View your next workout with ease',
		description: 'Stay organized with a clear view of upcoming 1-1 coaching and group classes.',
		buttonText: 'View Schedule',
		image: sessionCalender,
		reverse: true,
		textSectionProps: 'max-w-[430px]',
		leftSideWrapProps:
			'sm:self-end lg:ml-[70px] md:ml-6 sm:ml-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[386px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
	{
		title: 'Your training, your way',
		description: 'Access live group classes or 1-1 coaching, track progress, and stay on top of your fitness goals.',
		buttonText: 'Join a Session Now',
		image: sessionJoinImg,
		reverse: false,
		textSectionProps: 'max-w-[430px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
];

const SessionTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default SessionTabContent;
