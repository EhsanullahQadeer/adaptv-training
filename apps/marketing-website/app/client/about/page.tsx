import AboutPageView from '@/components/about/AboutPageView';

export default function Page() {
	return (
		<>
			<AboutPageView
				{...{ pageHeading: 'Transform Your Workouts. Reach Your Goals', headingMaxWidth: 'max-w-[800px]' }}
			/>
		</>
	);
}
