import { Typography } from '@workspace/ui/components';
import React from 'react';
import AdaptiveCards from './AdaptiveCards';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@workspace/ui/components/carousel';

interface Step {
	title: string;
	description: string;
	imageSrc: string;
	stepNumber: number;
	showButton?: boolean;
	buttonText?: string;
}

interface AdaptiveClientProps {
	steps: Step[];
	title: string;
}

const AdaptiveClient: React.FC<AdaptiveClientProps> = ({ steps, title }) => {
	return (
		<div className="max-w-[1100px] mx-auto gap-5">
			<Typography as={'h3'} align="center" className="mb-8">
				{title}
			</Typography>
			{/* max-w-[830px] */}
			<Carousel className="">
				<CarouselContent>
					{steps.map((step, index) => (
						<CarouselItem key={index}>
							<AdaptiveCards
								title={step.title}
								description={step.description}
								imageSrc={step.imageSrc}
								stepNumber={step.stepNumber}
								showButton={step.showButton}
								buttonText={step.buttonText}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default AdaptiveClient;
