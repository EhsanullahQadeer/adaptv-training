import React from 'react';
import { Skeleton } from '@workspace/ui/components/skeleton';

export default function CoachLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="py-20">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="space-y-8">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    </div>
  );
}
