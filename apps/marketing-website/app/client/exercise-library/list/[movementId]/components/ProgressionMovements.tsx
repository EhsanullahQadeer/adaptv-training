import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import { BarbellIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	progressionMovements: any;
}

const { boy } = imagesPaths;

const ProgressionMovements = (props: Props) => {
	const { progressionMovements } = props;
	return (
		<div>
			<div>
				<Typography
					as={'h5_2'}
					sizeVariant="responsive_reverse"
					fontWeight="font-semibold"
					className="tracking-[-0.1px] md:tracking-[-0.18px] leading-[28px] md:leading-[26px]"
				>
					Progression Movements
				</Typography>
			</div>

			<div className="mt-2.5 flex gap-3">
				{progressionMovements.map((progMovement: any, index: number) => {
					const { id, movementName, equipment, trainingStyle } = progMovement;

					const { equipmentName } = equipment;

					const { trainingStyleName } = trainingStyle;

					return (
						<Link key={index} href={`/client/exercise-library/list/${id}`}>
							<div className="bg-whisper-gray max-w-[213px] rounded-xl p-3.5 cursor-pointer overflow-hidden">
								<div className="mb-3 flex items-center gap-1">
									<div className="bg-soft-gray py-1 px-1.5 rounded-md w-max">
										<Typography
											as={'p_caption'}
											fontWeight="font-medium"
											sizeVariant="small"
											className="leading-[16px] tracking-[-0.06px]"
										>
											{trainingStyleName}
										</Typography>
									</div>

									<div className="py-1.5 px-2 bg-soft-gray rounded-md flex flex-col gap-[1.5px] w-7">
										<div className="w-full h-[2.5px] rounded-xs bg-[#DB3700]"></div>
										<div className="w-full h-[2.5px] rounded-xs bg-[#DB3700]"></div>
										<div className="w-full h-[2.5px] rounded-xs bg-[#DB3700]"></div>
									</div>
								</div>

								<Typography
									as={'span_secondary'}
									fontWeight="font-bold"
									sizeVariant="small"
									className="tracking-[-0.07px] leading-[18px] line-clamp-2"
								>
									{movementName}
								</Typography>

								<div className="mt-2 flex gap-1 items-center">
									<BarbellIcon />
									<div>{equipmentName}</div>
								</div>

								<div className="mt-3.5 w-[185px] h-[116px] overflow-hidden rounded-md">
									<Image
										width={1040}
										height={648}
										src={boy}
										alt={movementName}
										className="rounded-md w-full h-full object-cover aspect-video"
									/>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressionMovements;
