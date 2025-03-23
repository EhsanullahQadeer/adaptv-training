'use client';
import React, { useState } from 'react';
import FAQsAccesPlatformSection from '@/components/FAQsAccesPlatformSection';
import AdaptiveClient from '@/components/AdaptiveClient';
import { clientsData } from '@/components/data';
import PlatformHeaderComponent from '@/components/platform/PlatformHeaderComponent';
import PlatfomFeaturesTabs from '@/components/platform/PlatfomFeaturesTabs';
import { FireIcon, MessageIcon, UserIcon, UserSearchIcon, UsersIcon } from '@workspace/ui/icons';
import SessionTabContent from './components/SessionTabContent';
import TrainersTabContent from './components/TrainersTabContent';
import ClassesTabContent from './components/ClassesTabContent';
import ClientMessagesTabContent from './components/ClientMessagesTabContent';
import ProfileTabContent from './components/ProfileTabContent';

const featureTabs = [
	{ label: 'Session', value: 'session', icon: FireIcon },
	{ label: 'Trainers', value: 'trainers', icon: UserSearchIcon },
	{ label: 'Classes', value: 'classes', icon: UsersIcon },
	{ label: 'Messages', value: 'messages', icon: MessageIcon },
	{ label: 'Profile', value: 'profile', icon: UserIcon },
];

export default function Page() {
	const [activeTab, setActiveTab] = useState('session');
	return (
		<>
			<PlatformHeaderComponent
				{...{
					title: 'All-in-One Platform for Smarter Training',
					subHeading: 'Track progress, book sessions, and connect with expert trainers',
					buttonText: 'Join the Waitlist',
				}}
			/>

			<div className="bg-white">
				<div className="px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<PlatfomFeaturesTabs
							{...{ title: 'Enhance workout with smart features', activeTab, setActiveTab, featureTabs }}
						/>

						<div className="mt-6 sm:mt-9 w-full">
							{activeTab === 'session' && <SessionTabContent />}
							{activeTab === 'trainers' && <TrainersTabContent />}
							{activeTab === 'classes' && <ClassesTabContent />}
							{activeTab === 'messages' && <ClientMessagesTabContent />}
							{activeTab === 'profile' && <ProfileTabContent />}
						</div>
					</div>

					<div className="mt-[66px] md:mt-[120px]">
						<AdaptiveClient steps={clientsData} title="How to become an Adaptv Client" />
					</div>
				</div>

				<FAQsAccesPlatformSection />
			</div>
		</>
	);
}
