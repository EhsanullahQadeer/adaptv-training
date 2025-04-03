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
			<div className="relative px-4 md:px-12">
				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-4">
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
					<CarouselPrevious className="hidden md:flex absolute md:-left-14 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black border-none text-white" />
					<CarouselNext className="hidden md:flex absolute md:-right-14 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black border-none text-white" />
				</Carousel>
			</div>
		</div>
	);
};

export default AdaptiveClient;
