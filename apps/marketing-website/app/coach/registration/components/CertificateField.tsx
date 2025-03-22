import { Typography } from '@workspace/ui/components';

import React from 'react';
// import CertificateDialog from './Dialog/CertificateDialog';

const CertificateField = () => {
	return (
		<div className="flex flex-wrap justify-between items-center mt-8 gap-3">
			<div className="min-w-[200px] flex-1">
				<Typography className="mb-0.5" sizeVariant="large" as="h5">
					Certification
				</Typography>
				<Typography color="mutedGray" sizeVariant="small" as="p_caption">
					If you have a certificate, add it to strengthen your credibility
				</Typography>
			</div>
			<div>
				{/* <CertificateDialog /> */}
			</div>
		</div>
	);
};

export default CertificateField;
