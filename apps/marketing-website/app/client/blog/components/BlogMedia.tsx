import Image from 'next/image';
import { cmsAssetsUrl } from '@/lib/utils/cmsUtils';

type BlogMediaProps = {
    mediaType: string;
    imageMedia?: {
        alt: string;
        url: string;
        height: number;
        width: number;
    };
    videoMedia?: string;
};

export default function BlogMedia({ mediaType, imageMedia, videoMedia }: BlogMediaProps) {
    if (mediaType === 'image' && imageMedia) {
        const { alt, url, height, width } = imageMedia;
        return (
            <Image
                width={width}
                height={height}
                src={cmsAssetsUrl(url)}
                alt={alt}
                className="rounded-xl w-full h-full object-cover"
            />
        );
    }

    if (mediaType === 'video' && videoMedia) {
        return (
            <iframe
                className="w-full h-[648px] rounded-xl"
                src={videoMedia.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
                title="Movement Video"
                frameBorder="0"
                allowFullScreen
            />
        );
    }

    return null;
}
