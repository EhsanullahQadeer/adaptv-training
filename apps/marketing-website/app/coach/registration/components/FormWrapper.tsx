import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form } from '@workspace/ui/components';
import PersonalInfoStep, { personalInfoSchema } from './PersonalInfoStep';
import QuestionnaireStep, { questionnaireSchema } from './QuestionnaireStep';
import ConfirmationStep from './ConfirmationStep';
import { submitCoachApplication } from '@/lib/services/apiService';
import { Certification } from '@/types/coach';

const stepSchemas = [personalInfoSchema, questionnaireSchema];
const steps = [PersonalInfoStep, QuestionnaireStep, ConfirmationStep];

interface IProps {
	totalSteps: number;
	currentStep: number;
	setCurrentStep: (value: number) => void;
}

const FormWrapper = ({ totalSteps, currentStep, setCurrentStep }: IProps) => {
	const currentSchema = stepSchemas
		.slice(0, currentStep) // Merge all schemas up to current step
		.reduce((acc, schema) => acc.merge(schema), z.object({}));

	const form = useForm<z.infer<typeof combinedSchema>>({
		resolver: zodResolver(currentSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
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
			whyBecomeCoach: '',
			biggestStruggle: '',
			interestedInAthleteProgram: 'false',
			trainingStyles: [],
			certification: [],
		},
	});

	// Handle form submission
	const onSubmit = async (values: z.infer<typeof combinedSchema>) => {
		console.log('Form values:', values);
		if (currentStep < totalSteps - 1) {
			setCurrentStep(currentStep + 1);
		} else {
			try {
				console.log('Final submission:', values);
				const response = await submitCoachApplication(values);
				console.log('response: ', response);
			} catch (error) {
				console.log('error: ', error);
			}
		}
	};

	// Get the current step component
	const CurrentStep = steps[currentStep - 1];

	// Function to add a certification
	const addCertification = (certification: Certification) => {
		const updatedCertifications = [...(form.getValues('certification') || []), certification];
		form.setValue('certification', updatedCertifications);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 space-y-8 py-5.5">
				<div className="overflow-auto flex flex-col flex-grow flex-shrink-0 basis-0">
					{/* Render the current step component */}
					{CurrentStep && <CurrentStep {...{ addCertification, form }} />}
				</div>
				<div className="flex justify-between gap-3">
					<div className="flex-1">
						{currentStep > 1 && (
							<Button
								className="w-full xs:w-auto"
								onClick={() => setCurrentStep(currentStep - 1)}
								color="transLight"
								variant="outline"
								type="button"
								size="lg"
							>
								Back
							</Button>
						)}
					</div>
					<div className="flex-1 flex justify-end">
						<Button className="w-full xs:w-auto" size="lg" type="submit">
							{currentStep === 1 ? 'Next' : 'Submit'}
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
};

export default FormWrapper;
