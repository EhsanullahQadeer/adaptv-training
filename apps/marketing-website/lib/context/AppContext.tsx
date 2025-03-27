import React, { createContext, useContext, useState } from 'react';
import type { FAQsData } from '@/types/faq';

interface AppContextType {
  globalFAQsData: FAQsData | null;
  setGlobalFAQsData: (value: FAQsData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalFAQsData, setGlobalFAQsData] = useState<FAQsData | null>(null);

  return <AppContext.Provider value={{ globalFAQsData, setGlobalFAQsData }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
