// src/components/multi-select.tsx

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { CheckIcon, XCircle, ChevronDown, XIcon, WandSparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button, ButtonColorType } from './button';
import { Badge } from './badge';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command';
import { MultiSelectProps } from '../types/multi-select-types';

/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */
export const multiSelectVariants = cva(
	'm-1 text-base font-normal transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
	{
		variants: {
			variant: {
				default: 'border-foreground/10 text-foreground bg-card hover:bg-card/80',
				secondary: 'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				inverted: 'inverted',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);


export const MultiSelect = ({
	options,
	onValueChange,
	variant,
	defaultValue = [],
	placeholder = 'Select options',
	animation = 0,
	maxCount = 3,
	modalPopover = false,
	asChild = false,
	className,
	showBadgeBorder = false,
	showCrossIcon = false,
	showSelectAll = false,
	color = '',
	...props
}: MultiSelectProps) => {
	const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue);
	const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
	const [isAnimating, setIsAnimating] = React.useState(false);

	const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsPopoverOpen(true);
		} else if (event.key === 'Backspace' && !event.currentTarget.value) {
			const newSelectedValues = [...selectedValues];
			newSelectedValues.pop();
			setSelectedValues(newSelectedValues);
			onValueChange(newSelectedValues);
		}
	};

	const toggleOption = (option: string) => {
		const newSelectedValues = selectedValues.includes(option)
			? selectedValues.filter((value) => value !== option)
			: [...selectedValues, option];
		setSelectedValues(newSelectedValues);
		onValueChange(newSelectedValues);
	};

	const handleClear = () => {
		setSelectedValues([]);
		onValueChange([]);
	};

	const handleTogglePopover = () => {
		setIsPopoverOpen((prev) => !prev);
	};

	const clearExtraOptions = () => {
		const newSelectedValues = selectedValues.slice(0, maxCount);
		setSelectedValues(newSelectedValues);
		onValueChange(newSelectedValues);
	};

	const toggleAll = () => {
		if (selectedValues.length === options.length) {
			handleClear();
		} else {
			const allValues = options.map((option) => option.value);
			setSelectedValues(allValues);
			onValueChange(allValues);
		}
	};

	return (
		<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
			<PopoverTrigger className="w-full" asChild={asChild}>
				<Button
					{...props}
					onClick={handleTogglePopover}
					className={cn(
						'flex w-full overflow-hidden py-2.5 px-3 rounded-md border border-input min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
						className,
					)}
					color={color as ButtonColorType}
				>
					{selectedValues.length > 0 ? (
						<div className="flex justify-between items-center w-full overflow-hidden">
							<div className="flex items-center flex-1 min-w-0 overflow-hidden !shrink-1">
								{selectedValues.slice(0, maxCount).map((value) => {
									const option = options.find((o) => o.value === value);
									const IconComponent = option?.icon;
									return (
										<Badge
											key={value}
											className={cn(
												'flex items-center truncate overflow-hidden !shrink-1 max-w-full',
												isAnimating ? 'animate-bounce' : '',
												multiSelectVariants({ variant }),
												showBadgeBorder ? 'border' : 'border-none m-0',
											)}
											style={{ animationDuration: `${animation}s` }}
										>
											{IconComponent && <IconComponent className="h-4 w-4 mr-2 flex-shrink-0" />}
											<span className="truncate flex-1 min-w-0">{option?.label}</span>
											{showCrossIcon && (
												<XCircle
													className="ml-2 h-4 w-4 cursor-pointer flex-shrink-0"
													onClick={(event) => {
														event.stopPropagation();
														toggleOption(value);
													}}
												/>
											)}
										</Badge>
									);
								})}
								{selectedValues.length > maxCount && (
									<Badge
										className={cn(
											'bg-transparent ml-2 !min-w-5 p-0 !text-xs !m-0 text-foreground border-foreground/1 hover:bg-transparent',
											isAnimating ? 'animate-bounce' : '',
											multiSelectVariants({ variant }),
											showBadgeBorder ? 'border' : 'border-none',
										)}
										style={{ animationDuration: `${animation}s` }}
									>
										{`+ ${selectedValues.length - maxCount}`}
										{showCrossIcon && (
											<XCircle
												className="ml-2 h-4 w-4 cursor-pointer"
												onClick={(event) => {
													event.stopPropagation();
													clearExtraOptions();
												}}
											/>
										)}
									</Badge>
								)}
							</div>
							<div className="flex items-center justify-between flex-shrink-0">
								<span className="bg-muted-gray rounded-full mx-2 h-4 cursor-pointer p-0.5">
									<XIcon
										className="text-background !h-full !w-full"
										onClick={(event) => {
											event.stopPropagation();
											handleClear();
										}}
									/>
								</span>
								<ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground" />
							</div>
						</div>
					) : (
						<div className="flex items-center justify-between w-full mx-auto">
							<span className="text-base font-normal text-muted-foreground mx-3 truncate">{placeholder}</span>
							<ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
						</div>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start" onEscapeKeyDown={() => setIsPopoverOpen(false)}>
				<Command>
					<CommandInput placeholder="Search..." onKeyDown={handleInputKeyDown} />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{showSelectAll && (
								<CommandItem key="all" onSelect={toggleAll} className="cursor-pointer">
									<div
										className={cn(
											'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
											selectedValues.length === options.length
												? 'bg-primary text-primary-foreground'
												: 'opacity-50 [&_svg]:invisible',
										)}
									>
										<CheckIcon className="h-4 w-4" />
									</div>
									<span>(Select All)</span>
								</CommandItem>
							)}
							{options.map((option) => {
								const isSelected = selectedValues.includes(option.value);
								return (
									<CommandItem
										key={option.value}
										onSelect={() => toggleOption(option.value)}
										className="cursor-pointer flex items-center"
									>
										<div
											className={cn(
												'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary flex-shrink-0',
												isSelected ? 'bg-background text-primary-foreground' : 'opacity-50 [&_svg]:invisible',
											)}
										>
											<CheckIcon className="h-4 w-4" />
										</div>
										{option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />}
										<span className="truncate overflow-hidden min-w-0 flex-1">{option.label}</span>
									</CommandItem>
								);
							})}
						</CommandGroup>
						{/* <CommandSeparator />
							<CommandGroup>
								<div className="flex items-center justify-between">
									{selectedValues.length > 0 && (
										<>
											<CommandItem onSelect={handleClear} className="flex-1 justify-center cursor-pointer">
												Clear
											</CommandItem>
											<Separator orientation="vertical" className="flex min-h-6 h-full" />
										</>
									)}
									<CommandItem
										onSelect={() => setIsPopoverOpen(false)}
										className="flex-1 justify-center cursor-pointer max-w-full"
									>
										Close
									</CommandItem>
								</div>
							</CommandGroup> */}
					</CommandList>
				</Command>
			</PopoverContent>
			{animation > 0 && selectedValues.length > 0 && (
				<WandSparkles
					className={cn(
						'cursor-pointer my-2 text-foreground bg-background w-3 h-3',
						isAnimating ? '' : 'text-muted-foreground',
					)}
					onClick={() => setIsAnimating(!isAnimating)}
				/>
			)}
		</Popover>
	);
};

MultiSelect.displayName = 'MultiSelect';
