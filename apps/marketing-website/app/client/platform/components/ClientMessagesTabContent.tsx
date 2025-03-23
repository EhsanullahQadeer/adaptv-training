import React from 'react';
import { clientMessages } from '@/lib/public-assets-paths';
import Card from '@/components/platform/Card';

const { viewMsgsImg, startChattingImg } = clientMessages;

const sections = [
	{
		title: 'Stay connected with your coaches',
		description:
			'Easily manage and find your conversations based on sessions. Stay in touch and get the guidance you need.',
		buttonText: 'View Messages',
		image: viewMsgsImg,
		reverse: false,
		textSectionProps: 'max-w-[350px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-[75px] md:mr-6 sm:mr-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[463px] sm:self-end',
	},
	{
		title: 'Real-time coaching support',
		description: 'Chat instantly with your coach, ask questions, and stay on track with your fitness journey.',
		buttonText: 'Start Chatting',
		image: startChattingImg,
		reverse: true,
		textSectionProps: 'max-w-[420px]',
		leftSideWrapProps:
			'sm:self-end lg:ml-[42px] md:ml-6 sm:ml-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[375px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
];

const ClientMessagesTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default ClientMessagesTabContent;
