'use client';
import React from 'react';
import { useState } from 'react';
import FAQsSection from '@/components/FAQsSection';
import OverviewTabContent from './OverviewTabContent';
import ProgressionMovements from './ProgressionMovements';
import { Movement } from '@/types/client';

interface Props {
	movement: Movement;
}

const MovementTabs = (props: Props) => {
	const { movement } = props;
	const [selectedTab, setSelectedTab] = useState('overview');

	const { faqs, progressionMovements } = movement;

	return (
		<div>
			<div className="flex items-center border-b border-shadow-mist">
				<span
					className={`flex-1 cursor-pointer py-[14px] px-[16px] font-semibold text-center text-black border-b-2 ${
						selectedTab === 'overview' ? 'border-black ' : 'border-transparent '
					}`}
					onClick={() => setSelectedTab('overview')}
				>
					Overview
				</span>
				{progressionMovements?.length ? (
					<span
						className={`max-md:hidden flex-1 cursor-pointer py-[14px] text-center font-semibold text-black px-[16px] border-b-2 ${
							selectedTab === 'progression' ? 'border-black ' : 'border-transparent '
						}`}
						onClick={() => setSelectedTab('progression')}
					>
						Progression Movements
					</span>
				) : (
					<></>
				)}
				{faqs.length ? (
					<span
						className={`flex-1 cursor-pointer py-[14px] text-center font-semibold text-black px-[16px] border-b-2 ${
							selectedTab === 'faq' ? 'border-black ' : 'border-transparent '
						}`}
						onClick={() => setSelectedTab('faq')}
					>
						FAQ
					</span>
				) : (
					<></>
				)}
			</div>
			<div className="mt-6 md:mt-8">
				{selectedTab === 'overview' && <OverviewTabContent {...{ movement }} />}
				{selectedTab === 'progression' && progressionMovements && <ProgressionMovements {...{ progressionMovements }} />}
				{selectedTab === 'faq' && <FAQsSection {...{ isBlogPage: true, FAQsArr: faqs }} />}
			</div>
		</div>
	);
};

export default MovementTabs;
