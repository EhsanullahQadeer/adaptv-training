import Image from 'next/image';
import Link from 'next/link';
import { imagesPaths } from '@/lib/public-assets-paths';

const Logo = ({ isDarkBg, pathname }: { isDarkBg: boolean; pathname: string }) => {
	const { adaptvLogo, adaptvLogoBlack } = imagesPaths;
	return (
		<Link href={pathname.includes('/client') ? '/client' : '/coach'} className="w-[168px] h-7">
			<Image
				width={193}
				height={32}
				className="w-full h-full object-cover"
				src={isDarkBg ? adaptvLogo : adaptvLogoBlack}
				alt="logo"
			/>
		</Link>
	);
};

export default Logo;
