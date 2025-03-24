import React from 'react';
import Card from '@/components/platform/Card';
import { dashboard } from '@/lib/public-assets-paths';

const { impactImg, manageCoachingImg, reachGraphImg, revenueImg, trainingScheduleImg } = dashboard;

const sections = [
	{
		title: 'Track your impact, optimize your growth',
		description:
			'Get a clear snapshot of your coaching success with total active sessions, earnings, and clients coached.',
		buttonText: 'View Your Performance',
		handleButton: () => console.log('View Your Performance'),
		image: impactImg,
		reverse: false,
		textSectionProps: 'max-w-[430px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-[50px] md:mr-6 sm:mr-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[386px]',
	},
	{
		title: 'Manage & promote your coaching services',
		description:
			"Easily track your most popular offerings and recent bookings, whether it's 1-on-1 coaching or group classes.",
		buttonText: 'Customize Your Services',
		handleButton: () => console.log('Customize Your Services'),
		image: manageCoachingImg,
		reverse: true,
		textSectionProps: 'max-w-[430px]',
		leftSideWrapProps: 'lg:ml-[42px] md:ml-6 sm:ml-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[446px] max-sm:order-2',
		rightSideWrapProps:
			'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1 sm:max-md:my-5',
	},
	{
		title: 'Stay ahead with a clear training schedule',
		description: 'View and manage all your upcoming coaching sessions so you’re always prepared for your clients.',
		buttonText: 'View Upcoming Sessions',
		handleButton: () => console.log('View Upcoming Sessions'),
		image: trainingScheduleImg,
		reverse: false,
		textSectionProps: 'max-w-[440px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
	{
		title: 'Stay on top of your revenue',
		description: 'Monitor available funds, pending payouts, and weekly earnings with an easy-to-read chart.',
		buttonText: 'Check Your Earnings',
		handleButton: () => console.log('Check Your Earnings'),
		image: revenueImg,
		reverse: true,
		textSectionProps: 'max-w-[390px]',
		leftSideWrapProps: 'lg:ml-11 md:ml-6 sm:ml-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[498px] max-sm:order-2',
		rightSideWrapProps:
			'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1 sm:max-md:my-5',
	},
	{
		title: 'Know your reach, expand your influence',
		description:
			'Analyze profile activity, see where your clients come from, and track engagement to grow your audience.',
		buttonText: 'Explore Your Insights',
		handleButton: () => console.log('Explore Your Insights'),
		image: reachGraphImg,
		reverse: false,
		textSectionProps: 'max-w-[410px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-[50px] md:mr-6 sm:mr-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[490px]',
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
