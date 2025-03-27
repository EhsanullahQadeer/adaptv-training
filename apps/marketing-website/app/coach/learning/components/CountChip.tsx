import { Typography } from '@workspace/ui/components';
import React from 'react';

const CountChip = () => {
	return (
		<Typography
			color="text-dim-gray"
			className="bg-soft-gray h-5 w-5 p-0.5 rounded-full flex items-center justify-center tracking-[-0.06px] leading-[16px]"
			sizeVariant="small"
			as="p_caption"
		>
			68
		</Typography>
	);
};

export default CountChip;
