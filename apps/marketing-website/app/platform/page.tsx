'use client';
import React from 'react';
import Image from 'next/image';
import PlatfomFeatures from './components/PlatfomFeatures';
import { Button, Typography } from '@workspace/ui/components';
import { imagesPaths } from '@/lib/public-assets-paths';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';

const { platformToolsImg } = imagesPaths;

export default function Page() {
	return (
		<>
			<div className="bg-snow-white pt-8 md:pt-[70px] px-4">
				<div className="max-w-[700px] m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Powerful Tools for Coaches
					</Typography>
					<Typography as={'p'}>Manage clients, schedule sessions, and grow with ease.</Typography>

					<div className="mt-5">
						<Button onClick={() => {}} size="default" type="button">
							Become a Coach
						</Button>
					</div>
				</div>

				<div className="max-sm:pt-8 pb-7 sm:pb-12 max-w-[1100px] max-h-[420px] mx-auto">
					<Image
						width={1396}
						height={460}
						className="w-full h-full object-cover"
						src={platformToolsImg}
						alt="platform_tools_img"
					/>
				</div>
			</div>

			<div className="bg-white">
				<div className="px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<PlatfomFeatures />
					</div>
				</div>

				<FAQsAccesPlatformSection />
			</div>
		</>
	);
}
