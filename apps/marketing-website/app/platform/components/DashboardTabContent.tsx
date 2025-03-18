import React from 'react';
import Card from './Card';
import { dashboard } from '@/lib/public-assets-paths';

const { impactImg, manageCoachingImg, reachGraphImg, revenueImg, trainingScheduleImg } = dashboard;

const sections = [
	{
		title: 'Track your impact, optimize your growth',
		description:
			'Get a clear snapshot of your coaching success with total active sessions, earnings, and clients coached.',
		buttonText: 'View Your Performance',
		image: impactImg,
		reverse: false,
		textSectionProps: 'max-w-[430px]',
	},
	{
		title: 'Manage & promote your coaching services',
		description:
			"Easily track your most popular offerings and recent bookings, whether it's 1-on-1 coaching or group classes.",
		buttonText: 'Customize Your Services',
		image: manageCoachingImg,
		reverse: true,
		textSectionProps: 'max-w-[430px]',
		imageSectionProps: 'max-w-[446px] pl-10',
	},
	{
		title: 'Stay ahead with a clear training schedule',
		description: 'View and manage all your upcoming coaching sessions so you’re always prepared for your clients.',
		buttonText: 'View Upcoming Sessions',
		image: reachGraphImg,
		reverse: false,
		textSectionProps: 'max-w-[430px]',
	},
	{
		title: 'Stay on top of your revenue',
		description: 'Monitor available funds, pending payouts, and weekly earnings with an easy-to-read chart.',
		buttonText: 'Check Your Earnings',
		image: revenueImg,
		reverse: true,
		textSectionProps: 'max-w-[390px]',
	},
	{
		title: 'Know your reach, expand your influence',
		description:
			'Analyze profile activity, see where your clients come from, and track engagement to grow your audience.',
		buttonText: 'Explore Your Insights',
		image: trainingScheduleImg,
		reverse: false,
		textSectionProps: 'max-w-[410px]',
	},
];

const DashboardTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default DashboardTabContent;
