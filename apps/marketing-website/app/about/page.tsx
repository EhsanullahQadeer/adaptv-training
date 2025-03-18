import Image from 'next/image';
import CoachingSection from '../../components/CoachingSection';
import LearnSection from './components/LearnSection';
import FAQsAccesPlatformSection from '../../components/FAQsAccesPlatformSection';
import { Typography } from '@workspace/ui/components';
import { imagesPaths } from '@/lib/public-assets-paths';
import { AdptabilityIcon, BrainIcon, FlameIcon, GlobleIcon, GrowthIcon } from '@workspace/ui/icons';

const coachingFeatures = [
	{
		title: 'Community',
		icon: <GlobleIcon height={'100%'} width={'100%'} />,
		desc: 'Ensuring that human connection stays at the hearth of fitness.',
	},
	{
		title: 'Adaptability',
		icon: <AdptabilityIcon height={'100%'} width={'100%'} />,
		desc: 'Empowering fitness pros and clients anytime, anywhere.',
	},
	{
		title: 'Growth',
		icon: <GrowthIcon height={'100%'} width={'100%'} />,
		desc: 'Helping individuals grow while connecting coaches worldwide.',
	},
	{
		title: 'Innovation',
		icon: <BrainIcon height={'100%'} width={'100%'} />,
		desc: 'Continued improvement within the technology of the platform.',
	},
	{
		title: 'Empowerment',
		icon: <FlameIcon height={'100%'} width={'100%'} />,
		desc: 'Creating a safe space for growth, confidence, and top-tier coaching.',
	},
];

const { aboutHeroImg } = imagesPaths;

export default function Page() {
	return (
		<div className="pt-8 md:pt-[70px] bg-white">
			<div className="mx-4">
				<div className="max-w-[700px] m-auto text-black text-center">
					<Typography as="h1" className="mb-2.5">
						Empowering Coaches. Transforming Fitness.
					</Typography>
					<Typography as={'p'}>We connect fitness professionals and Clients worldwide</Typography>
				</div>

				<div className="max-w-[1100px] mx-auto">
					<div className="mt-[42px] md:mt-[72px]">
						<Image
							className="w-full h-full object-cover"
							src={aboutHeroImg}
							height={297}
							width={1040}
							alt="about_hero_img"
						/>
					</div>
					<CoachingSection
						features={coachingFeatures}
						heading1="Great coaching is more than just workouts—"
						heading2="it’s about connection, adaptability, and growth."
						heading3="That’s what we stand for at Adaptv.
"
					/>
				</div>
			</div>

			<LearnSection />
			<FAQsAccesPlatformSection />
		</div>
	);
}
