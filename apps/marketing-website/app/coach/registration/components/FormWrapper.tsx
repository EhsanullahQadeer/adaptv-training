import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form } from '@workspace/ui/components';
import PersonalInfoStep from './PersonalInfoStep';
import QuestionnaireStep from './QuestionnaireStep';
import ConfirmationStep from './ConfirmationStep';

// Define the form schema
const formSchema = z.object({
	firstName: z.string().min(2, {
		message: 'First name is required.',
	}),
	lastName: z.string().min(2, {
		message: 'Last name is required.',
	}),
	email: z.string().email({
		message: 'Invalid email address.',
	}),
	phoneNumber: z.string().optional(),
	instagram: z.string().url().optional(),
	tiktok: z.string().url().optional(),
	x: z.string().url().optional(),
	linkedin: z.string().url().optional(),
	facebook: z.string().url().optional(),
	youtube: z.string().url().optional(),
});

// Define the steps
const steps = [PersonalInfoStep, QuestionnaireStep, ConfirmationStep];

interface IProps {
	totalSteps: number;
	currentStep: number;
	setCurrentStep: (value: number) => void;
}

const FormWrapper = ({ totalSteps, currentStep, setCurrentStep }: IProps) => {
	// Initialize the form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			instagram: '',
			tiktok: '',
			x: '',
			linkedin: '',
			facebook: '',
			youtube: '',
		},
	});

	// Handle form submission
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log('Form values:', values);
	};

	// Get the current step component
	const CurrentStep = steps[currentStep - 1];

	// Handle "Next" button click
	const handleNext = () => {
		setCurrentStep(Math.min(totalSteps, currentStep + 1));
	};

	// Handle "Back" button click
	const handleBack = () => {
		setCurrentStep(Math.max(1, currentStep - 1));
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col grow justify-between space-y-8 py-5.5">
				{/* Render the current step component */}
				{CurrentStep && <CurrentStep form={form} />}

				{/* Navigation buttons */}
				<div className="flex justify-between sticky bottom-2">
					{currentStep > 1 ? (
						<Button onClick={handleBack} variant="outline" type="button" size="lg">
							Back
						</Button>
					) : (
						<div></div>
					)}
					{currentStep < totalSteps ? (
						<Button onClick={handleNext} size="lg" type="button">
							Next
						</Button>
					) : (
						<Button size="lg" type="submit">
							Submit
						</Button>
					)}
				</div>
			</form>
		</Form>
	);
};

export default FormWrapper;
