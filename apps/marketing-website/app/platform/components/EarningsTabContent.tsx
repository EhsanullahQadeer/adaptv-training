import React from 'react';
import Card from './Card';
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
        leftSideWrapProps: 'md:ml-20',
        rightSideWrapProps: 'md:mr-11 max-w-[437px]',
	},
	{
		title: 'Understand your income at a glance',
		description: 'See your earnings breakdown with filters for 1-1 coaching and group sessions.',
		buttonText: 'Analyze Earnings',
		image: analyzeEarnings,
		reverse: true,
		textSectionProps: 'max-w-[400px]',
        leftSideWrapProps: 'md:ml-[30px] max-w-[497px]',
		rightSideWrapProps: 'md:mr-20 flex justify-end',
	},
	{
		title: 'Stay on top of your payments',
		description: 'View client payments, transaction details, and statuses in one place.',
		buttonText: 'Check Payment History',
		image: paymentHistory,
		reverse: false,
		textSectionProps: 'max-w-[400px]',
        leftSideWrapProps: 'md:ml-20',
        rightSideWrapProps: 'self-end',
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
