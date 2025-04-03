import React, { Suspense } from 'react';
import LeftSide from './components/LeftSide';
import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
import { getCoachApplicationConfig } from '@/lib/services/cmsService';
import { CertificationOptionsProvider } from './components/CertificationOptionsContext';
import { Skeleton } from '@workspace/ui/components/skeleton';
import { Metadata } from 'next';

const { registrationRightBg, adaptvLogo } = imagesPaths;

export const metadata: Metadata = {
  title: 'Become a Coach | Adaptv Training Platform',
  description: 'Join our network of expert trainers. Apply to become a certified coach on the Adaptv Training Platform.',
  keywords: 'coach application, fitness trainer, personal trainer certification, online coaching platform',
  openGraph: {
    title: 'Become a Coach | Adaptv Training Platform',
    description: 'Join our network of expert trainers. Apply to become a certified coach.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = async () => {
	const { certificationOptions } = await getCoachApplicationConfig();
	return (
		<CertificationOptionsProvider {...{ certificationOptions }}>
			<div className="flex flex-1 ">
				<Suspense fallback={<Skeleton className="flex-1 lg:flex-[58] h-screen" />}>
				<LeftSide />
			</Suspense>

				<div
					className={`hidden lg:flex flex-[42] bg-black p-4 bg-cover bg-center`}
					style={{ backgroundImage: `url(${registrationRightBg})` }}
				>
					<div className="flex-1 flex flex-col gap-2 items-center justify-center p-2">
						<Image 
							width={193} 
							height={32} 
							src={adaptvLogo} 
							alt="Adaptv Logo" 
							priority 
							quality={90}
						/>
						<Typography className="max-w-[540px] text-center" as="h2" color="light">
							Your Coaching Journey Starts Here
						</Typography>
					</div>
				</div>
			</div>
		</CertificationOptionsProvider>
	);
};

export default page;
