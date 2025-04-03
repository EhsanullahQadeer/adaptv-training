'use client';
import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@workspace/ui/components/skeleton';
import PlatformHeaderComponent from '@/components/platform/PlatformHeaderComponent';
import { ArticleIcon, CalenderIcon, FireIcon, MessageIcon, StackIcon, WalletIcon } from '@workspace/ui/icons';
import DashboardTabContent from './DashboardTabContent';
import SessionsTabContent from './SessionsTabContent';
import ServicesTabContent from './ServicesTabContent';
import RoutinesTabContent from './RoutinesTabContent';
import MessagesTabContent from './MessagesTabContent';
import EarningsTabContent from './EarningsTabContent';
import PlatfomFeaturesTabs from '@/components/platform/PlatfomFeaturesTabs';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';
import AdaptiveClient from '@/components/AdaptiveClient';
import { stepsData } from '@/components/data';

const featureTabs = [
	{ label: 'Dashboard', value: 'dashboard', icon: FireIcon },
	{ label: 'Sessions', value: 'sessions', icon: CalenderIcon },
	{ label: 'Services', value: 'services', icon: StackIcon },
	{ label: 'Routines', value: 'routines', icon: ArticleIcon },
	{ label: 'Messages', value: 'messages', icon: MessageIcon },
	{ label: 'Earnings', value: 'earnings', icon: WalletIcon },
];

const PlatformContent = () => {
	// This component is dynamically imported with ssr: false to prevent hydration issues
	const [activeTab, setActiveTab] = useState('dashboard');
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<div className="w-full">
				<Skeleton className="h-[400px] w-full" />
				<Skeleton className="h-[500px] w-full mt-6" />
				<Skeleton className="h-[300px] w-full mt-[66px]" />
				<Skeleton className="h-[400px] w-full" />
			</div>
		);
	}

	return (
		<>
			<Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
				<PlatformHeaderComponent
					{...{
						title: 'Powerful Tools for Coaches',
						subHeading: 'Manage clients, schedule sessions, and grow with ease.',
						buttonText: 'Become a Coach',
					}}
				/>
			</Suspense>

			<div className="bg-white">
				<div className="px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<PlatfomFeaturesTabs
							{...{ title: 'A Smarter way to train feature highlights', activeTab, setActiveTab, featureTabs }}
						/>

						<div className="mt-6 sm:mt-9 w-full">
							<Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
								{activeTab === 'dashboard' && <DashboardTabContent />}
								{activeTab === 'sessions' && <SessionsTabContent />}
								{activeTab === 'services' && <ServicesTabContent />}
								{activeTab === 'routines' && <RoutinesTabContent />}
								{activeTab === 'messages' && <MessagesTabContent />}
								{activeTab === 'earnings' && <EarningsTabContent />}
							</Suspense>
						</div>
					</div>
					<div className="mt-[66px] md:mt-[120px]">
						<Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
							<AdaptiveClient steps={stepsData} title="How to become an Adaptv coach" />
						</Suspense>
					</div>
				</div>

				<Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
					<FAQsAccesPlatformSection />
				</Suspense>
			</div>
		</>
	);
};

export default dynamic(() => Promise.resolve(PlatformContent), {
	ssr: false,
});
