import FAQsProvider from '@/components/FAQsProvider';
import { getCoachFAQs } from '@/lib/services/cmsService';
import React from 'react';

const CoachLayout = async ({ children }: { children: React.ReactNode }) => {
	try {
		const coachFAQsResponse = await getCoachFAQs();
		if (!coachFAQsResponse) {
			throw new Error('Failed to load coach FAQs');
		}

		return <FAQsProvider data={coachFAQsResponse}>{children}</FAQsProvider>;
	} catch (error) {
		throw new Error('Failed to load coach layout');
	}
};

export default CoachLayout;
