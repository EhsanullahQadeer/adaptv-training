import { getCoachHomepage } from '@/lib/services/cmsService';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Typography } from '@workspace/ui/components';
import { Carousel, CarouselContent, CarouselItem } from '@workspace/ui/components/carousel';
import Image from 'next/image';
import React from 'react';

const LearnGrowSlider = async () => {
	const coachHomepageApiResponse = await getCoachHomepage();

	const { experts } = coachHomepageApiResponse;

	return (
		<div className="my-8">
			<Carousel
				opts={{
					loop: true,
					dragFree: true,
					containScroll: 'trimSnaps',
					dragThreshold: 1,
					align: 'start',
				}}
			>
				<CarouselContent className="-ml-4">
					{experts.map((expert: any) => {
						const { expertName, id, expertDescription, expertPhoto } = expert;

						const { url, alt } = expertPhoto;

						return (
							<CarouselItem key={id} className="pl-4 relative basis-auto w-[280px] h-[470px]">
								<div className="relative w-full rounded-lg h-full">
									<Image
										src={cmsAssetsUrl(url)}
										layout="fill"
										objectFit="cover"
										alt={alt}
										className="w-full h-full rounded-lg"
									/>
									<div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-black/70 to-black/10"></div>
									<div className="absolute bottom-[99px] left-1/2 transform -translate-x-1/2 text-white text-center z-10 w-full">
										<Typography as="h6" sizeVariant="large" color="text-white">
											{expertName}
										</Typography>
										<Typography color="text-white text-[16px] block">{expertDescription}</Typography>
									</div>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default LearnGrowSlider;
