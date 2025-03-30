import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Typography } from '@workspace/ui/components';
import { ArrowIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	blog: any;
}

const FeaturedBlogPost = (props: Props) => {
	const { blog } = props;

	const { category, id, title, learningContentMediaType, learningContentImageMedia, learningContentVideoThumbnail } =
		blog;

	const { categoryName } = category;

	const { alt = '', url = '', height, width } = learningContentImageMedia || {};

	const {
		alt: thumbnailAlt = '',
		url: thumbnailUrl = '',
		height: thumbnailHeight,
		width: thumbnailWidth,
	} = learningContentVideoThumbnail || {};

	const isMediaImage = learningContentMediaType === 'image';

	return (
		<Link href={`/client/blog/${id}`}>
			<Typography as={'h4'}>Featured</Typography>
			<div className="mt-5 w-fit flex lg:flex-row mx-auto flex-col border border-light-gray rounded-lg mb-10">
				<div className="flex-1 w-full max-h-[420px] overflow-hidden">
					<Image
						width={isMediaImage ? width : thumbnailWidth}
						height={isMediaImage ? height : thumbnailHeight}
						src={cmsAssetsUrl(isMediaImage ? url : thumbnailUrl)}
						alt={isMediaImage ? alt : thumbnailAlt}
						className="rounded-t-lg lg:rounded-l-lg w-full h-full object-cover aspect-video"
					/>
				</div>

				<div className="flex-1 lg:max-w-[40%] p-[24px] flex justify-between flex-col">
					<div className="flex flex-col lg:w-auto md:w-[790px]">
						<span className="px-[6px] py-[3px] text-[10px] rounded-lg bg-[#9A38A6] w-fit text-white font-bold">
							{categoryName}
						</span>

						<Typography className="md:my-2 my-1" as={'h4_2'} color="text-black">
							{title}
						</Typography>
						<Typography color="text-[#515151]">
							Learn how to effectively assess a client’s fitness level, mobility, and health history to create a
							personalized training plan.
						</Typography>
					</div>
					<div className="flex gap-1.5 items-center mt-8">
						<span className="text-[14px] font-semibold">Read more</span>
						<ArrowIcon />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default FeaturedBlogPost;
