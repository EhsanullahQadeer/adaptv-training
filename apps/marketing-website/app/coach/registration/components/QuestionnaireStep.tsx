import { Badge, RadioGroup, Textarea } from '@workspace/ui/components';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@workspace/ui/components/form';
import { RadioGroupItem } from '@workspace/ui/components/radio-group';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
interface PersonalInfoStepProps {
	form: UseFormReturn<CoachFormValues>;
}

const fields: { name: keyof CoachFormValues; label: string; placeholder: string }[] = [
	{
		name: 'purpose',
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
				name="interested"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Are you interested in becoming an AdaptvTraining Athlete? </FormLabel>
						<FormControl>
							<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 py-2">
								<FormItem className="flex items-center space-x-3 space-y-0">
									<FormControl>
										<RadioGroupItem value="yes" />
									</FormControl>
									<FormLabel className="font-normal">Yes</FormLabel>
								</FormItem>
								<FormItem className="flex items-center space-x-3 space-y-0">
									<FormControl>
										<RadioGroupItem className="" value="mentions" />
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
				name="trainingStyle"
				render={({ field }) => (
					<FormItem>
						<FormLabel>
							What training styles do you do today or are you most interested in offering in the future?
						</FormLabel>
						<FormControl>
							<div className="flex gap-4 py-2 flex-wrap">
								{[
									'Online Program-Based Coaching',
									'1-1 Live Virtual Coaching',
									'In-Person Training',
									'Virtual Group Classes',
								].map((option) => (
									<Badge
										key={option}
										variant={field.value === option ? 'default' : 'outline'}
										className="p-1 cursor-pointer"
										onClick={() => field.onChange(option)}
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
