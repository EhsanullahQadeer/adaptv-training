'use client';
import React, { useState } from 'react';
import PlatfomFeaturesTabs from '../../components/platform/PlatfomFeaturesTabs';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';
import AdaptiveClient from '@/components/AdaptiveClient';
import { stepsData } from '@/components/data';
import PlatformHeaderComponent from '@/components/platform/PlatformHeaderComponent';
import { ArticleIcon, CalenderIcon, FireIcon, MessageIcon, StackIcon, WalletIcon } from '@workspace/ui/icons';
import DashboardTabContent from './components/DashboardTabContent';
import SessionsTabContent from './components/SessionsTabContent';
import ServicesTabContent from './components/ServicesTabContent';
import RoutinesTabContent from './components/RoutinesTabContent';
import MessagesTabContent from './components/MessagesTabContent';
import EarningsTabContent from './components/EarningsTabContent';

const featureTabs = [
	{ label: 'Dashboard', value: 'dashboard', icon: FireIcon },
	{ label: 'Sessions', value: 'sessions', icon: CalenderIcon },
	{ label: 'Services', value: 'services', icon: StackIcon },
	{ label: 'Routines', value: 'routines', icon: ArticleIcon },
	{ label: 'Messages', value: 'messages', icon: MessageIcon },
	{ label: 'Earnings', value: 'earnings', icon: WalletIcon },
];

export default function Page() {
	const [activeTab, setActiveTab] = useState('dashboard');
	return (
		<>
			<PlatformHeaderComponent
				{...{
					title: 'Powerful Tools for Coaches',
					subHeading: 'Manage clients, schedule sessions, and grow with ease.',
					buttonText: 'Become a Coach',
				}}
			/>

			<div className="bg-white">
				<div className="px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<PlatfomFeaturesTabs
							{...{ title: 'A Smarter way to train feature highlights', activeTab, setActiveTab, featureTabs }}
						/>

						<div className="mt-6 sm:mt-9 w-full">
							{activeTab === 'dashboard' && <DashboardTabContent />}
							{activeTab === 'sessions' && <SessionsTabContent />}
							{activeTab === 'services' && <ServicesTabContent />}
							{activeTab === 'routines' && <RoutinesTabContent />}
							{activeTab === 'messages' && <MessagesTabContent />}
							{activeTab === 'earnings' && <EarningsTabContent />}
						</div>

						<div className="mt-[66px] md:mt-[120px]">
							<AdaptiveClient steps={stepsData} title="How to become an Adaptv coach" />
						</div>
					</div>
				</div>

				<FAQsAccesPlatformSection />
			</div>
		</>
	);
}
