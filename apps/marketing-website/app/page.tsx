import { fetchCoachLearningResources } from '@/lib/services/cmsService';
import { Typography } from '@workspace/ui/components';

export default async function Home() {
	try {
		const response = await fetchCoachLearningResources();
		console.log('response: ', response);
	} catch (error) {
		// console.log('error: ', error);
	}
	return (
		<div>
			<Typography as="h5">hellow</Typography>
		</div>
	);
}
