'use client';
import React, { createContext, ReactNode, useContext } from 'react';

export const CertificationOptionsContext = createContext<certificationOptions[] | undefined>(undefined);

export const CertificationOptionsProvider = ({
	children,
	certificationOptions,
}: {
	children: ReactNode;
	certificationOptions: certificationOptions[];
}) => {
	return (
		<CertificationOptionsContext.Provider value={certificationOptions}>
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
