import { CoachFormValues } from '@/types/coach';
import { Badge, RadioGroup, Textarea } from '@workspace/ui/components';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@workspace/ui/components/form';
import { RadioGroupItem } from '@workspace/ui/components/radio-group';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

interface PersonalInfoStepProps {
	form: UseFormReturn<CoachFormValues>;
}

const fields: { name: keyof CoachFormValues; label: string; placeholder: string }[] = [
	{
		name: 'whyBecomeCoach',
		label: 'Why do you want to become an AdaptvTraining Coach?',
		placeholder:
			'Example: I am passionate about helping others reach their full potential, both physically and mentally.',
	},
	{
		name: 'biggestStruggle',
		label: "What's the biggest struggle in your coaching business right now?",
		placeholder:
			"Example: The biggest struggle I’m facing is creating personalized programs that cater to each client's.",
	},
];

export const questionnaireSchema = z.object({
	whyBecomeCoach: z.string().nonempty({ message: 'Purpose is required.' }),
	biggestStruggle: z.string().nonempty({ message: 'Biggest struggle is required.' }),
	interestedInAthleteProgram: z
		.enum(['true', 'false'], { message: 'Selection is required.' })
		.transform((val) => val === 'true'), // Convert "true" to `true` and "false" to `false`

	trainingStyles: z.array(z.string()).nonempty({ message: 'At least one training style is required.' }),
});

const QuestionnaireStep = ({ form }: PersonalInfoStepProps) => {
	return (
		<div className="flex flex-col gap-5">
			{fields.map(({ name, label, placeholder }) => (
				<FormField
					key={name}
					control={form.control}
					name={name}
					render={({ field }) => (
						<FormItem>
							<FormLabel>{label}</FormLabel>
							<FormControl>
								<Textarea
									placeholder={placeholder}
									className="resize-none min-h-[89px]"
									showRemainingText={true}
									maxLength={300}
									{...field}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			))}
			<FormField
				control={form.control}
				name="interestedInAthleteProgram"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Are you interested in becoming an AdaptvTraining Athlete? </FormLabel>
						<FormControl>
							<RadioGroup onValueChange={field.onChange} defaultValue={String(field.value)} className="flex gap-4 py-2">
								<FormItem className="flex items-center space-x-3 space-y-0">
									<FormControl>
										<RadioGroupItem value="true" />
									</FormControl>
									<FormLabel className="font-normal">Yes</FormLabel>
								</FormItem>
								<FormItem className="flex items-center space-x-3 space-y-0">
									<FormControl>
										<RadioGroupItem value="false" />
									</FormControl>
									<FormLabel className="font-normal">No</FormLabel>
								</FormItem>
							</RadioGroup>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="trainingStyles"
				render={({ field }) => (
					<FormItem>
						<FormLabel>
							What training styles do you do today or are you most interested in offering in the future?
						</FormLabel>
						<FormControl>
							<div className="flex gap-4 py-2 flex-wrap">
								{['1-1-live-virtual-coaching', 'online-program-based-coaching'].map((option) => (
									<Badge
										key={option}
										variant={field.value.includes(option) ? 'default' : 'outline'}
										className="p-1 cursor-pointer"
										onClick={() =>
											field.onChange(
												field.value.includes(option)
													? field.value.filter((item) => item !== option)
													: [...field.value, option],
											)
										}
									>
										{option}
									</Badge>
								))}
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default QuestionnaireStep;
