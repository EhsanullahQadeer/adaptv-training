'use client';
import React from 'react';
import { Typography } from '@workspace/ui/components';
import { MinusCircular, PlusCircular } from '@workspace/ui/icons';
import { useState } from 'react';
import type { FAQItem as FAQItemType } from '@/types/faq';

interface Props {
	faq: FAQItemType;
	isBlogPage?: boolean;
}

const FAQItem = (props: Props) => {
	const { faq, isBlogPage = false } = props;
	const { question, answer } = faq;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className={`p-4 ${isBlogPage ? 'md:p-2.5' : 'md:p-6'} rounded-[14px] bg-pale-azure cursor-pointer`}
		>
			<div className="flex justify-between items-center gap-8">
				<Typography
					color="text-black"
					as={'span'}
					className={
						isBlogPage
							? 'text-[16px] md:text-[16px] tracking-[-0.08px] md:tracking-[-0.16px] leading-[22px] md:leading-normal font-medium md:font-semibold'
							: ''
					}
				>
					{question}
				</Typography>

				<div className="w-6 h-6 relative text-lightLime">
					<div
						className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
							isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
						}`}
					>
						<MinusCircular height={isBlogPage ? 16 : 24} width={isBlogPage ? 16 : 24} />
					</div>
					<div
						className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
							isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
						}`}
					>
						<PlusCircular height={isBlogPage ? 16 : 24} width={isBlogPage ? 16 : 24} />
					</div>
				</div>
			</div>
			<div
				className={`max-w-[544px] overflow-hidden transition-all duration-300 ${
					isOpen ? 'max-h-40 mt-2.5' : 'max-h-0 mt-0'
				}`}
			>
				<Typography color="text-slate-gray" as={'span_secondary'}>
					{answer}
				</Typography>
			</div>
		</div>
	);
};

export default FAQItem;
