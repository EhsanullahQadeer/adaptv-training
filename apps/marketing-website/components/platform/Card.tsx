import { Typography } from '@workspace/ui/components';
import Image from 'next/image';
import { Button } from '@workspace/ui/components';

interface CardProps {
	title: string;
	description: string;
	buttonText: string;
	image: string;
	reverse?: boolean;
	textSectionProps?: string;
	leftSideWrapProps?: string;
	rightSideWrapProps?: string;
	handleButton?: () => void;
}

const Card: React.FC<CardProps> = ({
	title,
	description,
	buttonText,
	image,
	reverse = false,
	textSectionProps = '',
	leftSideWrapProps = '',
	rightSideWrapProps = '',
	handleButton,
}) => {
	return (
		<div
			className={`bg-pale-azure rounded-2xl md:rounded-3xl w-full flex flex-col sm:flex-row sm:items-center justify-between md:h-[450px] gap-3`}
		>
			{/* Left content */}
			<div className={`flex-1 ${leftSideWrapProps}`}>
				{!reverse && (
					<div className={textSectionProps}>
						<Typography as={'h3'} className="mb-2.5">
							{title}
						</Typography>
						<Typography as={'p_secondary'} className="text-slate-gray md:text-lg">
							{description}
						</Typography>
						<div className="mt-8">
							<Button onClick={handleButton} size="xl" type="button">
								{buttonText}
							</Button>
						</div>
					</div>
				)}
				{reverse && (
					<Image
						width={1000}
						height={500}
						className={`w-full h-full object-cover`}
						src={image}
						alt={title.replace(/\s+/g, '_').toLowerCase()}
					/>
				)}
			</div>

			{/* Right content */}
			<div className={`flex-1 ${rightSideWrapProps}`}>
				{reverse && (
					<div className={textSectionProps}>
						<Typography as={'h3'} className="mb-2.5">
							{title}
						</Typography>
						<Typography as={'p_secondary'} className="text-slate-gray md:text-lg">
							{description}
						</Typography>
						<div className="mt-8">
							<Button onClick={handleButton} size="xl" type="button">
								{buttonText}
							</Button>
						</div>
					</div>
				)}
				{!reverse && (
					<Image
						width={1000}
						height={500}
						className={`w-full h-full object-cover`}
						src={image}
						alt={title.replace(/\s+/g, '_').toLowerCase()}
					/>
				)}
			</div>
		</div>
	);
};

export default Card;
