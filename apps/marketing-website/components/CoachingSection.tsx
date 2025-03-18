import { Typography } from '@workspace/ui/components';
import { ReactNode } from 'react';

interface CoachingFeature {
	title: string;
	icon:ReactNode;
	desc: string;
}

interface CoachingSectionProps {
	heading1: string,
	heading2: string,
	heading3: string,
	features: CoachingFeature[];
}

const CoachingSection = ({ features , heading1 ,heading2 ,heading3}: CoachingSectionProps) => {
	return (
		<div className="my-16 md:my-[120px]">
			<Typography as={'h3'}>
				{heading1}{' '}
				<span className="text-semi-transparent-black">
				{heading2}</span>{' '}
				{heading3}
			</Typography>

			<div className="mt-9 flex gap-5 flex-wrap">
				{features.map((feature, idx) => {
					const { title, icon, desc } = feature;
					return (
						<div
							key={title + idx}
							className="flex-1 min-w-[335px] h-[176px] md:h-[252px] p-4.5 md:p-6 flex flex-col justify-between rounded-3xl bg-white border border-light-gray"
						>
							<div className="w-8 h-8 sm:w-[42px] sm:h-[42px]">{icon}</div>

							<div className="flex flex-col gap-1 md:gap-2">
								<Typography as={'h4'} fontWeight="font-semibold">
									{title}
								</Typography>

								<Typography as={'p_secondary'}>{desc}</Typography>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CoachingSection;
