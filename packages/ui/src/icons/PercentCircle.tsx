import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPercentCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 43 42" {...props}>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21.664 38.5c9.665 0 17.5-7.835 17.5-17.5S31.33 3.5 21.664 3.5s-17.5 7.835-17.5 17.5S12 38.5 21.664 38.5"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M27.79 28a.875.875 0 1 0-.001-1.75.875.875 0 0 0 0 1.75M15.54 15.75a.875.875 0 1 0-.001-1.75.875.875 0 0 0 0 1.75"
		/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m28.664 14-14 14" />
	</svg>
);
export default SvgPercentCircle;
