import FAQsProvider from '@/components/FAQsProvider';
import { getCoachFAQs } from '@/lib/services/cmsService';
import React from 'react';

const CoachLayout = async ({ children }: { children: React.ReactNode }) => {
	const coachFAQsResponse = await getCoachFAQs();

	return (
		<FAQsProvider data={coachFAQsResponse}>
			{children}
		</FAQsProvider>
	);
};

export default CoachLayout;
