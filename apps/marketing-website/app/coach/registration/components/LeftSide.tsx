'use client';
import React, { useState } from 'react';
import StepHead from './StepHead';
import FormWrapper from './FormWrapper';

const totalSteps = 3;

const LeftSide = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);

	return (
		<div className="flex-[58] px-[10%] flex flex-col">
			<StepHead {...{ totalSteps, currentStep }} />
			<FormWrapper {...{ totalSteps, currentStep, setCurrentStep }} />
		</div>
	);
};

export default LeftSide;
