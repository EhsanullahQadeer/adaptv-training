import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { multiSelectVariants } from '../components/multi-select';

export interface MultiSelectProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof multiSelectVariants> {
	options: {
		label: string;
		value: string;
		icon?: React.ComponentType<{ className?: string }>;
	}[];
	onValueChange: (value: string[]) => void;
	defaultValue?: string[];
	placeholder?: string;
	animation?: number;
	maxCount?: number;
	modalPopover?: boolean;
	asChild?: boolean;
	className?: string;
	showBadgeBorder?: boolean;
	showCrossIcon?: boolean;
	showSelectAll?: boolean;
}
