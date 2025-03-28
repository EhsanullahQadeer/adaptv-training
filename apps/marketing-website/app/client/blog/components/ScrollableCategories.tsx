'use client';
import { IconSlide } from '@workspace/ui/icons';
import { useRef, useState, useEffect } from 'react';

interface ScrollableCategoriesProps {
	categoriesArr: BlogCategory[];
}

const ScrollableCategories: React.FC<ScrollableCategoriesProps> = ({ categoriesArr }) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [showLeftButton, setShowLeftButton] = useState(false);
	const [showRightButton, setShowRightButton] = useState(true);

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
				<div className="absolute left-0 z-10 w-[140px] h-[44px] bg-gradient-to-r from-white to-[#FFFFFF00]">
					<button
						onClick={() => scroll('left')}
						className="w-fit flex border border-[#BBBBBB] justify-self-start items-center bg-white rounded-full shadow-md p-2"
					>
						<IconSlide className="rotate-180" />
					</button>
				</div>
			)}

			<div
				ref={scrollRef}
				className="flex items-center gap-4 max-w-[1065px] overflow-x-auto whitespace-nowrap py-2 no-scrollbar"
				style={{
					scrollbarWidth: 'none',
					msOverflowStyle: 'none',
					scrollBehavior: 'smooth',
				}}
			>
				<span className="bg-white rounded-full px-4 py-2 shadow-md border border-black cursor-pointer">All</span>
				{categoriesArr.map((category, index) => {
					const { categoryName } = category;
					return (
						<div
							key={index}
							className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-400 cursor-pointer hover:bg-gray-100"
						>
							<span style={{ backgroundColor: '#9A38A6' }} className={`w-2 h-2 rounded-full `}></span>

							<span className="text-sm font-medium">{categoryName}</span>
						</div>
					);
				})}
			</div>

			{showRightButton && (
				<div className="absolute right-0 z-10 w-[150px] h-[44px] bg-gradient-to-l from-white to-[#FFFFFF00]">
					<button
						onClick={() => scroll('right')}
						className="w-fit flex self-end justify-self-end border border-[#BBBBBB] items-center bg-white rounded-full shadow-md p-2"
					>
						<IconSlide />
					</button>
				</div>
			)}
		</div>
	);
};

export default ScrollableCategories;
