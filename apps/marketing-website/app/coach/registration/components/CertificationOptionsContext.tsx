'use client';
import { CertificationOptions } from '@/types/coach';
import React, { createContext, ReactNode, useContext } from 'react';

interface CertificationOptionsContextType {
	certificationOptions: CertificationOptions[];
}

const CertificationOptionsContext = createContext<CertificationOptionsContextType | undefined>(undefined);

export const CertificationOptionsProvider = ({
	children,
	certificationOptions,
}: {
	children: ReactNode;
	certificationOptions: CertificationOptions[];
	trainingStyles: TrainingStyle[];
}) => {
	return (
		<CertificationOptionsContext.Provider value={{ certificationOptions }}>
			{children}
		</CertificationOptionsContext.Provider>
	);
};

export const useCertificationOptions = () => {
	const context = useContext(CertificationOptionsContext);
	if (!context) {
		throw new Error('useCertificationOptions must be used within a CertificationOptionsProvider');
	}
	return context;
};
