'use client';

import { Button, Typography } from '@workspace/ui/components';
import { useRouter } from 'next/navigation';

export default function LearningPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="mt-4 md:mt-9 mb-6 md:mb-20 bg-white">
      <div className="mx-4">
        <div className="max-w-[1100px] mx-auto text-center py-20">
          <Typography as="h4" className="mb-4">
            Something went wrong loading this learning resource
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => router.back()}>Go Back</Button>
            <Button onClick={() => reset()} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
