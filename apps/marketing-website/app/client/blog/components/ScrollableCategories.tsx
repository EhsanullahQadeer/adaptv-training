'use client';

import { useRef, useState, useEffect } from 'react';
import { IconSlide } from '@workspace/ui/icons';

interface ScrollableCategoriesProps {
	categoriesArr: BlogCategory[];
	onCategoryChange: (categoryId: string) => void;
}

const ScrollableCategories: React.FC<ScrollableCategoriesProps> = ({ categoriesArr, onCategoryChange }) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [showLeftButton, setShowLeftButton] = useState(false);
	const [showRightButton, setShowRightButton] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	// Handle category selection
	const handleCategorySelection = (categoryId: string) => {
		setSelectedCategory(categoryId);
		onCategoryChange(categoryId);
	};

	const scroll = (direction: 'left' | 'right') => {
		if (scrollRef.current) {
			const scrollAmount = 200;
			scrollRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	const checkScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setShowLeftButton(scrollLeft > 0);
			setShowRightButton(scrollLeft + clientWidth < scrollWidth);
		}
	};

	useEffect(() => {
		const ref = scrollRef.current;
		if (ref) {
			ref.addEventListener('scroll', checkScroll);
			checkScroll();
		}
		return () => ref?.removeEventListener('scroll', checkScroll);
	}, []);

	return (
		<div className="relative mt-10 mx-auto flex items-center w-full">
			{showLeftButton && (
				<button onClick={() => scroll('left')} className="absolute left-0 z-10 bg-white p-2 shadow-md rounded-full">
					<IconSlide className="rotate-180" />
				</button>
			)}

			<div ref={scrollRef} className="flex items-center gap-4 max-w-[1065px] overflow-x-auto py-2 no-scrollbar">
				{categoriesArr.map((category) => (
					<div
						key={category.id}
						onClick={() => handleCategorySelection(category.id)}
						className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md border cursor-pointer ${
							selectedCategory === category.id || (category.id === 'All' && selectedCategory === '') // Highlight 'All' if selectedCategory is empty
								? 'bg-gray-300 border-black'
								: 'border-gray-400 hover:bg-gray-100'
						}`}
					>
						<span style={{ backgroundColor: '#9A38A6' }} className="w-2 h-2 rounded-full"></span>
						<span className="text-sm font-medium">{category.categoryName}</span>
					</div>
				))}
			</div>

			{showRightButton && (
				<button onClick={() => scroll('right')} className="absolute right-0 z-10 bg-white p-2 shadow-md rounded-full">
					<IconSlide />
				</button>
			)}
		</div>
	);
};

export default ScrollableCategories;
