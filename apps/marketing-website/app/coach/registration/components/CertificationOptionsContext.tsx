import React, { createContext, ReactNode, useContext } from 'react';

export const CertificationOptionsContext = createContext<string[]>([]);

export const CertificationOptionsProvider = ({
	children,
	certificationOptions,
}: {
	children: ReactNode;
	certificationOptions: string[];
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
