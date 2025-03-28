import Image from 'next/image';
import { Typography } from '@workspace/ui/components';
import { getClientSingleBlogPost } from '@/lib/services/cmsService';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import AccessToPlatformSection from '@/components/AccessToPlatformSection';

interface PageProps {
	params: {
		blogId: string;
	};
}

const page = async ({ params }: PageProps) => {
	const { blogId } = params;
	console.log('params id', blogId);

	const blogPostApiResponse = await getClientSingleBlogPost(blogId);

	console.log('blogPostApiResponse', blogPostApiResponse);

	const { category, title, id, learningContentMediaType, learningContentImageMedia } = blogPostApiResponse;

	const { categoryName } = category;

	const { alt, url, height, width } = learningContentImageMedia || {};

	const { clientBlog } = pagesRoutes;
	const breadcrumbs = [
		{ label: 'Blog', href: clientBlog },
		{ label: title, href: `/client/blog/${id}` },
	];

	return (
		<div className="mt-4 md:mt-9 bg-white">
			<div className="mx-4">
				<div className="max-w-[1100px] mx-auto">
					<Breadcrumbs {...{ items: breadcrumbs }} />

					<div className="mb-2.5 mt-4 md:mt-[60px]">
						<span
							className="px-[6px] py-[3px] text-[10px] rounded-lg w-fit text-white font-bold"
							style={{ backgroundColor: '#9A38A6' }}
						>
							{categoryName}
						</span>
					</div>

					<div>
						<Typography as="h2">{title}</Typography>
					</div>

					<div className="mt-8 max-h-[648px] overflow-hidden rounded-xl">
						{learningContentMediaType === 'image' ? (
							<Image
								width={width}
								height={height}
								src={cmsAssetsUrl(url)}
								alt={alt}
								className="rounded-xl w-full h-full object-cover"
							/>
						) : (
							<></>
						)}
					</div>

					<div className="mt-6 md:mt-12 mb-6 md:mb-12">leaning content comes here</div>
				</div>
			</div>

			<div className="max-sm:hidden">
				<AccessToPlatformSection
					title="Stay ahead in your fitness journey"
					subtitle="Get exclusive tips and the latest trends in health & training"
					textMaxWidth="max-w-[640px]"
					inputRequired={true}
				/>
			</div>
		</div>
	);
};

export default page;
