import React from 'react';

interface StepperProps {
	currentStep: number;
	totalSteps: number;
}

const StepperIcon: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
	const radius = 20;
	const circumference = 2 * Math.PI * radius;
	// Progress based on current step
	const progress = (currentStep / totalSteps) * circumference;

	return (
		<svg width="50" height="50" viewBox="0 0 50 50">
			{/* Background circle */}
			<circle cx="25" cy="25" r={radius} fill="none" strokeWidth="3" className="stroke-soft-gray" />
			{/* Progress circle */}
			<circle
				className="stroke-green"
				cx="25"
				cy="25"
				r={radius}
				fill="none"
				strokeWidth="3"
				strokeDasharray={`${progress}, ${circumference}`}
				strokeLinecap="round"
				transform="rotate(-90 25 25)"
			/>
			{/* Step number */}
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="16"
				className="fill-dark-gray font-semibold tracking-[1px]"
			>
				{currentStep}/{totalSteps}
			</text>
		</svg>
	);
};

export default StepperIcon;
