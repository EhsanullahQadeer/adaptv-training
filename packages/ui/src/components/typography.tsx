import { ReactNode, ElementType, CSSProperties, useMemo } from 'react';
import { cn } from '../lib/utils';

interface TypographyVariant {
	base?: string;
	responsive?: string;
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
			small: 'text-[50px] tracking-[-2px]',
			large: 'text-[70px] tracking-[-2.8px]',
		},
		h2: {
			base: 'font-medium',
			responsive: 'text-[43px] md:text-[60px] tracking-[-1.72px] md:tracking-[-3px]',
			small: 'text-[43px] tracking-[-1.72px]',
			large: 'text-[60px] tracking-[-3px]',
		},
		h3: {
			base: 'font-semibold leading-normal',
			responsive: 'text-[26px] md:text-[42px] tracking-[-1.04px] md:tracking-[-1.68px] leading-normal',
			small: 'text-[26px] tracking-[-1.04px]',
			large: 'text-[42px] tracking-[-1.68px]',
		},
		h4: {
			base: 'text-xl font-medium leading-normal',
			responsive: 'text-[20px] md:text-[28px] tracking-[-0.4px] md:tracking-[-0.56px] leading-normal',
			small: 'text-[20px] tracking-[-0.4px]',
			large: 'text-[28px] tracking-[-0.56px]',
		},
		h5: { base: 'text-lg font-medium', small: 'text-[18px]', large: 'text-[24px]' },
		h6: { base: 'text-base font-medium', small: 'text-base', large: 'text-[20px]' },
	},

	body: {
		p: {
			base: 'font-normal',
			responsive:
				'text-[18px] md:text-[24px] tracking-[-0.18px] md:tracking-[-0.24px] leading-[24px] md:leading-[30px]',
			small: 'text-[18px] tracking-[-0.18px] leading-[24px]',
			large: 'text-[24px] tracking-[-0.24px] leading-[30px]',
		},
		p_secondary: {
			base: 'font-normal text-[#475467]',
			responsive: 'text-base md:text-[20px] tracking-[-0.16px] md:tracking-[-0.18px] leading-[132%]',
			small: 'text-base tracking-[-0.16px]',
			large: 'text-[20px] tracking-[-0.18px]',
		},
		span: {
			base: 'font-medium leading-normal',
			responsive: 'text-base md:text-[22px] tracking-[-0.16px] md:tracking-[-0.44px] leading-normal',
			small: 'text-base tracking-[-0.16px]',
			large: 'text-[22px] tracking-[-0.44px]',
		},
		span_secondary: {
			base: 'font-normal tracking-[-0.16px] leading-[132%]',
			responsive: 'text-[14px] md:text-base leading-[132%]',
			small: 'text-[14px]',
			large: 'text-base',
		},
	},

	supportingText: {
		caption: {
			base: 'text-white text-center',
			responsive: 'text-[12px] md:text-base tracking-[-0.12px] md:tracking-[-0.16px]',
			small: 'text-[12px] tracking-[-0.12px]',
			large: 'text-base tracking-[-0.16px]',
		},
		blockquote: { base: 'border-l-4 border-gray-300 pl-4 italic' },
		small: { base: 'text-sm text-gray-600' },
	},
};

// Explicitly type flatTypographyStyles
type FlattenedTypographyStyles = {
	[key: string]: {
		base: string;
		responsive?: string;
		small?: string;
		large?: string;
	};
};

const flatTypographyStyles: FlattenedTypographyStyles = Object.entries(typographyStyles).reduce(
	(acc, [, styles]) => ({ ...acc, ...styles }),
	{},
);

const colorStyles = {
	default: 'text-gray-900',
	muted: 'text-gray-500',
	primary: 'text-blue-600',
	secondary: 'text-purple-600',
	danger: 'text-red-600',
};

const alignStyles = {
	left: '',
	center: 'text-center',
	right: 'text-right',
};

type TypographyVariants = keyof typeof flatTypographyStyles;

type TypographyProps = {
	as?: ElementType;
	className?: string;
	children?: ReactNode;
	fontSize?: `text-${string}`;
	fontWeight?: `font-${string}`;
	lineHeight?: `leading-${string}`;
	letterSpacing?: `tracking-${string}`;
	fontFamily?: `font-${string}`;
	color?: keyof typeof colorStyles | `text-${string}`;
	sizeVariant?: 'small' | 'large' | 'responsive';
	style?: CSSProperties;
	align?: keyof typeof alignStyles;
	uppercase?: boolean;
	truncate?: boolean;
	maxLines?: 1 | 2 | 3 | 'none';
};

export function Typography({
	as: Component = 'p',
	className,
	children,
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
	style,
	sizeVariant = 'responsive',
}: TypographyProps) {
	const asVariant = useMemo(
		() =>
			typeof Component === 'string' &&
			(Object.keys(flatTypographyStyles) as TypographyVariants[]).includes(Component as TypographyVariants)
				? (Component as TypographyVariants)
				: undefined,
		[Component],
	);

	const computedClassName = useMemo(() => {
		const variantStyles = asVariant ? flatTypographyStyles[asVariant] : null;
		const sizeClasses =
			sizeVariant === 'small'
				? variantStyles?.small
				: sizeVariant === 'large'
					? variantStyles?.large
					: variantStyles?.responsive;

		const colorClass = color && (colorStyles[color as keyof typeof colorStyles] || color);

		return cn(
			variantStyles?.base,
			sizeClasses,
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

	return (
		<Component className={computedClassName} style={style}>
			{children}
		</Component>
	);
}
