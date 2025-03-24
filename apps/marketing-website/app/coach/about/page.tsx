import AboutPageView from '@/components/about/AboutPageView';

export default function Page() {
	return (
		<>
			<AboutPageView
				{...{ pageHeading: 'Empowering Coaches. Transforming Fitness.', headingMaxWidth: 'max-w-[700px]' }}
			/>
		</>
	);
}
