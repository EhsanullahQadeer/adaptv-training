'use client';
import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import { FacebookIcon, InstagramIcon, TiktokIcon, XIcon, YoutubeIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { pagesRoutes } from '@/lib/routes/pages-routes';

const { adaptvLogoBlack } = imagesPaths;
const { coachRegistration } = pagesRoutes;
const hiddenRoutes: string[] = [coachRegistration];
const socialLinks = [
	{ icon: InstagramIcon, link: '' },
	{ icon: FacebookIcon, link: '' },
	{ icon: YoutubeIcon, link: '' },
	{ icon: XIcon, link: '' },
	{ icon: TiktokIcon, link: '' },
];

const Footer = () => {
	const pathname = usePathname();

	if (hiddenRoutes.includes(pathname)) {
		return null; // Hide footer for specific routes
	}

	return (
		<footer className="mx-4 py-[60px]">
			<div className="max-w-[1100px] mx-auto">
				<div className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-shadow-mist pb-6 md:pb-5 gap-6">
					<div className="flex flex-col gap-1 max-md:items-center">
						<Link href={pathname.includes('/client') ? '/client' : '/coach'} className="w-[172px] h-7">
							<Image width={193} height={32} className="w-full h-full object-cover" src={adaptvLogoBlack} alt="logo" />
						</Link>

						<Typography as="span_secondary" sizeVariant="large" align="center" color="text-slate-gray">
							Grow your coaching business, offer personalized training.
						</Typography>
					</div>

					<div className="flex items-center gap-2">
						{socialLinks.map(({ icon: Icon, link }, idx) => (
							<Link
								key={link + idx}
								href={link}
								className="w-9 h-9 rounded-full bg-cloud-gray border border-dove-gray text-black flex justify-center items-center"
							>
								<Icon height={20} width={20} />
							</Link>
						))}
					</div>
				</div>

				<div className="pt-6 md:pt-5 flex flex-col md:flex-row items-center justify-between gap-4.5">
					<div className="max-md:order-2">
						<Typography
							as="span_secondary"
							sizeVariant="large"
							color="text-slate-gray"
							className="text-[15px] leading-[16px] tracking-[-0.5%]"
						>
							Copyright 2025 — AdaptvTraining
						</Typography>
					</div>
					<div className="max-md:order-1 flex items-center gap-4">
						<Link href="/">
							<Typography
								as="span_secondary"
								sizeVariant="large"
								fontFamily="font-semibold"
								className="text-[15px] leading-[16px] tracking-[-0.5%]"
							>
								For Coach
							</Typography>
						</Link>

						<Link href="/">
							<Typography
								as="span_secondary"
								sizeVariant="large"
								fontFamily="font-semibold"
								className="text-[15px] leading-[16px] tracking-[-0.5%]"
							>
								For Client
							</Typography>
						</Link>
					</div>
					<div className="max-md:order-3 flex items-center gap-5">
						<Link href="/">
							<Typography
								as="span_secondary"
								sizeVariant="large"
								fontFamily="font-medium"
								color="text-slate-gray"
								className="text-[15px] leading-[16px] tracking-[-0.5%] underline underline-offset-3"
							>
								Privacy policy
							</Typography>
						</Link>

						<Link href="/">
							<Typography
								as="span_secondary"
								sizeVariant="large"
								fontFamily="font-medium"
								color="text-slate-gray"
								className="text-[15px] leading-[16px] tracking-[-0.5%] underline underline-offset-3"
							>
								Terms & condition
							</Typography>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
