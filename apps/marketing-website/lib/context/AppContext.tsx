import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
	globalFAQsData: FAQsData | null;
	setGlobalFAQsData: (value: FAQsData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [globalFAQsData, setGlobalFAQsData] = useState<FAQsData | null>(null);

	return <AppContext.Provider value={{ globalFAQsData, setGlobalFAQsData }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};
