import Image from 'next/image';
import training_img_1 from '../../assets/images/training-img-1.png';
import training_img_2 from '../../assets/images/training-img-2.png';
import { Typography } from '@workspace/ui/components';

const LearnSection = () => {
	return (
		<section className="py-16 md:py-[120px] bg-black">
			<div className="mx-4">
				<div className="max-w-[1040px] mx-auto">
					<Typography as={'h3'} fontWeight="font-medium" align="center" className="text-white">
						Connect, Learn, and Grow
					</Typography>
					<div className="mt-8 md:mt-9 space-y-4 md:space-y-5">
						{[
							{
								id: '01',
								title: 'Our Mission',
								text: 'We strive to empower fitness professionals and clients across the world with a platform to connect, learn, and grow through adaptable coaching experiences.',
								image: training_img_1,
								badgeColor: 'bg-ocean-glow',
								reverse: true,
							},
							{
								id: '02',
								title: 'Our Vision',
								text: 'Ensuring that human connections stay at the heart of fitness in a world shaped by technology.',
								image: training_img_2,
								badgeColor: 'bg-orange-red',
								reverse: false,
							},
						].map(({ id, title, text, image, badgeColor, reverse }, index) => (
							<div
								key={index}
								className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-0 sm:gap-4 md:gap-5`}
							>
								<div className="flex-1 rounded-t-2xl sm:rounded-3xl">
									<Image
										className="w-full h-full object-cover rounded-t-2xl sm:rounded-3xl max-sm:h-[343px] aspect-square"
										src={image}
										alt={title}
									/>
								</div>
								<div className="flex-1 bg-froasted-glass rounded-b-2xl sm:rounded-3xl text-white">
									<div className="h-full w-full flex flex-col justify-center sm:items-center gap-8 p-8 md:p-10 lg:p-20 relative">
										<div
											className={`sm:absolute top-8 md:top-10 lg:top-20 left-8 md:left-10 lg:left-20 rounded-md px-2 py-1 ${badgeColor} text-xs font-bold tracking-[-0.06px] leading-[14px] w-max`}
										>
											{id}
										</div>
										<div className="flex flex-col gap-1 md:gap-2.5">
											<Typography as={'h3'} fontWeight="font-medium">
												{title}
											</Typography>
											<Typography as={'p_secondary'} className="md:text-lg text-translucent-white">
												{text}
											</Typography>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default LearnSection;
