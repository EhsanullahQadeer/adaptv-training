'use client';

import React, { Suspense } from 'react';
import { Skeleton } from '@workspace/ui/components/skeleton';
import dynamic from 'next/dynamic';

const SessionTabContent = dynamic(() => import('./SessionTabContent'), {
	loading: () => <TabSkeleton />,
});

const TrainersTabContent = dynamic(() => import('./TrainersTabContent'), {
	loading: () => <TabSkeleton />,
});

const ClassesTabContent = dynamic(() => import('./ClassesTabContent'), {
	loading: () => <TabSkeleton />,
});

const ClientMessagesTabContent = dynamic(() => import('./ClientMessagesTabContent'), {
	loading: () => <TabSkeleton />,
});

const ProfileTabContent = dynamic(() => import('./ProfileTabContent'), {
	loading: () => <TabSkeleton />,
});

const TabSkeleton = () => (
	<div className="flex flex-col gap-5">
		{[1, 2, 3].map((i) => (
			<div key={i} className="flex flex-col sm:flex-row gap-8 items-center">
				<div className="flex-1 w-full">
					<Skeleton className="h-8 w-3/4 mb-4" />
					<Skeleton className="h-4 w-full mb-2" />
					<Skeleton className="h-4 w-2/3" />
				</div>
				<Skeleton className="w-full sm:w-[300px] h-[200px]" />
			</div>
		))}
	</div>
);

interface TabContentProps {
	activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
	const renderContent = () => {
		switch (activeTab) {
			case 'session':
				return <SessionTabContent />;
			case 'trainers':
				return <TrainersTabContent />;
			case 'classes':
				return <ClassesTabContent />;
			case 'messages':
				return <ClientMessagesTabContent />;
			case 'profile':
				return <ProfileTabContent />;
			default:
				return <SessionTabContent />;
		}
	};

	return <Suspense fallback={<TabSkeleton />}>{renderContent()}</Suspense>;
}
