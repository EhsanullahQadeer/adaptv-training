'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

export function NavigationLoadingProvider() {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		// Small delay to prevent flash
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [pathname]);

	if (!isLoading) return null;

	return <Loading />;
}
