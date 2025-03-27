'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from './button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface ComboboxProps {
	options: { value: string; label: string }[];
	placeholder?: string;
	noOptionsMessage?: string;
	onSelect?: (value: string) => void;
	buttonClassName?: string;
	icon?: React.ReactNode; // Update to accept ReactNode
	rotateIcon?: boolean; // New prop to control icon rotation
	popoverContentProps?: React.ComponentProps<typeof PopoverContent>; // New prop for PopoverContent
	popoverClassName?: string; // New prop for PopoverContent className
	value?: string; // New prop for controlled value
	onValueChange?: (value: string) => void; // New callback for value change
}

export function Combobox({
	options,
	placeholder = 'Select an option...',
	noOptionsMessage = 'No options found.',
	onSelect,
	buttonClassName = 'w-[200px] justify-between',
	icon = <ChevronsUpDown />, // Use ReactNode directly
	rotateIcon = true, // Default to true
	popoverContentProps, // Destructure the new prop
	popoverClassName, // Destructure the new prop
	value: controlledValue, // Destructure the new controlled value prop
	onValueChange, // Destructure the new callback
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [internalValue, setInternalValue] = React.useState(''); // Internal state for uncontrolled usage

	const isControlled = controlledValue !== undefined; // Determine if the component is controlled
	const value = isControlled ? controlledValue : internalValue; // Use controlled or internal value

	const handleSelect = (currentValue: string) => {
		const newValue = currentValue === value ? '' : currentValue;
		if (!isControlled) {
			setInternalValue(newValue); // Update internal state if uncontrolled
		}
		onValueChange?.(newValue); // Notify parent of value change
		onSelect?.(newValue); // Call the existing onSelect callback
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					color="transLight"
					role="combobox"
					aria-expanded={open}
					className={cn(buttonClassName)}
				>
					{value ? options.find((option) => option.value === value)?.label : placeholder}
					{icon && (
						<span
							className={cn(
								'ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform',
								rotateIcon && open ? 'rotate-180' : 'rotate-0', // Rotate icon if enabled
							)}
						>
							{icon}
						</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn('w-[200px] p-0', popoverClassName)} {...popoverContentProps}>
				{' '}
				{/* Apply the new className prop */}
				<Command>
					<CommandInput className="border-none" placeholder={`Search...`} />
					<CommandList>
						<CommandEmpty>{noOptionsMessage}</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem key={option.value} value={option.value} onSelect={() => handleSelect(option.value)}>
									<Check className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
