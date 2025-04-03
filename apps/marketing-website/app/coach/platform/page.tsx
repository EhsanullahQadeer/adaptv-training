import { Metadata } from 'next';
import PlatformContent from './components/PlatformContent';

export const metadata: Metadata = {
  title: 'Coach Platform | Adaptv Training',
  description: 'Access powerful coaching tools to manage clients, schedule sessions, and grow your fitness business. Join our network of professional trainers.',
  keywords: 'coach platform, fitness business tools, client management, session scheduling, trainer earnings',
  openGraph: {
    title: 'Coach Platform | Adaptv Training',
    description: 'Powerful tools to manage and grow your fitness coaching business.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PlatformContent />;
}
