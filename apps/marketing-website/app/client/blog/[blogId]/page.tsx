import { getClientSingleBlogPost } from '@/lib/services/cmsService';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import AccessToPlatformSection from '@/components/AccessToPlatformSection';
import BlogHeader from '../components/BlogHeader';
import BlogMedia from '../components/BlogMedia';
import BlogContent from '../components/BlogContent';



export type paramsType = Promise<{  blogId: string; }>;

export default async function Page(props: { params: paramsType }) {
	const { blogId } = await props.params;

    const {
        category,
        id,
        title,
        learningContentMediaType,
        learningContentImageMedia,
        learningContentVideoMedia,
        blogPostBody,
    } = await getClientSingleBlogPost(blogId);

    const { categoryName } = category;
    const { clientBlog } = pagesRoutes;

    const breadcrumbs = [
        { label: 'Blog', href: clientBlog },
        { label: title, href: `/client/blog/${id}` },
    ];

    return (
        <div className="mt-4 md:mt-9 bg-white">
            <div className="mx-4">
                <div className="max-w-[1100px] mx-auto">
                    <BlogHeader
                        title={title}
                        categoryName={categoryName}
                        breadcrumbs={breadcrumbs}
                    />

                    <div className="mt-8 max-h-[648px] overflow-hidden rounded-xl">
                        <BlogMedia
                            mediaType={learningContentMediaType}
                            imageMedia={learningContentImageMedia}
                            videoMedia={learningContentVideoMedia}
                        />
                    </div>

                    <BlogContent blogPostBody={blogPostBody} />
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
