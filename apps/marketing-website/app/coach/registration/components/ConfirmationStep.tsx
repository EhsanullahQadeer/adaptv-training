import { imagesPaths } from '@/lib/public-assets-paths';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import { Button, Typography } from '@workspace/ui/components';
import Stepper from '@workspace/ui/components/stepper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const steps = [
	{ label: 'Review', description: 'We are reviewing your information.' },
	{ label: 'In progress', description: 'Verification is in progress (2-3 business days).' },
	{ label: 'Check your email', description: 'Check your email regularly, including spam.' },
];
const { mailSubmitted } = imagesPaths;

const ConfirmationStep = () => {
	const [currentStep] = useState<number>(0);

	return (
		<div className="text-center flex-1 justify-center flex flex-col gap-14">
			<div>
				<div className="text-center">
					<Image className="block mx-auto" width={181} height={180} src={mailSubmitted} alt="mail-sent" />
				</div>
				<Typography as="h4_2" className="text-[24px] md:text-[32px] text-center">
					Successfully Submitted
				</Typography>
				<Typography sizeVariant="small" as="span_secondary" className="md:text[24px] mx-auto">
					We are currently reviewing your information. Here’s what happens next:
				</Typography>

				<Stepper wrapperClassName="mt-3 justify-center" currentStep={currentStep} steps={steps} />
			</div>
			<div>
				<Link href={pagesRoutes.coach}>
					<Button type='button' className="w-[251px] sm:w-auto">Back to home</Button>
				</Link>
			</div>
		</div>
	);
};

export default ConfirmationStep;
