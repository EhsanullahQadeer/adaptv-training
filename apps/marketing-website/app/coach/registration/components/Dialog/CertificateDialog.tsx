import React from 'react';
import { Button, Dialog, Input, Select } from '@workspace/ui/components';
import {
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	dismiss,
} from '@workspace/ui/components/dialog';
import { PlusIcon } from '@workspace/ui/icons';
import { useCertificationOptions } from '../CertificationOptionsContext';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select';
import Image from 'next/image';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@workspace/ui/components/form';

const formSchema = z.object({
	name: z.string().min(1, { message: 'Certification Name is required.' }),
	company: z.string().min(1, { message: 'Company is required.' }),
});

const CertificateDialog = ({
	addCertification,
	certifications,
}: {
	addCertification: (cert: Certification) => void;
	certifications: Certification[];
}) => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			company: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const { id, companyName } = JSON.parse(values.company);
		const obj = { id, company: companyName, name: values.name };
		addCertification(obj);
		form.reset();
		dismiss();
	};

	const { certificationOptions } = useCertificationOptions();

	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button type="button" size="sm">
						<PlusIcon />
						Add certification
					</Button>
				</DialogTrigger>
				<DialogContent showCloseButton={false} className="sm:max-w-[540px]">
					<DialogHeader>
						<DialogTitle>Certification</DialogTitle>
					</DialogHeader>
					<Form {...form}>
						<form
							onSubmit={(e) => {
								e.stopPropagation(); // Prevent parent form submission
								form.handleSubmit(onSubmit)(e);
							}}
							className="grid gap-4 py-4"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Certification Name</FormLabel>
										<FormControl>
											<Input id="name" placeholder="Example: Personal Trainer" className="col-span-3" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="company"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Company</FormLabel>

										<Select onValueChange={(value) => field.onChange(value)} value={field.value}>
											<FormControl>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Choose" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{certificationOptions.map(({ companyImage, companyName }) => {
													const { url, height, width, alt, _key, id } = companyImage;
													const isDisabled = certifications.some((cert) => cert.id === id);

													return (
														<SelectItem key={_key} value={JSON.stringify({ id, companyName })} disabled={isDisabled}>
															<Image
																className="h-6 w-6 object-cover"
																height={height}
																width={width}
																src={cmsAssetsUrl(url)}
																alt={alt}
															/>
															{companyName}
														</SelectItem>
													);
												})}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter className="!justify-between !flex-row flex-wrap gap-3">
								<DialogClose>
									<Button
										className="w-[149px] md:w-[162px] flex-1 sm:flex-none"
										size="lg"
										variant="outline"
										color="transLight"
										type="button"
									>
										Cancel
									</Button>
								</DialogClose>
								<Button className="w-[149px] md:w-[162px] flex-1 sm:flex-none" size="lg" type="submit">
									Add Certification
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default CertificateDialog;
