'use client';

import React from 'react';
import { Button, Typography } from '@workspace/ui/components';
import { useRouter } from 'next/navigation';

export default function CoachError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-[1100px] mx-auto px-4">
				<div className="py-20 text-center">
					<Typography as="h4" className="mb-4">
						Something went wrong loading the coach section
					</Typography>
					<div className="flex gap-4 justify-center">
						<Button onClick={() => router.push('/')}>Go Home</Button>
						<Button onClick={() => reset()} variant="outline">
							Try Again
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
