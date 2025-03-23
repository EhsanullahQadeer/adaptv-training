import React from 'react';
import { trainers } from '@/lib/public-assets-paths';
import Card from '@/components/platform/Card';

const { searchCoachImg, topTrainersImg } = trainers;

const sections = [
	{
		title: 'Handpicked coaches for you',
		description:
			'Discover expert trainers available today, top-rated this week, or specializing in your fitness style.',
		buttonText: 'Browse Top Trainers',
		image: topTrainersImg,
		reverse: false,
		textSectionProps: 'max-w-[420px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-[61px] md:mr-6 sm:mr-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[423px]',
	},
	{
		title: 'Customize your search',
		description: 'Filter by training type, schedule, location, style, and certification to find your perfect fit.',
		buttonText: 'Find My Coach',
		image: searchCoachImg,
		reverse: true,
		textSectionProps: 'max-w-[420px]',
		leftSideWrapProps:
			'sm:self-end lg:ml-[54px] md:ml-6 sm:ml-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[461px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
];

const TrainersTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default TrainersTabContent;
