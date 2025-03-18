import React from 'react';
import Card from './Card';
import { sessions } from '@/lib/public-assets-paths';

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
	},
	{
		title: 'Stay oirganized & never miss a session',
		description: "Manage your day with ease—access today's sessions and upcoming bookings at a glance.",
		buttonText: 'View Schedule',
		image: sessionCalender,
		reverse: true,
		textSectionProps: 'max-w-[400px]',
		leftSideWrapProps: 'self-end',
	},
	{
		title: 'Seamlessly manage all your Sessions',
		description:
			'Whether it’s 1-on-1 coaching or group classes, keep track of all your scheduled and completed sessions in one place.',
		buttonText: 'Go to Sessions',
		image: manageSessions,
		reverse: false,
		textSectionProps: 'max-w-[430px]',
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
