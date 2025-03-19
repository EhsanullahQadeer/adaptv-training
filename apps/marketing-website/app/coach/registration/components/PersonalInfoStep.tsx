import { UseFormReturn, ControllerRenderProps } from 'react-hook-form';
import { Input, Separator, Typography } from '@workspace/ui/components';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@workspace/ui/components/form';
import { MailIcon } from '@workspace/ui/icons';
import PhoneNumberInput from '@workspace/ui/components/phonenumber-input';
import CertificateField from './CertificateField';

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: string;
	instagram?: string;
	tiktok?: string;
	x?: string;
	linkedin?: string;
	facebook?: string;
	youtube?: string;
};

interface PersonalInfoStepProps {
	form: UseFormReturn<FormValues>;
}

const PersonalInfoStep = ({ form }: PersonalInfoStepProps) => {
	// Define the fields for the form
	const fields: {
		name: keyof FormValues;
		label: string;
		placeholder?: string;
		component: (field: ControllerRenderProps<FormValues>) => JSX.Element;
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
						name={field.name}
						value={field.value || ''}
						onChange={field.onChange}
					/>
				</div>
			),
		},
	];

	//  social fields for the form
	const socialFields: {
		name: keyof FormValues;
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
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
				{fields.map(({ name, label, component }) => (
					<FormField
						key={name}
						control={form.control}
						name={name}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs">{label}</FormLabel>
								<FormControl>{component(field)}</FormControl>
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
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
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

			<Separator/>

			<CertificateField />
		</div>
	);
};

export default PersonalInfoStep;
