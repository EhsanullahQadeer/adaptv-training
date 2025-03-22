import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMuscleIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16" {...props}>
		<g clipPath="url(#muscle-icon_svg__a)">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={2}
				strokeWidth={1.333}
				d="M7.121 12a3.84 3.84 0 0 1 4.12-2.794c1.854.197 3.327 1.76 3.42 3.62.024.49-.043.96-.186 1.397a.66.66 0 0 1-.63.443H3.917a2.667 2.667 0 0 1-2.614-3.19L3.33 1.334h4l1.334 2.333L5.808 5.71l-.81-1.044m.813 1.044 1.52 5.623"
			/>
		</g>
		<defs>
			<clipPath id="muscle-icon_svg__a">
				<path fill="currentColor" d="M0 0h16v16H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgMuscleIcon;
