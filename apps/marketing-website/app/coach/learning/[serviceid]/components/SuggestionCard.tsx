import { Typography } from '@workspace/ui/components';
import { TimerIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import Link from 'next/link';
import { formatTime } from '@/lib/utils/timeConversation';

interface ServiceCardProps {
	post: any;
}

const SuggestionCard: React.FC<ServiceCardProps> = (props) => {
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
			<div className="flex gap-3 cursor-pointer">
				<div className="max-w-[102px]">
					<Image
						width={isMediaImage ? width : thumbnailWidth}
						height={isMediaImage ? height : thumbnailHeight}
						src={cmsAssetsUrl(isMediaImage ? url : thumbnailUrl)}
						alt={isMediaImage ? alt : thumbnailAlt}
						className="rounded-md w-full h-full object-cover aspect-video"
					/>
				</div>

				<div className="flex-1">
					<span className="px-[6px] w-fit items-center py-[4px] mb-1 bg-soft-gray flex gap-1 rounded-md">
						<span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: labelColor }}></span>
						<Typography as={'p_caption'} sizeVariant="small" color="text-black" fontWeight="font-medium">
							{categoryName}
						</Typography>
					</span>
					<Typography
						as={'p_caption'}
						sizeVariant="large"
						fontWeight="font-semibold"
						className="overflow-hidden line-clamp-1 leading-[22px] tracking-[-0.08px]"
					>
						{title}
					</Typography>
					<span className="flex items-center gap-1 ">
						<TimerIcon />
						<span className="text-[14px] font-semibold">{formatTime(learningTimeInMinutes)}</span>
					</span>
				</div>
			</div>
		</Link>
	);
};

export default SuggestionCard;
