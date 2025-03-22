import { Typography } from '@workspace/ui/components';
import React from 'react';
import { movementEquipments } from './data';
import Image from 'next/image';

const EquipmentsSection = () => {
	const equipmentsArr = movementEquipments.docs;
	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Equipment
			</Typography>
			<div className="flex gap-3 sm:flex-wrap flex-nowrap overflow-x-auto scrollbar-hide">
				{equipmentsArr.map((equipment) => {
					const { equipmentName, equipmentGraphic, id, exercisesCount } = equipment;
					const { url, alt, width, height } = equipmentGraphic;
					return (
						<div
							key={id}
							className="p-4 md:p-5 flex flex-col gap-4 md:gap-6 rounded-xl bg-white border border-light-gray sm:max-w-[256px] max-sm:w-[200px] w-full"
						>
							<div
								style={{ height: height, width: width }}
								className={`rounded-[10px] border-[0.75px] border-light-gray max-md:!h-12 max-md:!w-12`}
							>
								<Image
									width={width}
									height={height}
									src={url}
									alt={alt}
									className="w-full h-full object-cover rounded-[10px]"
								/>
							</div>

							<div className="flex flex-col gap-0.5 md:gap-1.5">
								<Typography as="h4" sizeVariant="small" className="tracking-[-0.1px] leading-[24px] whitespace-nowrap">
									{equipmentName}
								</Typography>
								<Typography
									as="p"
									sizeVariant="small"
									className="tracking-[-0.09px] leading-[20px] text-charcoal-gray whitespace-nowrap"
								>
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

export default EquipmentsSection;
