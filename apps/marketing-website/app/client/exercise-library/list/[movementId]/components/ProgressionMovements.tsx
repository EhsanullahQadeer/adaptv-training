import { Typography } from '@workspace/ui/components';
import { BarbellIcon, DifficultyLevelLgIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@workspace/ui/components/carousel';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Movement } from '@/types/client';

interface Props {
	progressionMovements: Movement[];
}

const ProgressionMovements = (props: Props) => {
	const { progressionMovements } = props;
	return (
		<div>
			<div className="mb-2.5">
				<Typography
					as={'h5_2'}
					sizeVariant="responsive_reverse"
					fontWeight="font-semibold"
					className="tracking-[-0.1px] md:tracking-[-0.18px] leading-[28px] md:leading-[26px]"
				>
					Progression Movements
				</Typography>
			</div>

			<Carousel>
				<CarouselContent className="-ml-4">
					{progressionMovements.map((progMovement: Movement) => {
						const {
							id,
							movementName,
							equipment,
							trainingStyle,
							movementImageMedia,
							movementVideoThumbnail,
							movementMediaType,
							difficulty,
						} = progMovement;

						const { equipmentName } = equipment;

						const { trainingStyleName } = trainingStyle;

						const difficultyColor =
							difficulty === 'beginner'
								? 'text-green'
								: difficulty === 'intermediate'
									? 'text-golden-rod'
									: 'text-vermilion';

						const { alt = '', url = '', height, width } = movementImageMedia || {};

						const {
							alt: thumbnailAlt = '',
							url: thumbnailUrl = '',
							height: thumbnailHeight,
							width: thumbnailWidth,
						} = movementVideoThumbnail || {};

						const isMovementMediaImage = movementMediaType === 'image';

						return (
							<CarouselItem key={id} className="pl-0 ml-4 relative basis-auto max-w-[213px]">
								<Link href={`/client/exercise-library/list/${id}`}>
									<div className="bg-whisper-gray rounded-xl p-3.5 max-w-[213px] cursor-pointer overflow-hidden">
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

											<div
												className={`py-1.5 px-2 bg-soft-gray rounded-md flex flex-col gap-[1.5px] w-7 ${difficultyColor}`}
											>
												<DifficultyLevelLgIcon width={12} height={12} />
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
												width={isMovementMediaImage ? width : thumbnailWidth}
												height={isMovementMediaImage ? height : thumbnailHeight}
												src={cmsAssetsUrl(isMovementMediaImage ? url : thumbnailUrl)}
												alt={isMovementMediaImage ? alt : thumbnailAlt}
												className="rounded-md w-full h-full object-cover aspect-video"
											/>
										</div>
									</div>
								</Link>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default ProgressionMovements;
