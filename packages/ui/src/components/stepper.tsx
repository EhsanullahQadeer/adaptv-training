import React from 'react';

interface Step {
	label: string; // Label for the step
	description?: string; // Optional description for the step
}

interface StepperProps {
	currentStep: number;
	steps: Step[]; // Array of steps with labels and descriptions
}

export default function Stepper({ currentStep, steps }: StepperProps) {
	const isActive = (index: number) => currentStep >= index;
	const isCompleted = (index: number) => currentStep >= index;

	return (
		<div className="flex items-center w-full">
			{steps.map((step, index) => (
				<React.Fragment key={index}>
					<div className="flex flex-col items-center gap-1.5">

						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
								isActive(index) ? 'border-[#5271FF]' : 'border-muted-gray'
							}`}
						>
							<span className={`text-sm ${isActive(index) ? 'text-[#5271FF]' : 'text-muted-gray'}`}>{index + 1}</span>
						</div>
						<span className="text-sm font-medium text-primary">{step.label}</span>

						{step.description && <span className="text-xs max-w-[142px] text-primary">{step.description}</span>}
                        
					</div>

					{index < steps.length - 1 && (
						<div className="flex items-center flex-1">
							<div
								className={`h-0.5 w-full rounded-sm ${
									isCompleted(index) ? 'bg-gradient-to-r from-[#5271FF] to-[#ADBCFF]' : 'bg-muted-gray'
								}`}
							></div>
						</div>
					)}

				</React.Fragment>
			))}
		</div>
	);
}
