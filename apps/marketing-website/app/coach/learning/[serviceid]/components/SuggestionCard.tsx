import { Typography } from '@workspace/ui/components';
import { TimerIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import Link from 'next/link';

interface ServiceCardProps {
	post: any;
}

const SuggestionCard: React.FC<ServiceCardProps> = (props) => {
	const { post } = props;
	const { category, id, title, learningContentMediaType, learningContentImageMedia } = post;

	const { categoryName } = category;

	const { alt, url, height, width } = learningContentImageMedia || {};

	return (
		<Link href={`/coach/learning/${id}`}>
			<div className="flex gap-3 cursor-pointer">
				<div className="max-w-[102px]">
					{learningContentMediaType === 'image' ? (
						<Image
							width={width}
							height={height}
							src={cmsAssetsUrl(url)}
							alt={alt}
							className="rounded-md w-full h-full object-cover"
						/>
					) : (
						<></>
					)}
				</div>

				<div className="flex-1">
					<span className="px-[6px] w-fit items-center py-[4px] mb-1 bg-soft-gray flex gap-1 rounded-md">
						<span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: '#FF5733' }}></span>
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
						<span className="text-[14px] font-semibold">45 min</span>
					</span>
				</div>
			</div>
		</Link>
	);
};

export default SuggestionCard;
