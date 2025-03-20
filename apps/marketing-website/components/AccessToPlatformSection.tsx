import React from 'react';

import Image from 'next/image';
import { Button, Typography } from '@workspace/ui/components';
import { imagesPaths } from '@/lib/public-assets-paths';

const { platformImg1, platformImg2, ellipseTop, ellipseBottom } = imagesPaths;

const AccessToPlatformSection = () => {
	return (
		<div className="relative overflow-hidden">
			<div className="z-10">
				<Image
					className="w-full h-full object-cover max-h-[118px] relative z-10"
					src={ellipseBottom}
					alt="ellipse_bottom"
					width={1440}
					height={127}
				/>
			</div>
			<div className="mx-4 z-10 relative sm:my-4">
				<div className="flex flex-col justify-center items-center max-w-[510px] mx-auto">
					<Typography as={'h2'} align="center" className="mb-2.5">
						Get early access to our platform
					</Typography>
					<Typography as={'p'}>Build your Client base before launch</Typography>

					<div className="mt-5 md:mt-6">
						<Button onClick={() => {}} size="default" type="button">
							Become a Coach
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute -left-18 lg:left-0 top-0 z-1 h-full">
				<Image
					className="w-full h-full max-h-[572px] object-cover"
					height={597}
					width={563}
					src={platformImg1}
					alt="platform_img_1"
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-white via-white/100 2xl:via-white/80 to-transparent z-1"></div>
			</div>

			<div className="absolute -right-18 lg:right-0 top-0 z-1 h-full">
				<Image
					width={556}
					height={597}
					className="w-full h-full max-h-[572px] object-cover"
					src={platformImg2}
					alt="platform_img_2"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/100 2xl:via-white/80 to-transparent z-1"></div>
			</div>

			<div className="z-10">
				<Image
					width={1440}
					height={125}
					className="w-full h-full object-cover max-h-[118px] relative z-10"
					src={ellipseTop}
					alt="ellipse_top"
				/>
			</div>
		</div>
	);
};

export default AccessToPlatformSection;
