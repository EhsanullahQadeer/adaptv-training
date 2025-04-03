import { Suspense } from 'react';
import AboutPageView from '@/components/about/AboutPageView';
import { Skeleton } from '@workspace/ui/components/skeleton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Adaptv Training | For Fitness Coaches',
  description: 'Join our network of fitness professionals. Learn how Adaptv Training empowers coaches with smart tools and technology to transform the fitness industry.',
  keywords: 'fitness coaching, personal trainer platform, coach empowerment, fitness technology, training business',
  openGraph: {
    title: 'About Adaptv Training | For Fitness Coaches',
    description: 'Empower your coaching business with smart tools and technology.',
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
				{...{ pageHeading: 'Empowering Coaches. Transforming Fitness.', headingMaxWidth: 'max-w-[700px]' }}
			/>
		</Suspense>
	);
}
