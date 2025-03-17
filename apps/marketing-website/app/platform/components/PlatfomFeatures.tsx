'use client';
import ArticleIcon from '@/app/assets/icons/ArticleIcon';
import CalenderIcon from '@/app/assets/icons/CalenderIcon';
import FireIcon from '@/app/assets/icons/FireIcon';
import MessageIcon from '@/app/assets/icons/MessageIcon';
import StackIcon from '@/app/assets/icons/StackIcon';
import WalletIcon from '@/app/assets/icons/WalletIcon';
import React, { useState } from 'react';
import DashboardTabContent from './DashboardTabContent';
import SessionsTabContent from './SessionsTabContent';
import ServicesTabContent from './ServicesTabContent';
import RoutinesTabContent from './RoutinesTabContent';
import MessagesTabContent from './MessagesTabContent';
import { Typography } from '@workspace/ui/components';

const featureTabs = [
	{ label: 'Dashboard', value: 'dashboard', icon: <FireIcon /> },
	{ label: 'Sessions', value: 'sessions', icon: <CalenderIcon /> },
	{ label: 'Services', value: 'services', icon: <StackIcon /> },
	{ label: 'Routines', value: 'routines', icon: <ArticleIcon /> },
	{ label: 'Messages', value: 'messages', icon: <MessageIcon /> },
	{ label: 'Earnings', value: 'earnings', icon: <WalletIcon /> },
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
