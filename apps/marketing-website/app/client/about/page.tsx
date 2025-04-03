import { Suspense } from 'react';
import AboutPageView from '@/components/about/AboutPageView';
import { Skeleton } from '@workspace/ui/components/skeleton';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Adaptv Training | Transform Your Fitness Journey',
	description:
		'Learn how Adaptv Training is revolutionizing personal fitness with smart technology and expert guidance. Transform your workouts and reach your fitness goals.',
	keywords: 'fitness platform, personal training, workout transformation, fitness goals, smart training',
	openGraph: {
		title: 'About Adaptv Training | Transform Your Fitness Journey',
		description: 'Transform your workouts with smart technology and expert guidance.',
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
		<Suspense fallback={<Skeleton className="min-h-screen w-full" />}>
			<AboutPageView
				{...{ pageHeading: 'Transform Your Workouts. Reach Your Goals', headingMaxWidth: 'max-w-[800px]' }}
			/>
		</Suspense>
	);
}
