import { clientCarousel, coachCarousel } from '@/lib/public-assets-paths';

const { createAccountImg, profileImg, startTrainingImg } = clientCarousel;

const { applyOnlineImg, verificationInterviewImg, profileSetupImg, startCoachingImg } = coachCarousel;

export const stepsData = [
	{
		title: 'Apply Online',
		description:
			'Fill out a short application with your coaching background, experience, and the services you’d like to offer. This helps us understand your expertise and how you can best serve trainees.',
		imageSrc: applyOnlineImg,
		stepNumber: 1,
		showButton: true,
		buttonText: 'Become a Coach',
	},
	{
		title: 'Verification & Interview',
		description:
			'Our team will carefully review your application and reach out via email to schedule a brief call. This is your chance to ask questions and ensure AdaptvTraining is the right fit for you.',
		imageSrc: verificationInterviewImg,
		stepNumber: 2,
		showButton: true,
		buttonText: 'Become a Coach',
	},
	{
		title: 'Profile Setup',
		description:
			'Once approved, you’ll receive an email confirmation and access to set up your coaching profile. Customize your services, pricing, and availability to attract the clients.',
		imageSrc: profileSetupImg,
		stepNumber: 3,
		showButton: true,
		buttonText: 'Become a Coach',
	},
	{
		title: 'Start Coaching!',
		description:
			'When your profile goes live, you can begin scheduling sessions, connecting with clients, and making an impact. Start building your fitness business today!',
		imageSrc: startCoachingImg,
		stepNumber: 4,
		showButton: true,
		buttonText: 'Become a Coach',
	},
];

export const clientsData = [
	{
		stepNumber: 1,
		title: 'Create your new account',
		description: 'Enter your name, email, and birthdate to get started in just a few clicks.',
		imageSrc: createAccountImg,
		buttonText: 'Join the Waitlist',
		showButton: true,
	},
	{
		stepNumber: 2,
		title: 'Personalize your Profile',
		description: 'Set up your fitness preferences and goals to match with the right trainers.',
		imageSrc: profileImg,
		buttonText: 'Join the Waitlist',
		showButton: true,
	},
	{
		stepNumber: 3,
		title: 'Start training with Adaptv',
		description: 'Join expert-led sessions tailored to your needs and start making progress today!',
		imageSrc: startTrainingImg,
		buttonText: 'Join the Waitlist',
		showButton: true,
	},
];
