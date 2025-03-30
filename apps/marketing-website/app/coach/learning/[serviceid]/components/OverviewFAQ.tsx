'use client';
import React from 'react';
import { useState } from 'react';
import OverviewTabContent from './OverviewTabContent';
import { FAQItem } from '@/types/faq';
import FAQsSection from '@/components/FAQsSection';

interface Props {
	category: BlogCategory;
	title: string;
	faq?: FAQItem[];
}

const OverviewFAQ = (props: Props) => {
	const { category, title, faq } = props;
	const [selectedTab, setSelectedTab] = useState('overview');

	return (
		<div>
			<div className="flex items-center border-b border-shadow-mist">
				<span
					className={`flex-1 cursor-pointer py-[14px] px-[16px] font-semibold  text-center text-black border-b-2 ${
						selectedTab === 'overview' ? 'border-black ' : 'border-transparent '
					}`}
					onClick={() => setSelectedTab('overview')}
				>
					Overview
				</span>
				{faq && faq.length && (
					<span
						className={`flex-1 cursor-pointer py-[14px] text-center font-semibold text-black px-[16px] border-b-2 ${
							selectedTab === 'faq' ? 'border-black ' : 'border-transparent '
						}`}
						onClick={() => setSelectedTab('faq')}
					>
						FAQ
					</span>
				)}
			</div>
			<div className="mt-6 md:mt-8">
				{selectedTab === 'overview' && <OverviewTabContent {...{ category, title, faq }} />}
				{selectedTab === 'faq' && <FAQsSection {...{ isBlogPage: true, FAQsArr: faq }} />}
			</div>
		</div>
	);
};

export default OverviewFAQ;
