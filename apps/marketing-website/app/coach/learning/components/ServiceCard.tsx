import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Typography } from '@workspace/ui/components';
import { TimerIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { formatTime } from '@/lib/utils/timeConversation';

interface ServiceCardProps {
	post: any;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
	const { post } = props;
	const {
		category,
		id,
		title,
		learningContentMediaType,
		learningContentImageMedia,
		learningTimeInMinutes,
		learningContentVideoThumbnail,
	} = post;

	const { categoryName, labelColor } = category;

	const { alt = '', url = '', height, width } = learningContentImageMedia || {};

	const {
		alt: thumbnailAlt = '',
		url: thumbnailUrl = '',
		height: thumbnailHeight,
		width: thumbnailWidth,
	} = learningContentVideoThumbnail || {};

	const isMediaImage = learningContentMediaType === 'image';

	return (
		<Link href={`/coach/learning/${id}`}>
			<div className="h-full flex-1 bg-whisper-gray max-h-[367px] sm:max-h-[288px] rounded-xl p-3.5 cursor-pointer overflow-hidden flex flex-col gap-3 justify-between">
				<div>
					<span className="px-[6px] w-fit items-center py-[4px] mb-3 bg-soft-gray flex gap-1 rounded-md">
						<span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: labelColor }}></span>
						<Typography as={'p_caption'} fontWeight="font-medium" sizeVariant="small" className="text-xs font-medium">
							{categoryName}
						</Typography>
					</span>
					<Typography
						as={'p_caption'}
						fontWeight="font-bold"
						sizeVariant="large"
						className="!text-left block mb-2 line-clamp-2"
					>
						{title}
					</Typography>
					<span className="flex items-center gap-1">
						<TimerIcon />
						<span className="text-[14px] font-semibold">{formatTime(learningTimeInMinutes)}</span>
					</span>
				</div>

				<div className="overflow-hidden max-h-[192px] sm:max-h-[140px] rounded-md">
					<Image
						width={isMediaImage ? width : thumbnailWidth}
						height={isMediaImage ? height : thumbnailHeight}
						src={cmsAssetsUrl(isMediaImage ? url : thumbnailUrl)}
						alt={isMediaImage ? alt : thumbnailAlt}
						className="rounded-md w-full h-full object-cover aspect-video"
					/>
				</div>
			</div>
		</Link>
	);
};

export default ServiceCard;
