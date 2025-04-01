'use client';
import React from 'react';
import FAQsSection from './FAQsSection';
import AccessToPlatformSection from './AccessToPlatformSection';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/lib/context/AppContext';

const FAQsAccesPlatformSection = () => {
	const { globalFAQsData } = useAppContext();
	const pathname = usePathname();
	const isClientRoute = pathname.includes('/client');

	const accessProps = isClientRoute
		? {
				title: 'Get ready to transform your fitness journey',
				subtitle: 'Be among the first to experience personalized coaching with top fitness professionals.',
				buttonText: 'Join the Waitlist',
				textMaxWidth: 'max-w-[630px]',
			}
		: {
				title: 'Get early access to our platform',
				subtitle: 'Build your Client base before launch',
				buttonText: 'Become a coach',
				textMaxWidth: 'max-w-[510px]',
			};
	return (
		<div>
			<div className="mx-4 mt-[66px] md:mt-[120px] max-sm:mb-[66px]">
				<div className="max-w-[1100px] mx-auto">
					<FAQsSection {...{ FAQsArr: globalFAQsData?.faq }} />
				</div>
			</div>

			<AccessToPlatformSection {...accessProps} />
		</div>
	);
};

export default FAQsAccesPlatformSection;
