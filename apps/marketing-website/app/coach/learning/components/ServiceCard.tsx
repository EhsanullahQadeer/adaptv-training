'use client';
import { useRouter } from 'next/navigation';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Typography } from '@workspace/ui/components';
import { TimerIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
	post: any;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
	const router = useRouter();
	const { post } = props;
	const { category, id, title, learningContentMediaType, learningContentImageMedia } = post;

	const { categoryName } = category;

	const { alt, url, height, width } = learningContentImageMedia || {};

	const handlePostSelect = () => {
		router.push(`/coach/learning/${id}`);
	};

	return (
		<div
			onClick={handlePostSelect}
			className="flex-1 bg-whisper-gray max-h-[367px] sm:max-h-[288px] rounded-xl p-3.5 cursor-pointer overflow-hidden"
		>
			<span className="px-[6px] w-fit items-center py-[4px] mb-3 bg-soft-gray flex gap-1 rounded-md">
				<span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: '#FF5733' }}></span>
				<Typography as={'caption'} fontWeight="font-medium" sizeVariant="small" className="text-xs font-medium">
					{categoryName}
				</Typography>
			</span>
			<Typography as={'caption'} fontWeight="font-bold" sizeVariant="large" className="!text-left block mb-2 line-clamp-2">
				{title}
			</Typography>
			<span className="flex items-center gap-1 mb-3">
				<TimerIcon />
				<span className="text-[14px] font-semibold">45 min</span>
			</span>
			<div className="overflow-hidden max-h-[192px] sm:max-h-[140px] rounded-md">
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
		</div>
	);
};

export default ServiceCard;
