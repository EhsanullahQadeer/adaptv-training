import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Skeleton } from '@workspace/ui/components/skeleton';
import ClientWrapper from './components/ClientWrapper';

const FAQsAccesPlatformSection = dynamic(() => import('@/components/FAQsAccesPlatformSection'));
const AdaptiveClient = dynamic(() => import('@/components/AdaptiveClient'));
const PlatformHeaderComponent = dynamic(() => import('@/components/platform/PlatformHeaderComponent'));

export const metadata: Metadata = {
  title: 'Adaptv Training Platform | Smart Fitness Training',
  description: 'Track your fitness progress, book training sessions, and connect with expert trainers. Join our smart training platform for personalized workouts and expert guidance.',
  keywords: 'fitness platform, personal training, workout tracking, online fitness, fitness classes',
  openGraph: {
    title: 'Adaptv Training Platform | Smart Fitness Training',
    description: 'Track your fitness progress, book training sessions, and connect with expert trainers.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
        <PlatformHeaderComponent
          {...{
            title: 'All-in-One Platform for Smarter Training',
            subHeading: 'Track progress, book sessions, and connect with expert trainers',
            buttonText: 'Join the Waitlist',
          }}
        />
      </Suspense>

      <div className="bg-white">
        <div className="px-4">
          <ClientWrapper />

          <div className="mt-[66px] md:mt-[120px]">
            <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
              <AdaptiveClient
                steps={require('@/components/data').clientsData}
                title="How to become an Adaptv Client"
              />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
          <FAQsAccesPlatformSection />
        </Suspense>
      </div>
    </main>
  );
}
