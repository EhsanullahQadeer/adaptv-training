import React, { ReactNode, ElementType, CSSProperties, useMemo } from 'react';
import type { JSX } from 'react'; // Added import for JSX namespace
import { cn } from '../lib/utils';

interface TypographyVariant {
	base?: string;
	responsive?: string;
	responsive_reverse?: string; // Added new property
	small?: string;
	large?: string;
}

interface TypographyCategory {
	[key: string]: TypographyVariant;
}

interface TypographyStyles {
	headings: TypographyCategory;
	body: TypographyCategory;
	supportingText: TypographyCategory;
}

const typographyStyles: TypographyStyles = {
	headings: {
		h1: {
			base: 'font-semibold leading-[100%]',
			responsive: 'text-[50px] md:text-[70px] tracking-[-2px] md:tracking-[-2.8px] leading-[100%]',
			responsive_reverse: 'md:text-[50px] text-[70px] md:tracking-[-2px] tracking-[-2.8px]', // Added
			small: 'text-[50px] tracking-[-2px]',
			large: 'text-[70px] tracking-[-2.8px]',
		},
		h2: {
			base: 'font-medium leading-[100%]',
			responsive: 'text-[43px] md:text-[60px] tracking-[-1.72px] md:tracking-[-3px] ',
			responsive_reverse: 'md:text-[43px] text-[60px] md:tracking-[-1.72px] tracking-[-3px]', // Added
			small: 'text-[43px] tracking-[-1.72px]',
			large: 'text-[60px] tracking-[-3px]',
		},
		h3: {
			base: 'font-semibold leading-normal',
			responsive: 'text-[26px] md:text-[42px] tracking-[-1.04px] md:tracking-[-1.68px] leading-normal',
			responsive_reverse: 'md:text-[26px] text-[42px] md:tracking-[-1.04px] tracking-[-1.68px]', // Added
			small: 'text-[26px] tracking-[-1.04px]',
			large: 'text-[42px] tracking-[-1.68px]',
		},
		h4: {
			base: 'font-medium leading-normal',
			responsive: 'text-[20px] md:text-[28px] tracking-[-0.4px] md:tracking-[-0.56px] leading-normal',
			responsive_reverse: 'md:text-[20px] text-[28px] md:tracking-[-0.4px] tracking-[-0.56px]',
			small: 'text-[20px] tracking-[-0.4px]',
			large: 'text-[28px] tracking-[-0.56px]',
		},
		h4_2: {
			base: 'font-medium leading-normal',
			responsive: 'text-[20px] md:text-[32px] tracking-[-0.4px] md:tracking-[-0.56px] leading-normal',
			responsive_reverse: 'md:text-[20px] text-[32px]  md:tracking-[-0.4px] tracking-[-0.56px]',
			small: 'text-[20px] tracking-[-0.4px]',
			large: 'text-[32px] tracking-[-0.56px]',
		},
		h5: {
			base: 'text-lg font-medium',
			responsive: 'text-[24px] md:text-[18px]',
			responsive_reverse: 'md:text-[18px] text-[24px]',
			small: 'text-[18px]',
			large: 'text-[24px]',
		},
		h5_2: {
			base: 'font-medium',
			responsive: 'text-[20px] md:text-text-[24px]',
			responsive_reverse: 'md:text-[20px] text-[24px]', // Added
			small: 'text-[20px]',
			large: 'text-[24px]',
		},
		h6: {
			base: 'font-medium',
			responsive: 'text-[16px] md:text-[20px]',
			responsive_reverse: 'md:text-[16px] text-[20px]', // Added
			small: 'text-[16px]',
			large: 'text-[20px]',
		},
	},

	body: {
		p: {
			base: 'font-normal',
			responsive:
				'text-[18px] md:text-[24px] tracking-[-0.18px] md:tracking-[-0.24px] leading-[24px] md:leading-[30px]',
			responsive_reverse:
				'md:text-[18px] text-[24px] md:tracking-[-0.18px] tracking-[-0.24px] md:leading-[24px] leading-[30px]', // Added
			small: 'text-[18px] tracking-[-0.18px] leading-[24px]',
			large: 'text-[24px] tracking-[-0.24px] leading-[30px]',
		},
		p_secondary: {
			base: 'font-normal text-[#475467]',
			responsive: 'text-base md:text-[20px] tracking-[-0.16px] md:tracking-[-0.18px] leading-[132%]',
			responsive_reverse: 'md:text-base text-[20px] md:tracking-[-0.16px] tracking-[-0.18px]', // Added
			small: 'text-base tracking-[-0.16px]',
			large: 'text-[20px] tracking-[-0.18px]',
		},
		p_caption: {
			base: 'text-white',
			responsive: 'text-[12px] md:text-base tracking-[-0.12px] md:tracking-[-0.16px]',
			responsive_reverse: 'md:text-[12px] text-base md:tracking-[-0.12px] tracking-[-0.16px]', // Added
			small: 'text-[12px] tracking-[-0.12px]',
			large: 'text-base tracking-[-0.16px]',
		},
		span: {
			base: 'font-medium leading-normal',
			responsive: 'max-md:text-base md:text-[22px] tracking-[-0.16px] md:tracking-[-0.44px] leading-normal',
			responsive_reverse: 'md:text-base text-[22px] md:tracking-[-0.16px] tracking-[-0.44px]', // Added
			small: 'text-base tracking-[-0.16px]',
			large: 'text-[22px] tracking-[-0.44px]',
		},
		span_secondary: {
			base: 'font-normal tracking-[-0.16px] leading-[132%]',
			responsive: 'text-[14px] md:text-[16px]',
			responsive_reverse: 'md:text-[14px] text-base',
			small: 'text-[14px]',
			large: 'text-base',
		},
	},

	supportingText: {
		blockquote: { base: 'border-l-4 border-gray-300 pl-4 italic' },
		small: { base: 'text-sm text-gray-600' },
	},
};

