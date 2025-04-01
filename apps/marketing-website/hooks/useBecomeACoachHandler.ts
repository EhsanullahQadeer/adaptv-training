import { useAppContext } from '@/lib/context/AppContext';
import { toast } from '@workspace/ui/components/sonner';
import { useRouter } from 'next/navigation';

export const useBecomeACoachHandler = () => {
	const { siteConfig } = useAppContext();
	const router = useRouter();

	const onBecomeACoachClick = () => {
		if (siteConfig.acceptCoachApplications) {
			router.push('/coach/registration');
		} else {
			toast.info('We are currently not accepting applications. Please check back later.', {
				position: 'top-right',
			});
		}
	};

	return { onBecomeACoachClick };
};
