import React, { createContext, useContext, useState } from 'react';
import type { FAQsData } from '@/types/faq';

interface AppContextType {
	globalFAQsData: FAQsData | null;
	siteConfig: ISiteConfig;
	setGlobalFAQsData: (value: FAQsData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children, siteConfig }: { children: React.ReactNode; siteConfig: ISiteConfig }) => {
	const [globalFAQsData, setGlobalFAQsData] = useState<FAQsData | null>(null);

	return (
		<AppContext.Provider value={{ globalFAQsData, setGlobalFAQsData, siteConfig }}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};
