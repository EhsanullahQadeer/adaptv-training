import React from 'react';

declare global {
	namespace JSX {
		type Element = React.ReactNode;
	}

	interface FAQItem {
		question: string;
		answer: string;
		id: string;
	}

	interface FAQsData {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		faq: FAQItem[];
		id: string;
	}
}
