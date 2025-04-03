import React from 'react';
import { cn } from '../lib/utils';

interface Step {
	label: string; // Label for the step
	description?: string; // Optional description for the step
}

interface StepperProps {
	currentStep: number;
	steps: Step[]; // Array of steps with labels and descriptions
	stepClassName?: string; // Custom class for each step
	connectorClassName?: string; // Custom class for the connector
	wrapperClassName?: string; // Custom class for the wrapper
	renderStep?: (step: Step, index: number, isActive: boolean, isCompleted: boolean) => React.ReactNode; // Custom render function for steps
	renderConnector?: (index: number, isCompleted: boolean) => React.ReactNode; // Custom render function for connectors
}

export default function Stepper({
	currentStep,
	steps,
	stepClassName = '',
	connectorClassName = '',
	wrapperClassName = '',
	renderStep,
	renderConnector,
}: StepperProps) {
	const isActive = (index: number) => currentStep >= index;
	const isCompleted = (index: number) => currentStep >= index;

	return (
		<div className={`flex items-baseline w-full ${wrapperClassName}`}>
			{steps.map((step, index) => (
				<React.Fragment key={index}>
					<div className={`flex flex-col items-center gap-1.5 ${stepClassName}`}>
						{renderStep ? (
							renderStep(step, index, isActive(index), isCompleted(index))
						) : (
							<>
								<div className="flex relative w-full justify-center">
									<div
										className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
											isActive(index) ? 'border-chart-6' : 'border-muted-gray'
										}`}
									>
										<span className={`text-sm ${isActive(index) ? 'text-chart-6' : 'text-muted-gray'}`}>
											{index + 1}
										</span>
									</div>
									{index < steps.length - 1 && (
										<div
											className={`flex absolute w-1/2 -translate-x-1/2 -right-1/2  top-1/2 items-center flex-1 ${connectorClassName}`}
										>
											{renderConnector ? (
												renderConnector(index, isCompleted(index))
											) : (
												<div
													className={`h-0.5 w-full rounded-sm ${
														isCompleted(index)
															? 'bg-gradient-to-r from-[hsla(229,100%,66%,1)] to-[hsla(229,100%,84%,1)]'
															: 'bg-muted-gray'
													}`}
												></div>
											)}
										</div>
									)}
								</div>

								<span className="text-sm font-medium text-primary">{step.label}</span>
								{step.description && <span className="text-xs max-w-[160px] text-primary">{step.description}</span>}
							</>
						)}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
