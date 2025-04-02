import { UseFormReturn, ControllerRenderProps } from 'react-hook-form';
import { Input, Separator, Typography } from '@workspace/ui/components';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@workspace/ui/components/form';
import { MailIcon } from '@workspace/ui/icons';
import PhoneNumberInput from '@workspace/ui/components/phonenumber-input';
import CertificateField from './CertificateField';
import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { CoachFormValues } from '@/types/coach';
import { getStringValue } from './FormWrapper';

const phoneSchema = z
	.string()
	.nonempty({ message: 'Phone number is required.' })
	.refine(
		(value) => {
			const phoneNumber = parsePhoneNumberFromString(value);
			return phoneNumber ? phoneNumber.isValid() : false;
		},
		{ message: 'Invalid phone number format.' },
	);

export const personalInfoSchema = z.object({
	firstName: z.string().nonempty({ message: 'First name is required.' }),
	lastName: z.string().nonempty({ message: 'Last name is required.' }),
	email: z.string().email({ message: 'Invalid email address.' }),
	phoneNumber: phoneSchema,
	certification: z
		.array(
			z.object({
				id: z.string().nonempty({ message: 'ID is required.' }),
				name: z.string().nonempty({ message: 'Certification Name is required.' }),
				company: z.string().nonempty({ message: 'Company is required.' }),
			}),
		)
		.optional(),

	instagram: z.string().url().or(z.literal('')).optional(),
	tiktok: z.string().url().or(z.literal('')).optional(),
	x: z.string().url().or(z.literal('')).optional(),
	linkedin: z.string().url().or(z.literal('')).optional(),
	facebook: z.string().url().or(z.literal('')).optional(),
	youtube: z.string().url().or(z.literal('')).optional(),
});

interface PersonalInfoStepProps {
	form: UseFormReturn<CoachFormValues>;
}

const PersonalInfoStep = ({
	form,
	addCertification,
	removeCertification,
}: PersonalInfoStepProps & {
	addCertification: (cert: { id: string; name: string; company: string }) => void;
	removeCertification: (certificationId: string) => void;
}) => {
	const fields: {
		name: keyof CoachFormValues;
		label: string;
		placeholder?: string;
		component: (field: ControllerRenderProps<CoachFormValues>) => JSX.Element;
	}[] = [
		{
			name: 'firstName',
			label: 'First Name',
			placeholder: 'John',
			component: (field) => <Input placeholder="John" {...field} value={getStringValue(field.value)} />,
		},
		{
			name: 'lastName',
			label: 'Last Name',
			placeholder: 'Doe',
			component: (field) => <Input placeholder="Doe" {...field} value={getStringValue(field.value)} />,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'email@example.com',
			component: (field) => (
				<Input
				className='pl-8'
					leftAdornment={<MailIcon />}
					type="email"
					placeholder="email@example.com"
					{...field}
					value={getStringValue(field.value)}
				/>
			),
		},
		{
			name: 'phoneNumber',
			label: 'Phone Number',
			component: (field) => (
				<div className="group flex border border-gray-300 rounded-lg focus-within:border-ring transition-all">
					<PhoneNumberInput
						className="flex-1"
						inputClassName="!w-full !border-none !h-10 !rounded-lg"
						countrySelectorStyleProps={{
							buttonClassName: '!px-2.5 !py-3 !h-10 !rounded-lg transition-all !border-none',
						}}
						value={getStringValue(field.value)}
						onChange={field.onChange}
					/>
				</div>
			),
		},
	];

	//  social fields for the form
	const socialFields: {
		name: keyof CoachFormValues;
		label: string;
		placeholder: string;
	}[] = [
		{ name: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com' },
		{ name: 'tiktok', label: 'TikTok', placeholder: 'https://tiktok.com' },
		{ name: 'x', label: 'X', placeholder: 'https://x.com' },
		{ name: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com' },
		{ name: 'facebook', label: 'Facebook', placeholder: 'https://facebook.com' },
		{ name: 'youtube', label: 'YouTube', placeholder: 'https://youtube.com' },
	];

	return (
		<div>
			{/* Account Section */}
			<Typography className="mb-5" sizeVariant="large" as="h5">
				Account
			</Typography>
			<div className="grid  gap-3 grid-cols-2">
				{fields.map(({ name, label, component }, index) => (
					<FormField
						key={name}
						control={form.control}
						name={name}
						render={({ field }) => (
							<FormItem className={index < 2 ? ' col-span-1 ' : 'col-span-2 sm:col-span-1'}>
								<FormLabel className="text-xs">{label}</FormLabel>
								<FormControl>
									<>{component(field)}</>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
			</div>

			{/* Social Handles Section */}
			<Typography className="mt-8 mb-5" sizeVariant="large" as="h5">
				Social Handles
			</Typography>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{socialFields.map(({ name, label, placeholder }) => (
					<FormField
						key={name}
						control={form.control}
						name={name}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs">{label}</FormLabel>
								<FormControl>
									<Input placeholder={placeholder} {...field} value={getStringValue(field.value)} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
			</div>

			<Separator className="my-8" />

			<CertificateField
				certifications={form.watch('certification') || []}
				addCertification={addCertification}
				removeCertification={removeCertification}
			/>
		</div>
	);
};

export default PersonalInfoStep;