// Explicitly type flatTypographyStyles
type FlattenedTypographyStyles = {
	[key: string]: {
		base: string;
		responsive?: string;
		responsive_reverse?: string;
		small?: string;
		large?: string;
	};
};

const flatTypographyStyles: FlattenedTypographyStyles = Object.entries(typographyStyles).reduce(
	(acc, [, styles]) => ({ ...acc, ...styles }),
	{},
);

const colorStyles = {
	default: 'text-black',
	mutedGray: 'text-muted-gray',
	primary: 'text-blue-600',
	secondary: 'text-purple-600',
	danger: 'text-red-600',
	light:'text-white',
};

const alignStyles = {
	left: '',
	center: 'text-center',
	right: 'text-right',
};

type TypographyVariants = keyof typeof flatTypographyStyles;

type TypographyProps = {
	as?: TypographyVariants | ElementType;
	className?: string;
	children?: ReactNode;
	fontSize?: `text-${string}`;
	fontWeight?: `font-${string}`;
	lineHeight?: `leading-${string}`;
	letterSpacing?: `tracking-${string}`;
	fontFamily?: `font-${string}`;
	color?: keyof typeof colorStyles | `text-${string}`;
	sizeVariant?: 'small' | 'large' | 'responsive' | 'responsive_reverse';
	style?: CSSProperties;
	align?: keyof typeof alignStyles;
	uppercase?: boolean;
	truncate?: boolean;
	maxLines?: 1 | 2 | 3 | 'none';
};

const tagMapping: Record<string, ElementType> = {
	p_secondary: 'p',
	span_secondary: 'span',
	h5_2: 'h5',
	h4_2: 'h4',
	p_caption: 'p',
	// Add more mappings as needed
};

export function Typography({
	as: Component = 'p',
	className,
	children,
	color = 'default',
	align,
	uppercase,
	truncate,
	maxLines,
	fontSize,
	fontWeight,
	lineHeight,
	letterSpacing,
	fontFamily,
	style,
	sizeVariant = 'responsive',
}: TypographyProps): JSX.Element {
	const asVariant = useMemo(
		() =>
			typeof Component === 'string' &&
			(Object.keys(flatTypographyStyles) as TypographyVariants[]).includes(Component as TypographyVariants)
				? (Component as TypographyVariants)
				: undefined,
		[Component],
	);

	// Map non-standard tags to valid HTML tags
	const mappedComponent = useMemo(() => {
		if (typeof Component === 'string' && tagMapping[Component]) {
			return tagMapping[Component];
		}
		return typeof Component === 'string' || typeof Component === 'function' ? Component : 'p'; // Ensure fallback to 'p'
	}, [Component]);

	const computedClassName = useMemo(() => {
		const variantStyles = asVariant ? flatTypographyStyles[asVariant] : null;
		const sizeClasses =
			sizeVariant === 'small'
				? variantStyles?.small
				: sizeVariant === 'large'
					? variantStyles?.large
					: sizeVariant === 'responsive_reverse' // Added condition
						? variantStyles?.responsive_reverse
						: variantStyles?.responsive;

		const colorClass = color && (colorStyles[color as keyof typeof colorStyles] || color);

		return cn(
			sizeClasses,
			variantStyles?.base,
			colorClass,
			align && alignStyles[align],
			uppercase && 'uppercase',
			truncate && 'truncate',
			maxLines && (maxLines === 'none' ? '' : `line-clamp-${maxLines}`),
			fontSize,
			fontWeight,
			lineHeight,
			letterSpacing,
			fontFamily,
			className,
		);
	}, [
		asVariant,
		color,
		align,
		uppercase,
		truncate,
		maxLines,
		fontSize,
		fontWeight,
		lineHeight,
		letterSpacing,
		fontFamily,
		className,
		sizeVariant,
	]);

	return React.createElement(mappedComponent, { className: computedClassName, style }, children);
}
