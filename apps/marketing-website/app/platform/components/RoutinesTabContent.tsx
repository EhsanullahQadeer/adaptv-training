import React from 'react';
import Card from './Card';
import { routines } from '@/lib/public-assets-paths';

const { customWorkouts, trainingPlans } = routines;

const sections = [
	{
		title: 'Design custom workouts, your way',
		description:
			'Build structured routines using Adaptv’s Movement Library or add your own custom movements to match your coaching style.',
		buttonText: 'Create a Routine',
		image: customWorkouts,
		reverse: true,
		textSectionProps: 'max-w-[400px]',
		leftSideWrapProps: 'sm:self-end sm:ml-[17px] mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[504px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
	{
		title: 'Your training plans, ready to go',
		description:
			'Easily access and refine your saved routines with detailed movement breakdowns, timing, difficulty levels, and rest periods.',
		buttonText: 'Manage Routines',
		image: trainingPlans,
		reverse: false,
		textSectionProps: 'max-w-[365px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
	},
];

const RoutinesTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default RoutinesTabContent;
