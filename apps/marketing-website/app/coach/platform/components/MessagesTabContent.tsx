import React from 'react';
import Card from '@/components/platform/Card';
import { messages } from '@/lib/public-assets-paths';

const { connectedClients, realTimeConversations } = messages;

const sections = [
	{
		title: 'Stay connected with your clients',
		description:
			'Manage all your conversations in one place—search messages, check online status, and respond instantly.',
		buttonText: 'Open Messages',
		image: connectedClients,
		reverse: true,
		textSectionProps: 'max-w-[390px]',
		leftSideWrapProps:
			'sm:self-end lg:ml-[50px] md:ml-6 sm:ml-5 mt-5 max-sm:mx-5 max-w-[303px] sm:max-w-[420px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1',
	},
	{
		title: 'Real-time conversations',
		description: 'Chat seamlessly with clients, track conversations, and keep them engaged with your coaching.',
		buttonText: 'Send a Message',
		image: realTimeConversations,
		reverse: false,
		textSectionProps: 'max-w-[380px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
		rightSideWrapProps: 'lg:mr-11 md:mr-6 sm:mr-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[446px]',
	},
];

const MessagesTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default MessagesTabContent;
