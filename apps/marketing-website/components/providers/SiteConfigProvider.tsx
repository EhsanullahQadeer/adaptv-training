import { getSiteConfiguration } from '@/lib/services/cmsService';
import { Suspense } from 'react';
import { Providers } from '@/components/providers';

async function SiteConfigLoader({ children }: { children: React.ReactNode }) {
    const siteConfig = await getSiteConfiguration();
    return <Providers siteConfig={siteConfig}>{children}</Providers>;
}

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <SiteConfigLoader>{children}</SiteConfigLoader>
        </Suspense>
    );
}
