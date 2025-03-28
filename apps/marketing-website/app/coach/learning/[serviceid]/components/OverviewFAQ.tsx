'use client';
import React from 'react';
import { useState } from 'react';
import OverviewTabContent from './OverviewTabContent';
import { FAQItem } from '@/types/faq';
import FAQsSection from '@/components/FAQsSection';

interface Props {
	categoryName: string;
	title: string;
	faq?: FAQItem[];
}

const OverviewFAQ = (props: Props) => {
	const { categoryName, title, faq } = props;
	const [selectedTab, setSelectedTab] = useState('overview');

	return (
		<div>
			<div className="flex items-center border-b border-shadow-mist">
				<span
					className={`cursor-pointer py-[14px] px-[16px] font-semibold  text-center text-black w-1/2 border-b-2 ${
						selectedTab === 'overview' ? 'border-black ' : 'border-transparent '
					}`}
					onClick={() => setSelectedTab('overview')}
				>
					Overview
				</span>
				<span
					className={`cursor-pointer py-[14px] text-center font-semibold text-black w-1/2 px-[16px] border-b-2 ${
						selectedTab === 'faq' ? 'border-black ' : 'border-transparent '
					}`}
					onClick={() => setSelectedTab('faq')}
				>
					FAQ
				</span>
			</div>
			<div className="mt-6 md:mt-8">
				{selectedTab === 'overview' && <OverviewTabContent {...{ categoryName, title, faq }} />}
				{selectedTab === 'faq' && <FAQsSection {...{ isBlogPage: true, FAQsArr: faq }} />}
			</div>
		</div>
	);
};

export default OverviewFAQ;
