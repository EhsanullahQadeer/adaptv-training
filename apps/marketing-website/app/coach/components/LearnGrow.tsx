import React from 'react';
import LearnGrowSlider from './LearnGrowSlider';
import { Badge, Button, Typography } from '@workspace/ui/components';
import { BadgeVariant } from '@workspace/ui/components/badge';

const LearnGrow = () => {
	const badges: { name: string; variant: BadgeVariant }[] = [
		{ name: 'Yoga', variant: 'dim' },
		{ name: 'Pilates', variant: 'dim' },
		{ name: 'Platform Training', variant: 'info' },
		{ name: 'High-Intensity Interval Training', variant: 'dim' },
		{ name: 'Coaching Techniques', variant: 'info' },
		{ name: 'Business Growth', variant: 'dim' },
		{ name: 'CrossFit', variant: 'dim' },
		{ name: 'Strength Training', variant: 'dim' },
		{ name: 'Flexibility and Mobility Training', variant: 'dim' },
		{ name: 'Health Fundamentals', variant: 'info'},
		{ name: 'Bodyweight Workouts', variant: 'dim' },
		{ name: 'Rehabilitation and Recovery Exercises', variant: 'dim' },
		{ name: 'Prenatal or Postnatal Fitness', variant: 'dim' },
		// { name: 'Business Growth', variant: 'info' },
		// { name: 'Strength Training', variant: 'dim' },
		// { name: 'CrossFit', variant: 'dim' },
	];

	return (
		<div className="bg-black overflow-hidden">
			<div className="flex overflow-hidden pt-30 pb-25">
				<div className="flex-1 min-w-[50%]">
					<div className="sm:w-[430px] mb-20 flex flex-col mx-auto ">
						<Typography as={'h2'} color="text-white" className="leading-[100%]">
							Learn & Grow as a Coach
						</Typography>

						<Typography className="mt-4 mb-6" as={'h6'} color="text-[#FFFFFFBF]">
							Master virtual training, scale your coaching business, and unlock AdaptvTraining’s full potential with
							expert resources.
						</Typography>

						<div>
							<Button size="xl" variant="secondary">
								Explore the Learning Hub
							</Button>
						</div>
					</div>
				</div>
				<div className="flex-1 min-w-[60%] ">
					<div className="flex flex-wrap gap-3.5 justify-center ">
						{badges.map(({ name, variant }) => (
							<div key={name}>
								<Badge className="py-3 px-6 rounded-2xl text-[20px] font-semibold h-fit" variant={variant ?? 'dim'}>
									{name}
								</Badge>
							</div>
						))}
					</div>
				</div>
			</div>
			<Typography as={'h3'} className="mx-4 " color="text-white text-center">
				Meet the experts already on Adaptv
			</Typography>

			<div className="my-8 gap-5">
				<LearnGrowSlider></LearnGrowSlider>
			</div>
		</div>
	);
};
export default LearnGrow;
