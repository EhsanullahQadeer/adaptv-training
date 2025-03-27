'use client';
import React from 'react';
import { useAppContext } from '@/lib/context/AppContext';
import type { FAQsData } from '@/types/faq';

const FAQsProvider = ({ data, children }: { data: FAQsData; children: React.ReactNode }) => {
  const { setGlobalFAQsData } = useAppContext();

  React.useEffect(() => {
    setGlobalFAQsData(data);
  }, [data, setGlobalFAQsData]);

  return <>{children}</>;
};

export default FAQsProvider;
