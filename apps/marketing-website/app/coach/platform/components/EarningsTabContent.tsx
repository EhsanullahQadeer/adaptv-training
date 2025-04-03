import React from 'react';
import Card from '@/components/platform/Card';
import { earnings } from '@/lib/public-assets-paths';

const { paymentStatus, analyzeEarnings, paymentHistory } = earnings;

const sections = [
	{
		title: 'Know when your earnings are ready',
		description: 'Track pending and available payouts so you’re always in control.',
		buttonText: 'View Payment Status',
		image: paymentStatus,
		reverse: false,
		textSectionProps: 'max-w-[450px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-11 md:mr-6 sm:mr-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[437px]',
	},
	{
		title: 'Understand your income at a glance',
		description: 'See your earnings breakdown with filters for 1-1 coaching and group sessions.',
		buttonText: 'Analyze Earnings',
		image: analyzeEarnings,
		reverse: true,
		textSectionProps: 'max-w-[400px]',
		leftSideWrapProps: 'lg:ml-[30px] md:ml-6 sm:ml-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[497px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
	{
		title: 'Stay on top of your payments',
		description: 'View client payments, transaction details, and statuses in one place.',
		buttonText: 'Check Payment History',
		image: paymentHistory,
		reverse: false,
		textSectionProps: 'max-w-[400px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'mt-5 self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
];

const EarningsTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default EarningsTabContent;
