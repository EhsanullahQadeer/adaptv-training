import { Typography } from '@workspace/ui/components';
import Breadcrumbs from '@/components/Breedcrumbs';

type BlogHeaderProps = {
    title: string;
    categoryName: string;
    breadcrumbs: Array<{ label: string; href: string }>;
};

export default function BlogHeader({ title, categoryName, breadcrumbs }: BlogHeaderProps) {
    return (
        <>
            <Breadcrumbs items={breadcrumbs} />
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
        </>
    );
}
