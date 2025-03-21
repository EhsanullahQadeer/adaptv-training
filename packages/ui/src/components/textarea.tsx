'use client';
import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

interface TextareaProps extends React.ComponentProps<'textarea'> {
	maxLength?: number;
	showRemainingText?: boolean;
	value?: string;
	onTextChange?: (text: string) => void;
}

function Textarea({
	className,
	maxLength,
	showRemainingText = false,
	value = '',
	onTextChange,
	onChange,
	...props
}: TextareaProps) {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		if (onTextChange) {
			onTextChange(newValue);
		}
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<div className="flex flex-col gap-3">
			<div>
				<textarea
					data-slot="textarea"
					className={cn(
						'border-input placeholder:text-muted-foreground focus-visible:border-ring  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-lg border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
						className,
					)}
					maxLength={maxLength}
					value={value}
					onChange={handleChange}
					{...props}
				/>
			</div>
			{showRemainingText && maxLength && (
				<div className="text-right text-xs text-neutral-foreground">
					{value.length}/{maxLength}
				</div>
			)}
		</div>
	);
}

export { Textarea };
