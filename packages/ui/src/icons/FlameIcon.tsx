import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlameIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 42" width="1em" height="1em" {...props}>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M14 31.5c0 4.226 3.134 5.25 7 5.25 6.578 0 8.75-4.375 4.375-13.125-6.125 7.875-7-4.375-6.125-7.875C16.625 21 14 25.931 14 31.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 36.75c8.837 0 14-5.083 14-13.781S21 5.25 21 5.25 7 14.27 7 22.969c0 8.698 5.163 13.781 14 13.781"
		/>
	</svg>
);
export default SvgFlameIcon;
