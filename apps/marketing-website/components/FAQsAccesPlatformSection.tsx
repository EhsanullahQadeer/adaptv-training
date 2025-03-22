import React from 'react';
import FAQsSection from './FAQsSection';
import AccessToPlatformSection from './AccessToPlatformSection';

const FAQsAccesPlatformSection = () => {
	return (
		<div>
			<div className="mx-4 mt-[66px] md:mt-[120px] max-sm:mb-[66px]">
				<div className="max-w-[1100px] mx-auto">
					<FAQsSection />
				</div>
			</div>

			<AccessToPlatformSection
				title="Get early access to our platform"
				subtitle="Build your Client base before launch"
				buttonText="Become a coach"
			/>
		</div>
	);
};

export default FAQsAccesPlatformSection;
