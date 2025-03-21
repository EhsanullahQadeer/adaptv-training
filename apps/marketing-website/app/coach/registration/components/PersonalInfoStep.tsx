import { UseFormReturn, ControllerRenderProps } from 'react-hook-form';
import { Input, Separator, Typography } from '@workspace/ui/components';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@workspace/ui/components/form';
import { MailIcon } from '@workspace/ui/icons';
import PhoneNumberInput from '@workspace/ui/components/phonenumber-input';
import CertificateField from './CertificateField';

interface PersonalInfoStepProps {
	form: UseFormReturn<CoachFormValues>;
}

const PersonalInfoStep = ({ form }: PersonalInfoStepProps) => {
	// Define the fields for the form
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
			component: (field) => <Input placeholder="John" {...field} />,
		},
		{
			name: 'lastName',
			label: 'Last Name',
			placeholder: 'Doe',
			component: (field) => <Input placeholder="Doe" {...field} />,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'email@example.com',
			component: (field) => (
				<Input leftAdornment={<MailIcon />} type="email" placeholder="email@example.com" {...field} />
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
						// name={field.name}
						value={field.value || ''}
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
									<Input placeholder={placeholder} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
			</div>

			<Separator className="my-8" />

			<CertificateField />
		</div>
	);
};

export default PersonalInfoStep;
