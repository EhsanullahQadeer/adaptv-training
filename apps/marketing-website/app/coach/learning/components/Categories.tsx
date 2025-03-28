'use client';
import React, { useState } from 'react';
import { Typography } from '@workspace/ui/components';
import CountChip from './CountChip';
import { Combobox } from '@workspace/ui/components/combobox';
import ArrowDown from '@workspace/ui/icons/ArrowDown';
import { CoachLearningResourceCategory } from '@/types/coach';

interface IProps {
	categoriesArr: CoachLearningResourceCategory[];
}

const Categories = (props: IProps) => {
	const { categoriesArr } = props;
	const [selectedCategory, setSelectedCategory] = useState<CoachLearningResourceCategory | null>(null);

	const handleCategorySelection = (category: CoachLearningResourceCategory) => {
		setSelectedCategory(category);
	};

	// Convert categories into options format for Combobox
	const categoryOptions = categoriesArr.map((category) => ({
		value: category.id.toString(),
		label: category.categoryName,
	}));

	return (
		<div>
			{/* Small screen */}
			<div className="block sm:hidden">
				<Combobox
					rotateIcon
					icon={<ArrowDown />}
					buttonClassName="w-full rounded-[10px] justify-between"
					placeholder="All Resource"
					options={categoryOptions}
					value={selectedCategory ? selectedCategory.id.toString() : ''}
					onValueChange={(selectedValue) => {
						const selected = categoriesArr.find((cat) => cat.id.toString() === selectedValue);
						if (selected) handleCategorySelection(selected);
					}}
				/>
			</div>

			{/* Large screen */}
			<div className="hidden sm:block">
				<div className="px-2.5 py-3 border rounded-[10px] flex justify-between items-center">
					<Typography fontWeight="font-semibold" sizeVariant="large" as="p_caption">
						{selectedCategory ? selectedCategory.categoryName : 'All Resource'}
					</Typography>
					<CountChip />
				</div>

				{categoriesArr.map((category) => {
					const { categoryName, id } = category;
					return (
						<div
							onClick={() => handleCategorySelection(category)}
							key={id}
							className={`flex gap-3.5 cursor-pointer items-center justify-between py-3 px-2.5 ${
								selectedCategory?.id === id ? 'bg-gray-200' : ''
							}`}
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
