'use client';
import React from 'react';
import { Typography } from '@workspace/ui/components';

interface Props {
	title: string;
	activeTab: string;
	setActiveTab: (value: string) => void;
	featureTabs: { label: string; value: string; icon: React.ReactNode }[];
}

const PlatfomFeaturesTabs = (props: Props) => {
	const { title, featureTabs, activeTab, setActiveTab } = props;

	return (
		<div className="mt-[60px] md:pt-20 flex flex-col items-center gap-9">
			<Typography as={'h3'} align="center">
				{title}
			</Typography>

			<div className="flex items-center border-b border-light-smoke w-full max-w-max overflow-x-auto scrollbar-hide">
				{featureTabs.map((tab, idx) => {
					const { label, value, icon } = tab;
					return (
						<div
							onClick={() => setActiveTab(value)}
							key={value + idx}
							className={`flex flex-col gap-1.5 p-2 sm:p-4 items-center cursor-pointer border-black ${
								value === activeTab ? 'border-b-2' : 'border-b-0'
							}`}
						>
							{icon}
							<Typography
								as={'caption'}
								fontWeight="font-semibold"
								className="max-sm:tracking-[-0.06px] leading-normal"
							>
								{label}
							</Typography>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PlatfomFeaturesTabs;
