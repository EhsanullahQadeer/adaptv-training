import React from 'react';
import { classes } from '@/lib/public-assets-paths';
import Card from '@/components/platform/Card';

const { browseClassImg, findClassImg } = classes;

const sections = [
	{
		title: 'Find the perfect class for you',
		description: "Explore available sessions, see what's filling up fast, and secure your spot in high-demand classes.",
		buttonText: 'Browse Classes',
		image: browseClassImg,
		reverse: false,
		textSectionProps: 'max-w-[350px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-[52px] md:mr-6 sm:mr-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[481px]',
	},
	{
		title: 'Customize your class search',
		description: 'Filter by schedule, training style, instructor certification, and more to find your ideal class.',
		buttonText: 'Find My Class',
		image: findClassImg,
		reverse: true,
		textSectionProps: 'max-w-[420px]',
		leftSideWrapProps:
			'sm:self-end lg:ml-[42px] md:ml-6 sm:ml-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[462px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
];

const ClassesTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default ClassesTabContent;
