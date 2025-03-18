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
		textSectionProps: 'max-w-[360px]',
		leftSideWrapProps: 'self-end',
	},
	{
		title: 'Your training plans, ready to go',
		description:
			'Easily access and refine your saved routines with detailed movement breakdowns, timing, difficulty levels, and rest periods.',
		buttonText: 'Manage Routines',
		image: trainingPlans,
		reverse: false,
		textSectionProps: 'max-w-[365px]',
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
