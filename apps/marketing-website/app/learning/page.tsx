import ServiceCard from './components/ServiceCard';
import { Typography } from '@workspace/ui/components';
import { imagesPaths } from '@/lib/public-assets-paths';
import Categories from './components/Categories';

const { boy } = imagesPaths;
export const services = [
	{
		category: 'Strength Training',
		title: 'Structuring the Perfect Training Session',
		imageSrc: boy,
		dotColor: '#FF5733',
	},
	{
		category: 'Cardio Fitness',
		title: 'Boost Your Endurance with HIIT Workouts',
		imageSrc: boy,
		dotColor: '#3388FF',
	},
	{
		category: 'Yoga & Flexibility',
		title: 'Achieve Mind-Body Balance with Yoga',
		imageSrc: boy,
		dotColor: '#28A745', // Example color
	},
];

export default function Home() {
	return (
		<div className="mt-8 md:mt-[70px] bg-white">
			<div className="mx-4">
				<div className="max-w-[780px] mb-12 m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Coaching Learning Resources
					</Typography>
					<Typography as={'h5'}>Master virtual training, grow your fitness business.</Typography>
				</div>

				<div className="max-w-[1100px] mx-auto flex sm:flex-row flex-col gap-5">
					<div className="sm:w-[260px] pr-5 border-r border-light-gray">
						<Categories />
					</div>
					<div className="flex sm:justify-left justify-center  gap-3 flex-wrap">
						{services.map((service, index) => (
							<ServiceCard
								key={index}
								category={service.category}
								title={service.title}
								imageSrc={service.imageSrc}
								dotColor={service.dotColor} // Passing the color prop
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
