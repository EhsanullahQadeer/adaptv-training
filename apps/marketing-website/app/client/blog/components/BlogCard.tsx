import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import { Typography } from '@workspace/ui/components';
import { ArrowIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogProps {
	blog: any;
}

const BlogCard = (props: BlogProps) => {
	const { blog } = props;

	const { category, id, title, learningContentMediaType, learningContentImageMedia } = blog;

	const { categoryName } = category;

	const { alt, url, height, width } = learningContentImageMedia || {};

	// const handlePostSelect = () => {
	// 	router.push(`/coach/learning/${id}`);
	// };

	return (
		<Link href={`/client/blog/${id}`}>
			<div className="max-h-[302px] md:max-h-[336px] flex flex-col border border-light-gray rounded-lg">
				<div className="h-[180px] md:h-[152px] overflow-hidden">
					{learningContentMediaType === 'image' ? (
						<Image
							src={cmsAssetsUrl(url)}
							alt={alt}
							className="rounded-t-lg lg:rounded-l-lg w-full h-full object-cover"
							width={width}
							height={height}
						/>
					) : (
						<></>
					)}
				</div>
				<div className="p-4 md:p-3 flex justify-between flex-col">
					<div className="flex flex-col w-auto">
						<span
							className="px-[6px] py-[3px] text-[10px] rounded-lg w-fit text-white font-bold"
							style={{ backgroundColor: '#9A38A6' }}
						>
							{categoryName}
						</span>
						<Typography className="md:my-2 my-1 line-clamp-2" as={'h6'} sizeVariant="small">
							{title}
						</Typography>
						{/* <Typography color="text-[#515151" className="text-[14px] leading-[18px] line-clamp-2">
						{excerpt}
					</Typography> */}
					</div>
					<div className="flex gap-1.5 items-center flex-1 mt-4">
						<Typography as="span_secondary" sizeVariant="small" fontWeight="font-semibold">
							Read more
						</Typography>
						{/* <Link href={link} className="text-[14px] font-semibold">
							Read more
						</Link> */}
						<ArrowIcon />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
