import { Typography } from '@workspace/ui/components';
import React from 'react';
import { muscles } from './data';
import Image from 'next/image';

const MusclesSection = () => {
	const muscleArr = muscles.docs;
	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Muscle
			</Typography>
			<div className="flex flex-wrap gap-x-4 md:gap-x-5 gap-y-7 md:gap-y-9">
				{muscleArr.map((muscle) => {
					const { muscleName, muscleGraphic, id, muscleLabelColor, exercisesCount } = muscle;
					const { url, alt, width, height } = muscleGraphic;
					return (
						<div key={id} className="flex gap-3.5 items-center w-[163px] md:w-[245px]">
							<div style={{ backgroundColor: muscleLabelColor }} className={`p-2.5 rounded-full`}>
								<Image width={width} height={height} src={url} alt={alt} className="w-full h-full object-cover" />
							</div>

							<div className="flex flex-col gap-1.5">
								<Typography as="h4" sizeVariant="small" className="tracking-[-0.1px] leading-[24px]">
									{muscleName}
								</Typography>
								<Typography as="p" sizeVariant="small" className="tracking-[-0.09px] leading-[20px] text-charcoal-gray whitespace-nowrap">
									{exercisesCount} Excercise
								</Typography>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MusclesSection;
