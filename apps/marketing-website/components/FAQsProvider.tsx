'use client';
import React, { useEffect } from 'react';
import { useAppContext } from '@/lib/context/AppContext';

const FAQsProvider = ({ data, children }: { data: FAQsData; children: React.ReactNode }) => {
	const { setGlobalFAQsData } = useAppContext();

	useEffect(() => {
		setGlobalFAQsData(data);
	}, [data, setGlobalFAQsData]);

	return <>{children}</>;
};

export default FAQsProvider;
