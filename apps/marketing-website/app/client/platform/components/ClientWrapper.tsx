'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@workspace/ui/components/skeleton';

const PlatformTabs = dynamic(() => import('./PlatformTabs'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4 max-w-[1100px] mx-auto">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-12 w-1/2" />
    </div>
  )
});

export default function ClientWrapper() {
  return (
    <Suspense fallback={
      <div className="space-y-4 max-w-[1100px] mx-auto">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-12 w-1/2" />
      </div>
    }>
      <PlatformTabs />
    </Suspense>
  );
}
