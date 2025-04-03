import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
	leftAdornment?: React.ReactNode;
	rightAdornment?: React.ReactNode;
}

function Input({ className, type, leftAdornment, rightAdornment, ...props }: InputProps) {
	return (
		<div className={cn('relative flex items-center w-full')}>
			{leftAdornment && <div className="absolute inset-y-0 left-0 flex items-center pl-3">{leftAdornment}</div>}
			<input
				type={type}
				data-slot="input"
				className={cn(
					'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-lg border bg-transparent px-3 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
					'focus-visible:border-ring ',
					'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
					leftAdornment && 'pl-10',
					rightAdornment && 'pr-10',
					className,
				)}
				{...props}
			/>
			{rightAdornment && <div className="absolute inset-y-0 right-0 flex items-center pr-3">{rightAdornment}</div>}
		</div>
	);
}

export { Input };
