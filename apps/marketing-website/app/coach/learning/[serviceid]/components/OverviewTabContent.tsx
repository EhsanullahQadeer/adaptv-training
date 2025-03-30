import FAQsSection from '@/components/FAQsSection';
import { FAQItem } from '@/types/faq';
import { Typography } from '@workspace/ui/components';
import React from 'react';

interface Props {
	category: BlogCategory;
	title: string;
	faq?: FAQItem[];
}

const OverviewTabContent = (props: Props) => {
	const { category, title, faq } = props;
	const { categoryName, labelColor } = category;
	return (
		<div>
			<span className="px-[6px] w-fit items-center py-[4px] mb-3 bg-[#E8E8E8] flex gap-1 rounded-md">
				<span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: labelColor }}></span>
				<Typography as={'caption'} fontWeight="font-medium" sizeVariant="small" className="text-xs font-medium">
					{categoryName}
				</Typography>
			</span>

			<div className="mt-2">
				<Typography
					as="h4_2"
					fontWeight="font-semibold"
					className="max-md:text-[28px] tracking-[-1.12px] md:tracking-[-1.28px]"
				>
					{title}
				</Typography>
			</div>

			<div className="mt-4 md:mt-8">learning content body will be here...</div>

			{faq && faq.length && (
				<div className="mt-6 md:mt-8">
					<FAQsSection {...{ isBlogPage: true, FAQsArr: faq }} />
				</div>
			)}
		</div>
	);
};

export default OverviewTabContent;
