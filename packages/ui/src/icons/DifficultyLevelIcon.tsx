import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDifficultyLevelIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 10 10" {...props}>
		<rect width={7.5} height={1.563} x={1.25} y={1.719} fill="currentColor" fillOpacity={0.42} rx={0.625} />
		<rect width={7.5} height={1.563} x={1.25} y={4.219} fill="currentColor" fillOpacity={0.75} rx={0.625} />
		<rect width={7.5} height={1.563} x={1.25} y={6.719} fill="currentColor" rx={0.625} />
	</svg>
);
export default SvgDifficultyLevelIcon;
