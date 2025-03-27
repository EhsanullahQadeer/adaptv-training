import FAQsProvider from '@/components/FAQsProvider';
import { getClientFAQs } from '@/lib/services/cmsService';
import React from 'react';

const ClientLayout = async ({ children }: { children: React.ReactNode }) => {
	const clientFAQsResponse = await getClientFAQs();

	return (
		<FAQsProvider data={clientFAQsResponse}>
			{children}
		</FAQsProvider>
	);
};

export default ClientLayout;
