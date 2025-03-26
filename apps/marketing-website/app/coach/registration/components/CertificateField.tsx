import { Typography } from '@workspace/ui/components';

import React from 'react';
import CertificateDialog from './Dialog/CertificateDialog';

const CertificateField = ({
	certifications,
	addCertification,
}: {
	certifications: Certification[];
	addCertification: (cert: Certification) => void;
}) => {
	return (
		<div className="flex flex-col gap-4 mt-8">
			<div className="flex flex-wrap justify-between items-center gap-3">
				<div className="min-w-[200px] flex-1">
					<Typography className="mb-0.5" sizeVariant="large" as="h5">
						Certification
					</Typography>
					<Typography color="mutedGray" sizeVariant="small" as="p_caption">
						If you have a certificate, add it to strengthen your credibility
					</Typography>
				</div>
				<div>
					<CertificateDialog {...{ addCertification, certifications }} />
				</div>
			</div>
			{/* Display added certifications */}
			{certifications.map((cert) => (
				<div key={cert.id} className="flex items-center justify-between border p-3 rounded">
					<div>
						<Typography as="p">{cert.name}</Typography>
						<Typography as="p_caption" color="mutedGray">
							{cert.company}
						</Typography>
					</div>
				</div>
			))}
		</div>
	);
};

export default CertificateField;
