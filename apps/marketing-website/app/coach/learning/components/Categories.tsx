'use client';
import React, { useState } from 'react';
import { Typography } from '@workspace/ui/components';
import CountChip from './CountChip';
import { Combobox } from '@workspace/ui/components/combobox';
import ArrowDown from '@workspace/ui/icons/ArrowDown';

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

interface IProps {
	categoriesArr: LearningPostCategory[];
}
const Categories = (props: IProps) => {
	const { categoriesArr } = props;
	const [selectedCategory, setSelectedCategory] = useState<LearningPostCategory | null>(null);

	const handleCategorySelection = (category: LearningPostCategory) => {
		setSelectedCategory(category);
	};

	return (
		<div>
			{/* Small screen */}
			<div className="block lg:hidden">
				<Combobox
					rotateIcon
					icon={<ArrowDown />}
					buttonClassName="w-full rounded-[10px] justify-between"
					placeholder="All Resource"
					options={categoriesArr}
				/>
			</div>

			{/* Large screen */}
			<div className="hidden lg:block">
				<div className="px-2.5 py-3 border rounded-[10px] flex justify-between items-center">
					<Typography fontWeight="font-semibold" sizeVariant="large" as="p_caption">
						{selectedCategory ? selectedCategory.categoryName : 'All Resource'}
					</Typography>
					<CountChip />
				</div>

				{categoriesArr.map((category: LearningPostCategory) => {
					const { categoryName, id } = category;
					return (
						<div
							onClick={() => handleCategorySelection(category)}
							key={id}
							className="flex gap-3.5 cursor-pointer items-center justify-between py-3 px-2.5"
						>
							<div className="flex gap-2 items-center">
								<div style={{ backgroundColor: '#9A38A6' }} className="h-[9px] w-[9px] rounded-full" />
								<Typography fontWeight="font-semibold" sizeVariant="large" as="p_caption" color="text-dim-gray">
									{categoryName}
								</Typography>
							</div>
							<CountChip />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
