import { Button, Typography } from '@workspace/ui/components';

import React from 'react';
import CertificateDialog from './Dialog/CertificateDialog';
import { useCertificationOptions } from './CertificationOptionsContext';
import Image from 'next/image';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Certification } from '@/types/coach';
import { DialogTrigger } from '@workspace/ui/components/dialog';

const CertificateField = ({
	certifications,
	addCertification,
	removeCertification,
}: {
	certifications: Certification[];
	addCertification: (cert: Certification) => void;
	removeCertification: (certificationId: string) => void;
}) => {
	const { certificationOptions } = useCertificationOptions();

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
			<div className="space-y-1.5">
				{certifications.map(({ company, id, name }) => {
					const { companyImage } = certificationOptions.find((crt) => crt.companyImage.id === id)!;
					const { url, alt, height, width, createdAt } = companyImage;
					const date = new Date(createdAt);

					const formattedDate = date.toLocaleDateString('en-GB', {
						day: '2-digit',
						month: 'long',
						year: 'numeric',
					});

					return (
						<div key={id} className="flex items-center gap-4 border border-input p-3 rounded-xl relative">
							{/* Image Section */}
							<div>
								<div className="rounded-lg h-15 w-15 border border-input">
									<Image
										className="h-full w-full object-cover"
										height={height}
										width={width}
										src={cmsAssetsUrl(url)}
										alt={alt}
									/>
								</div>
							</div>

							{/* Certification Info */}
							<div className="space-y-1.5">
								<Typography sizeVariant="small" as="h6">
									{name}
								</Typography>
								<div className="flex items-center">
									<Typography fontWeight="font-medium" sizeVariant="small" as="span_secondary">
										{company}
									</Typography>
									<div className="flex items-center">
										<span className="h-1 w-1 mx-1 rounded-full bg-chart-7 inline-block" />
										<Typography color="text-charcoal-gray" sizeVariant="small" as="span_secondary">
											{formattedDate}
										</Typography>
									</div>
								</div>

								{/* View Certification Dialog */}
								<CertificateDialog
									addCertification={addCertification}
									certifications={certifications}
									mode="view"
									viewCertification={{ company, id, name }}
									triggerButton={
										<DialogTrigger asChild>
											<span className="underline underline-offset-1 block cursor-pointer font-semibold text-sm">
												View Certification
											</span>
										</DialogTrigger>
									}
								/>
							</div>
							<span
								onClick={() => removeCertification(id)}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 
               hover:text-red-500 cursor-pointer"
								aria-label="Remove Certification"
							>
								&times;
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CertificateField;
