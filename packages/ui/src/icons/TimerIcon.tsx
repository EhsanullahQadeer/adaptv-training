import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16" {...props}>
		<g clipPath="url(#timer-icon_svg__a)">
			<path
				fill="currentColor"
				d="m11.745 3.979.969-.969.942.943-.968.969a6 6 0 1 1-.943-.943M8 13.334a4.665 4.665 0 0 0 3.3-7.967A4.666 4.666 0 1 0 8 13.334m-.667-8h1.333v4H7.333zm-2-4.667h5.333V2H5.333z"
			/>
		</g>
		<defs>
			<clipPath id="timer-icon_svg__a">
				<path fill="currentColor" d="M0 0h16v16H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgTimerIcon;
