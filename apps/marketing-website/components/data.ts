import { imagesPaths } from '@/lib/public-assets-paths';

const { adaptive1, adaptive2, adaptive3, client1, client2, client3 } = imagesPaths;

export const stepsData = [
	{
		title: 'Apply Online',
		description:
			'Fill out a short application with your coaching background, experience, and the services you’d like to offer.',
		imageSrc: adaptive1,
		stepNumber: 1,
		showButton: true,
		buttonText: "Become a Coach"
	},
	{
		title: 'Verification & Interview',
		description: 'Our team will carefully review your application and reach out via email to schedule a brief call.',
		imageSrc: adaptive2,
		stepNumber: 2,
		showButton: true,
		buttonText: "Become a Coach"
	},
	{
		title: 'Profile Setup',
		description: 'Once approved, you’ll receive an email confirmation and access to set up your coaching profile.',
		imageSrc: adaptive3,
		stepNumber: 3,
		showButton: true,
		buttonText: "Become a Coach"
	},
	{
		title: 'Start Coaching!',
		description:
			'When your profile goes live, you can begin scheduling sessions, connecting with clients, and making an impact.',
		imageSrc: adaptive1,
		stepNumber: 4,
		showButton: true,
		buttonText: "Become a Coach"
	},
];

export const clientsData = [
	{
		stepNumber: 1,
		title: 'Create your new account',
		description: 'Sign up to start your fitness journey',
		imageSrc: client1,
		buttonText: 'Join the Waitlist',
		showButton: true,
	},
	{
		stepNumber: 2,
		title: 'Personalize your Profile',
		description: 'Select your fitness preferences and goals to tailor your experience.',
		imageSrc: client2,
		showButton: true,

		buttonText: 'Join the Waitlist',
	},
	{
		stepNumber: 3,
		title: 'Start training with Adapty',
		description: 'Join workouts and connect with expert trainers.',
		imageSrc: client3,
		buttonText: 'Join the Waitlist',
		showButton: true,
	},
];
