import { useRouter } from 'next/navigation';

export const determineBgColor = (pathname: string): string => {
	if (pathname === '/client/exercise-library') {
		return 'bg-black';
	}
	return 'bg-white';
};

export const handleRoleChange = (
	value: string,
	setSelectedRole: (value: string) => void,
	router: ReturnType<typeof useRouter>,
) => {
	setSelectedRole(value);
	router.push(value === 'client' ? '/client' : '/coach');
};
