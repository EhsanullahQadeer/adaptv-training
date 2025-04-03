'use client';

import React, { useState } from 'react';
import { Button, Input } from '@workspace/ui/components';
import { SearchIcon } from '@workspace/ui/icons';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface SearchProps {
	initialSearchTerm?: string;
	redirectPath?: string;
	className?: string;
	buttonClassName?: string;
	placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
	initialSearchTerm = '',
	redirectPath,
	className = 'bg-white text-base tracking-[-0.08px] leading-[20px] h-[66px] pl-5 border-light-gray rounded-xl shadow-light',
	buttonClassName = 'tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 h-auto',
	placeholder = 'Find an exercise...',
}) => {
	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchClick = () => {
		const currentParams = new URLSearchParams(searchParams.toString());
		currentParams.set('search', searchTerm);

		router.push(`${redirectPath || pathname}?${currentParams.toString()}`);
	};

	return (
		<div className="w-full max-sm:hidden">
			<Input
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder={placeholder}
				className={className}
				rightAdornment={
					<Button onClick={handleSearchClick} type="button" className={buttonClassName}>
						<SearchIcon />
						Search
					</Button>
				}
			/>
		</div>
	);
};

export default Search;
