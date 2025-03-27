import React from 'react';
import FAQItem from './FAQItem';
import { Typography } from '@workspace/ui/components';

const faqsArr = [
	{
		question: 'How do I become a coach on AdaptvTraining?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
	},
	{
		question: 'What kind of support will I receive as a coach?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
	},
	{
		question: 'Do I need special certifications to join?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
	},
	{
		question: 'How do I set my rates and create training programs?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
	},
	{
		question: 'Can I coach both online and in-person Clients?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
	},
	{
		question: 'What tools does the platform provide to manage my business?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
	},
];

interface IProps {
	FAQsArr?: FAQItem[];
}

const FAQsSection = (props: IProps) => {
	const { FAQsArr } = props;
	return (
		<div>
			<Typography as={'h3'} align="center">
				Got questions? we’ve got answers
			</Typography>

			<div className="flex flex-col gap-4 mt-8 md:mt-9">
				{FAQsArr?.map((faq, idx) => {
					return (
						<div key={faq.id + idx}>
							<FAQItem {...{ faq }} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FAQsSection;
