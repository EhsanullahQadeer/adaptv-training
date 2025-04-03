'use client';

import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import PlatfomFeaturesTabs from '@/components/platform/PlatfomFeaturesTabs';
import { FireIcon, MessageIcon, UserIcon, UserSearchIcon, UsersIcon } from '@workspace/ui/icons';
import { Skeleton } from '@workspace/ui/components/skeleton';

const SessionTabContent = dynamic(() => import('./SessionTabContent'), { ssr: false });
const TrainersTabContent = dynamic(() => import('./TrainersTabContent'), { ssr: false });
const ClassesTabContent = dynamic(() => import('./ClassesTabContent'), { ssr: false });
const ClientMessagesTabContent = dynamic(() => import('./ClientMessagesTabContent'), { ssr: false });
const ProfileTabContent = dynamic(() => import('./ProfileTabContent'), { ssr: false });

const featureTabs = [
  { label: 'Session', value: 'session', icon: FireIcon },
  { label: 'Trainers', value: 'trainers', icon: UserSearchIcon },
  { label: 'Classes', value: 'classes', icon: UsersIcon },
  { label: 'Messages', value: 'messages', icon: MessageIcon },
  { label: 'Profile', value: 'profile', icon: UserIcon },
];

const TabLoader = () => (
  <div className="space-y-4">
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-3/4" />
    <Skeleton className="h-12 w-1/2" />
  </div>
);

export default function PlatformTabs() {
  const [activeTab, setActiveTab] = useState('session');

  const renderTabContent = () => {
    return (
      <Suspense fallback={<TabLoader />}>
        {activeTab === 'session' && <SessionTabContent />}
        {activeTab === 'trainers' && <TrainersTabContent />}
        {activeTab === 'classes' && <ClassesTabContent />}
        {activeTab === 'messages' && <ClientMessagesTabContent />}
        {activeTab === 'profile' && <ProfileTabContent />}
      </Suspense>
    );
  };

  return (
    <div className="max-w-[1100px] mx-auto overflow-hidden">
      <PlatfomFeaturesTabs
        {...{ title: 'Enhance workout with smart features', activeTab, setActiveTab, featureTabs }}
      />
      <div className="mt-6 sm:mt-9 w-full">
        {renderTabContent()}
      </div>
    </div>
  );
}
