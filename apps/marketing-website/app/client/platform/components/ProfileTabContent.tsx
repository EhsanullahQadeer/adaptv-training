import React from 'react';
import { profile } from '@/lib/public-assets-paths';
import Card from '@/components/platform/Card';

const { profileImg } = profile;

const sections = [
	{
		title: 'Customize your profile, your way',
		description: 'Manage your account details, favorite coaches, notifications, and device integrations for a seamless training experience—all in one place.',
		buttonText: 'Update Your Profile',
		image: profileImg,
		reverse: false,
		textSectionProps: 'max-w-[350px]',
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8 sm:my-5',
		rightSideWrapProps: 'mt-5 self-end max-sm:ml-5 max-sm:max-w-[323px] sm:w-[634px]',
	},
];

const ProfileTabContent = () => {
	return (
		<div className="flex flex-col gap-5">
			{sections.map((section, index) => (
				<Card key={index} {...section} />
			))}
		</div>
	);
};

export default ProfileTabContent;
