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
	purpose: z.string(),
	biggestStruggle: z.string(),
	interested: z.string(),
	trainingStyle: z.string(),
	certification: z
		.array(
			z.object({
				id: z.string(),
				name: z.string().min(1, { message: 'Certification Name is required.' }),
				company: z.string().min(1, { message: 'Company is required.' }),
			})
		)
		.optional(),
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
			biggestStruggle: '',
			interested: 'no',
			trainingStyle: '',
			certification: [],
		},
	});
	
	// Handle form submission
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log('Form values:', values);
	};

	// Function to add a certification
	const addCertification = (certification: Certification) => {
		const updatedCertifications = [...(form.getValues('certification') || []), certification];
		form.setValue('certification', updatedCertifications);
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
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 space-y-8 py-5.5 ">
				<div className="overflow-auto flex flex-col flex-grow flex-shrink-0 basis-0">
					{/* Render the current step component */}
					{CurrentStep && <CurrentStep form={form} addCertification={addCertification} />}
				</div>
				<div className="flex justify-between gap-3">
					<div className="flex-1">
						{currentStep === 2 ? (
							<Button className="w-full xs:w-auto" onClick={handleBack} variant="outline" type="button" size="lg">
								Back
							</Button>
						) : (
							<div></div>
						)}
					</div>
					<div className="flex-1 flex justify-end">
						{currentStep == 1 ? (
							<Button className="w-full xs:w-auto" onClick={handleNext} size="lg" type="button">
								Next
							</Button>
						) : (
							currentStep == 2 && (
								<Button
									size="lg"
									onClick={handleNext}
									//  type="submit"
									className="w-full xs:w-auto"
								>
									Submit
								</Button>
							)
						)}
					</div>
				</div>
			</form>
		</Form>
	);
};

export default FormWrapper;
