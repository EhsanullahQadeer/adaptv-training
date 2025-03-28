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
	icon?: React.ReactNode;
	rotateIcon?: boolean;
	popoverContentProps?: React.ComponentProps<typeof PopoverContent>;
	popoverClassName?: string;
	value?: string;
	onValueChange?: (value: string) => void;
}

export function Combobox({
	options,
	placeholder = 'Select an option...',
	noOptionsMessage = 'No options found.',
	onSelect,
	buttonClassName = 'w-[200px] justify-between',
	icon = <ChevronsUpDown />,
	rotateIcon = true,
	popoverContentProps,
	popoverClassName,
	value: controlledValue,
	onValueChange,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [internalValue, setInternalValue] = React.useState('');
	const [searchTerm, setSearchTerm] = React.useState('');

	const isControlled = controlledValue !== undefined;
	const value = isControlled ? controlledValue : internalValue;

	// Filtered options based on search input
	const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleSelect = (currentValue: string) => {
		const newValue = currentValue === value ? '' : currentValue;
		if (!isControlled) {
			setInternalValue(newValue);
		}
		onValueChange?.(newValue);
		onSelect?.(newValue);
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
								rotateIcon && open ? 'rotate-180' : 'rotate-0',
							)}
						>
							{icon}
						</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn('w-[200px] p-0', popoverClassName)} {...popoverContentProps}>
				<Command>
					<CommandInput
						className="border-none"
						placeholder="Search..."
						value={searchTerm}
						onValueChange={setSearchTerm}
					/>
					<CommandList>
						<CommandEmpty>{noOptionsMessage}</CommandEmpty>
						<CommandGroup>
							{filteredOptions.map((option) => (
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
