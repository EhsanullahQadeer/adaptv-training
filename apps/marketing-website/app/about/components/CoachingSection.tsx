import GlobeIcon from '../../assets/icons/GlobeIcon';
import AdaptabilityIcon from '../../assets/icons/AdaptabilityIcon';
import GrowthIcon from '../../assets/icons/GrowthIcon';
import BrainIcon from '../../assets/icons/BrainIcon';
import FlameIcon from '../../assets/icons/FlameIcon';
import { Typography } from '@workspace/ui/components';

const coachingFeatures = [
	{
		title: 'Community',
		icon: <GlobeIcon />,
		desc: 'Ensuring that human connection stays at the hearth of fitness.',
	},
	{
		title: 'Adaptability',
		icon: <AdaptabilityIcon />,
		desc: 'Empowering fitness pros and clients anytime, anywhere.',
	},
	{
		title: 'Growth',
		icon: <GrowthIcon />,
		desc: 'Helping individuals grow while connecting coaches worldwide.',
	},
	{
		title: 'Innovation',
		icon: <BrainIcon />,
		desc: 'Continued improvement within the technology of the platform.',
	},
	{
		title: 'Empowerment',
		icon: <FlameIcon />,
		desc: 'Creating a safe space for growth, confidence, and top-tier coaching.',
	},
];

const CoachingSection = () => {
	return (
		<div className="my-16 md:my-[120px]">
			<Typography as={'h3'}>
				Great coaching is more than just workouts—
				<span className="text-semi-transparent-black">it’s about connection, adaptability, and growth.</span> That’s
				what we stand for at Adaptv.
			</Typography>

			<div className="mt-9 flex gap-5 flex-wrap">
				{coachingFeatures.map((feature, idx) => {
					const { title, icon, desc } = feature;
					return (
						<div
							key={title + idx}
							className="flex-1 min-w-[335px] h-[176px] md:h-[252px] p-4.5 md:p-6 flex flex-col justify-between rounded-3xl bg-white border border-light-gray"
						>
							<div className="w-8 h-8 sm:w-[42px] sm:h-[42px]">{icon}</div>

							<div className="flex flex-col gap-1 md:gap-2">
								<Typography as={'h4'} fontWeight="font-semibold">
									{title}
								</Typography>

								<Typography as={'p_secondary'}>
									{desc}
								</Typography>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CoachingSection;
