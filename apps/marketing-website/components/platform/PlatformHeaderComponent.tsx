import BecomeACoachButton from '@/app/coach/components/BecomeACoachButton';
import { imagesPaths } from '@/lib/public-assets-paths';
import { Button, Typography } from '@workspace/ui/components';
import Image from 'next/image';
import React from 'react';
import WaitingListDialog from '../modals/WaitListDialog';
import { DialogTrigger } from '@workspace/ui/components/dialog';

interface Props {
	title: string;
	subHeading: string;
	buttonText: string;
}

const { platformToolsImg } = imagesPaths;

const PlatformHeaderComponent = (props: Props) => {
	const { title, subHeading, buttonText } = props;
	return (
		<div className="pt-8 md:pt-[70px] px-4">
			<div className="max-w-[700px] m-auto text-black text-center">
				<Typography as={'h1'} className="mb-2.5">
					{title}
				</Typography>
				<Typography as={'p'}>{subHeading}</Typography>

				<div className="mt-5">
					{buttonText.toLowerCase() === 'become a coach' ? (
						<BecomeACoachButton />
					) : buttonText.toLowerCase() === 'join the waitlist' ? (
						<WaitingListDialog
							triggerButton={
								<DialogTrigger asChild>
									<Button size="default" type="button">
										Join the Waitlist
									</Button>
								</DialogTrigger>
							}
						/>
					) : (
						<Button onClick={() => {}} size="default" type="button">
							{buttonText}
						</Button>
					)}
				</div>
			</div>

			<div className="max-sm:pt-8 mb-7 sm:mb-12 max-w-[1100px] max-h-[420px] mx-auto">
				<Image
					width={1396}
					height={460}
					className="w-full h-full object-cover"
					src={platformToolsImg}
					alt="platform_tools_img"
				/>
			</div>
		</div>
	);
};

export default PlatformHeaderComponent;
