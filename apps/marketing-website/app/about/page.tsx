import Image from 'next/image';
import CoachingSection from './components/CoachingSection';
import LearnSection from './components/LearnSection';
import about_hero_img from '../assets/images/about-hero-img.png';
import FAQsAccesPlatformSection from '../components/FAQsAccesPlatformSection';
import { Typography } from '@workspace/ui/components';

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
						<Image className="w-full h-full object-cover" src={about_hero_img} alt="about_hero_img" />
					</div>
					<CoachingSection />
				</div>
			</div>

			<LearnSection />

			<FAQsAccesPlatformSection />
		</div>
	);
}
