import { Typography } from '@workspace/ui/components';
import React from 'react';
import Image from 'next/image';
import { getMovementEquipment } from '@/lib/services/cmsService';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import Link from 'next/link';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import { MovementsResponse } from '@/types/client';
interface EquipmentsSectionProps {
	movements: MovementsResponse;
}
const EquipmentsSection = async ({ movements }: EquipmentsSectionProps) => {
	const movementEquipmentsApiResponse = await getMovementEquipment();
	const movementEquipmentsArr = movementEquipmentsApiResponse?.docs;

	const equipmentCounts = movements.docs.reduce(
		(acc, movement) => {
			const equipment = movement.equipment?.equipmentName.toLowerCase();
			if (equipment) {
				acc[equipment] = (acc[equipment] || 0) + 1;
			}
			return acc;
		},
		{} as Record<string, number>,
	);

	const { clientExerciseLibraryList } = pagesRoutes;
	return (
		<div className="flex flex-col gap-6">
			<Typography as={'h4'} className="tracking-[-0.8px] md:tracking-[-1.12px]">
				Browse by Equipment
			</Typography>
			<div className="flex gap-3 sm:flex-wrap flex-nowrap overflow-x-auto scrollbar-hide">
				{movementEquipmentsArr.map((equipment) => {
					const { equipmentName, equipmentGraphic, id } = equipment;
					const { url, alt, width, height } = equipmentGraphic;
					return (
						<Link
							key={id}
							href={{ pathname: clientExerciseLibraryList, query: { equipment: id } }}
							className="p-4 md:p-5 rounded-xl bg-white border border-light-gray sm:max-w-[256px] max-sm:w-[200px] w-full"
						>
							<div key={id} className="flex flex-col gap-4 md:gap-6">
								<div
									style={{ height: height, width: width }}
									className={`rounded-[10px] border-[0.75px] border-light-gray max-md:!h-12 max-md:!w-12`}
								>
									<Image
										width={width}
										height={height}
										src={cmsAssetsUrl(url)}
										alt={alt}
										className="w-full h-full object-cover rounded-[10px]"
									/>
								</div>

								<div className="flex flex-col gap-0.5 md:gap-1.5">
									<Typography
										as="h4"
										sizeVariant="small"
										className="tracking-[-0.1px] leading-[24px] whitespace-nowrap"
									>
										{equipmentName}
									</Typography>
									<Typography
										as="p"
										sizeVariant="small"
										className="tracking-[-0.09px] leading-[20px] text-charcoal-gray whitespace-nowrap"
									>
										{equipmentCounts[equipmentName.toLowerCase()] || 0} Excercise
									</Typography>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default EquipmentsSection;
