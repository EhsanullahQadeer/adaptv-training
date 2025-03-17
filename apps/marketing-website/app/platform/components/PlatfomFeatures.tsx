'use client';
import React, { useState } from 'react';
import DashboardTabContent from './DashboardTabContent';
import SessionsTabContent from './SessionsTabContent';
import ServicesTabContent from './ServicesTabContent';
import RoutinesTabContent from './RoutinesTabContent';
import MessagesTabContent from './MessagesTabContent';
import { Typography } from '@workspace/ui/components';
import { ArticleIcon, CalenderIcon, FireIcon, MessageIcon, StackIcon, WalletIcon } from '@workspace/ui/icons';

const featureTabs = [
	{ label: 'Dashboard', value: 'dashboard', icon: <FireIcon height={24} width={24} /> },
	{ label: 'Sessions', value: 'sessions', icon: <CalenderIcon height={24} width={24} /> },
	{ label: 'Services', value: 'services', icon: <StackIcon height={24} width={24} /> },
	{ label: 'Routines', value: 'routines', icon: <ArticleIcon height={24} width={24} /> },
	{ label: 'Messages', value: 'messages', icon: <MessageIcon height={24} width={24} /> },
	{ label: 'Earnings', value: 'earnings', icon: <WalletIcon height={24} width={24} /> },
];

const PlatfomFeatures = () => {
	const [activeTab, setActiveTab] = useState('dashboard');
	return (
		<div className="pt-20 pb-18 flex flex-col items-center gap-9">
			<Typography as={'h3'} align="center">
				A Smarter way to train feature highlights
			</Typography>

			<div className="flex items-center justify-center border-b border-light-smoke">
				{featureTabs.map((tab, idx) => {
					const { label, value, icon } = tab;
					return (
						<div
							onClick={() => setActiveTab(value)}
							key={value + idx}
							className={`flex flex-col gap-1.5 p-4 items-center cursor-pointer border-black ${
								value === activeTab ? 'border-b-2' : 'border-b-0'
							}`}
						>
							{icon}
							<Typography
								as={'span_seconday'}
								fontWeight="font-semibold"
								className="tracking-[-0.06px] md:tracking-[-0.16px] leading-normal"
							>
								{label}
							</Typography>
						</div>
					);
				})}
			</div>

			<div className="w-full">
				{activeTab === 'dashboard' && <DashboardTabContent />}
				{activeTab === 'sessions' && <SessionsTabContent />}
				{activeTab === 'services' && <ServicesTabContent />}
				{activeTab === 'routines' && <RoutinesTabContent />}
				{activeTab === 'messages' && <MessagesTabContent />}
			</div>
		</div>
	);
};

export default PlatfomFeatures;
