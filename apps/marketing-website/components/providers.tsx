'use client';
import * as React from 'react';
import { AppProvider } from '@/lib/context/AppContext';

export function Providers({ children, siteConfig }: { children: React.ReactNode; siteConfig: ISiteConfig }) {
	return <AppProvider siteConfig={siteConfig}>{children}</AppProvider>;
}
