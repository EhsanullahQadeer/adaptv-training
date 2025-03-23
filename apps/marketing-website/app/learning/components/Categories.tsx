import React from 'react';
import { categories } from './Data';
import { Input, Typography } from '@workspace/ui/components';
import CountChip from './CountChip';
import { Combobox } from '@workspace/ui/components/combobox';
import ArrowDown from '@workspace/ui/icons/ArrowDown'; // Import the default export directly

const options = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
];

const Categories = () => {
	return (
		<div>
			<Combobox
				rotateIcon
				icon={<ArrowDown />}
				buttonClassName="w-full rounded-[10px] justify-between"
				{...{ options }}
			/>
			{/* <div className="px-2.5 py-3 border rounded-[10px] flex justify-between items-center">
				<Typography fontWeight="font-semibold" sizeVariant="large" as="p_caption">
					All Resource
				</Typography>
				<CountChip />
			</div>

			<div className="flex gap-3.5 cursor-pointer items-center py-3 px-2.5">
				<div className="flex gap-2 items-center">
					<div style={{ backgroundColor: '#9A38A6' }} className="h-[9px] w-[9px] rounded-full" />
					<Typography fontWeight="font-semibold" sizeVariant="large" as="p_caption">
						Coaching Techniques
					</Typography>
				</div>
				<CountChip />
			</div> */}
		</div>
	);
};

export default Categories;
