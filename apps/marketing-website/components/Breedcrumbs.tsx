import Link from 'next/link';
import { Typography } from '@workspace/ui/components';
import { RightArrow } from '@workspace/ui/icons';

interface Props {
	items: { label: string; href: string }[];
}
const Breadcrumbs = (props: Props) => {
	const { items } = props;
	return (
		<div className="sm:flex hidden items-center gap-0.5 mb-5">
			{items.map((item, index) => (
				<div key={index} className="flex items-center">
					{index !== items.length - 1 ? (
						<Link href={item.href} className="">
							<Typography as="h5" sizeVariant="small" fontWeight="font-semibold">
								{item.label}
							</Typography>
						</Link>
					) : (
						<Typography as="h5" sizeVariant="small" fontWeight="font-semibold" color="text-gray-500">
							{item.label}
						</Typography>
					)}
					{index !== items.length - 1 && <RightArrow />}
				</div>
			))}
		</div>
	);
};

export default Breadcrumbs;
