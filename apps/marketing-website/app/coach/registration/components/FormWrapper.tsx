import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, CircularLoader } from '@workspace/ui/components';
import { PointerUtils } from '@workspace/ui/lib/utils/pointer';
import PersonalInfoStep, { personalInfoSchema } from './PersonalInfoStep';
import QuestionnaireStep, { questionnaireSchema } from './QuestionnaireStep';
import ConfirmationStep from './ConfirmationStep';
import type { Certification, CoachFormValues } from '@/types/coach';
import { submitCoachApplication } from '@/lib/services/apiService';
import { toast } from '@workspace/ui/components/sonner';

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
	const onSubmit = async (data: CoachFormValues) => {
		try {
			PointerUtils.disable({ loading: true });
			if (currentStep < steps.length - 1) {
				setCurrentStep(currentStep + 1);
			} else {
				await submitCoachApplication(data);
				toast.success('Your application has been successfully submitted.');
				setCurrentStep(currentStep + 1);
			}
		} catch (error: any) {
			toast.error('An error occurred while submitting the form');
		} finally {
			PointerUtils.enable();
		}
	};

	// Get the current step component
	const CurrentStep = steps[currentStep - 1];

	// Function to add a certification
	const addCertification = (certification: Certification) => {
		const currentCertifications = form.getValues('certification') || [];
		form.setValue('certification', [...currentCertifications, certification]);
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
						{currentStep === 2 && (
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
					{currentStep !== totalSteps &&
						<div className="flex-1 flex justify-end">
							<Button className="w-full xs:w-auto" size="lg" type="submit" >
								{currentStep === 1 ? 'Next' : 'Submit'}
								{form.formState.isSubmitting && (
									<span className="ml-2">
										<CircularLoader size={16} />
									</span>
								)}
							</Button>
						</div>}
				</div>
			</form>
		</Form>
	);
};

export default FormWrapper;
