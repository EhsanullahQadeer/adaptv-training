import React from 'react';
import Image from 'next/image';
import { Button, Typography } from '@workspace/ui/components';
import { imagesPaths } from '@/lib/public-assets-paths';
import Subscribe from './Subscribe';
import BecomeACoachButton from '@/app/coach/components/BecomeACoachButton';
import WaitingListDialog from './modals/WaitListDialog';
import { DialogTrigger } from '@workspace/ui/components/dialog';

const { platformImg1, platformImg2, ellipseTop, ellipseBottom } = imagesPaths;

interface AccessToPlatformSectionProps {
	title: string;
	subtitle: string;
	buttonText?: string;
	textMaxWidth?: string;
	inputRequired?: boolean;
}

const AccessToPlatformSection: React.FC<AccessToPlatformSectionProps> = ({
	title,
	subtitle,
	buttonText,
	textMaxWidth,
	inputRequired = false,
}) => {
	return (
		<div className="relative overflow-hidden">
			{/* Bottom Ellipse */}
			<div className="z-10">
				<Image
					className="w-full h-full object-cover max-h-[118px] relative z-10"
					src={ellipseBottom}
					alt="ellipse_bottom"
					width={1440}
					height={127}
				/>
			</div>

			{/* Center Content */}
			<div className="mx-4 z-10 relative sm:my-16">
				<div
					className={`flex flex-col justify-center  items-center ${textMaxWidth ? textMaxWidth : 'max-w-[510px]'} mx-auto`}
				>
					<Typography as="h2" align="center" className="mb-2.5">
						{title}
					</Typography>
					<Typography as="p" className="text-center">
						{subtitle}
					</Typography>
					<div className="mt-5 md:mt-6">
						{inputRequired ? (
							<div className="w-[500px]">
								{/* <Input
									placeholder="Your email address"
									className="bg-white text-base tracking-[-0.08px] leading-[20px] h-[66px] pl-5 border-light-gray rounded-xl shadow-light"
									rightAdornment={
										<Button
											type="button"
											size={'xl'}
											className="tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 h-auto"
										>
											Subscribe
										</Button>
									}
								/> */}
								<Subscribe></Subscribe>
							</div>
						) : (
							<>
								{buttonText?.toLowerCase() === 'become a coach' ? (
									<BecomeACoachButton />
								) : buttonText?.toLowerCase() === 'join the waitlist' ? (
									<WaitingListDialog
										triggerButton={
											<DialogTrigger asChild>
												<Button size="xl" type="button">
													Join the Waitlist
												</Button>
											</DialogTrigger>
										}
									/>
								) : (
									<Button size="xl" type="button">
										{buttonText}
									</Button>
								)}
							</>
						)}
					</div>
				</div>
			</div>

			{/* Left Image */}
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

			{/* Right Image */}
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

			{/* Top Ellipse */}
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
