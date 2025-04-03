import React from 'react';
import { sessions } from '@/lib/public-assets-paths';
import Card from '@/components/platform/Card';

const { manageSessions, sessionCalender, trackProgress } = sessions;

const sections = [
	{
		title: 'Track your progress. elevate your coaching.',
		description:
			'Stay informed with real-time insights—see your coach tier, total sessions, active clients, and average rating, all in one place.',
		buttonText: 'View Insights',
		image: trackProgress,
		reverse: false,
		textSectionProps: 'max-w-[450px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
	{
		title: 'Stay oirganized & never miss a session',
		description: "Manage your day with ease—access today's sessions and upcoming bookings at a glance.",
		buttonText: 'View Schedule',
		image: sessionCalender,
		reverse: true,
		textSectionProps: 'max-w-[430px]',
		leftSideWrapProps:
			'sm:self-end lg:ml-[70px] md:ml-6 sm:ml-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[386px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
	{
		title: 'Seamlessly manage all your Sessions',
		description:
			'Whether it’s 1-on-1 coaching or group classes, keep track of all your scheduled and completed sessions in one place.',
		buttonText: 'Go to Sessions',
		image: manageSessions,
		reverse: false,
		textSectionProps: 'max-w-[430px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
];

const SessionsTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default SessionsTabContent;
