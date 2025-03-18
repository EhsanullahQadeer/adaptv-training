import React from 'react';
import Card from './Card';
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
		textSectionProps: 'max-w-[380px]',
		leftSideWrapProps: 'self-end',
	},
	{
		title: 'Real-time conversations',
		description: 'Chat seamlessly with clients, track conversations, and keep them engaged with your coaching.',
		buttonText: 'Send a Message',
		image: realTimeConversations,
		reverse: false,
		textSectionProps: 'max-w-[380px]',
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
