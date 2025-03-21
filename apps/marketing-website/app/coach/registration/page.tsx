import React from 'react';
import LeftSide from './components/LeftSide';
import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
const { registrationRightBg, adaptvLogo } = imagesPaths;

const page = () => {
	return (
		<div className="flex flex-1 ">
			<LeftSide />

			<div
				className={`hidden lg:flex flex-[42] bg-black p-4 bg-cover bg-center`}
				style={{ backgroundImage: `url(${registrationRightBg})` }}
			>
				<div className="flex-1 flex flex-col gap-2 items-center justify-center p-2">
					<Image width={193} height={32} src={adaptvLogo} alt="Adaptv Logo" />
					<Typography className="max-w-[540px] text-center" as="h2" color="light">
						Your Coaching Journey Starts Here
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default page;
