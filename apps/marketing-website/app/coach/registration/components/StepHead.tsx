import { Typography } from '@workspace/ui/components';
import React from 'react';
import StepperIcon from './StepperIcon';

interface IProps {
	totalSteps: number;
	currentStep: number;
}

const StepHead = (props: IProps) => {
	const { totalSteps, currentStep } = props;
	return (
		<div className="py-2.5 flex justify-between">
			<div>
				<Typography sizeVariant="responsive_reverse" as="h5_2">
					Personal Info
				</Typography>
				<Typography color="mutedGray" sizeVariant="small" as="span_secondary">
					Next: Questionnaire
				</Typography>
			</div>
			<div>
				<StepperIcon {...{ totalSteps, currentStep }} />
			</div>
		</div>
	);
};

export default StepHead;
