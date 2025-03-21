import { Typography } from '@workspace/ui/components';
import Stepper from '@workspace/ui/components/stepper';
import React, { useState } from 'react';

const steps = [
	{ label: 'Review', description: 'We are reviewing your information.' },
	{ label: 'In progress', description: 'Verification is in progress (2-3 business days).' },
	{ label: 'Check your email', description: 'Check your email regularly, including spam.' },
];

const ConfirmationStep = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	return (
		<div className="text-center">
			<Typography as="h4_2" className="md:text[24px] text-center">
				Successfully Submitted
			</Typography>
			<Typography sizeVariant="small" as="span_secondary" className="md:text[24px] mx-auto">
				We are currently reviewing your information. Here’s what happens next:
			</Typography>

			<Stepper currentStep={currentStep} steps={steps} />
		</div>
	);
};

export default ConfirmationStep;
