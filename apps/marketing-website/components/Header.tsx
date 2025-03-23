'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { CancelIcon, MenuIcon } from '@workspace/ui/icons';
import { imagesPaths } from '@/lib/public-assets-paths';
import { Button } from '@workspace/ui/components';

const menuItems = [
	{ label: 'About', link: '/about' },
	{ label: 'Platform', link: '/platform' },
	{ label: 'Learning', link: '/learning' },
];

const sectionIdsToHide: string[] = ['earning-path-sec'];
const hiddenRoutes = ['/install'];

const { adaptvLogoBlack } = imagesPaths;

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [shadowOpacity, setShadowOpacity] = useState(0);
	const [hideHeader, setHideHeader] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isDisableSection, setIsDisableSection] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const queryString = searchParams.toString();

	const fullPath = `${pathname}${queryString ? '?' : ''}${queryString}`;

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	const handleResize = () => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth >= 640) {
				setMenuOpen(false);
			}
		}
	};

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		const scrollUpThreshold = 50; // Threshold to consider scroll as "up"

		if (currentScrollY > lastScrollY && currentScrollY > 100) {
			setHideHeader(true); // Scroll down: hide header
		} else if (currentScrollY < lastScrollY && currentScrollY > scrollUpThreshold && !isDisableSection) {
			setHideHeader(false); // Scroll up: show header
		}

		// Update the last scroll position
		setLastScrollY(currentScrollY);

		const opacity = Math.min(window.scrollY / 2000, 0.6);
		setShadowOpacity(opacity);
	}, [isDisableSection, lastScrollY]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		setTimeout(() => {
			window.addEventListener('scroll', handleScroll);
		});

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll, lastScrollY, pathname]);

	useEffect(() => {
		setHideHeader(false);
		setLastScrollY(0);
		setShadowOpacity(0);
		setIsDisableSection(false);
		const observer = new IntersectionObserver(
			(entries) => {
				const isVisible = entries.some((entry) => entry.isIntersecting);
				setIsDisableSection(isVisible);
				setHideHeader(isVisible);
			},
			{
				threshold: 0.8,
			},
		);

		// Observe specified sections
		sectionIdsToHide.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});
		return () => {
			observer.disconnect();
		};
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [menuOpen]);

	if (hiddenRoutes.includes(pathname)) {
		return null;
	}

	return (
		<header
			style={{
				boxShadow: `0 8px 16px rgba(0, 0, 0, ${shadowOpacity})`,
			}}
			className={`sticky top-0 z-[999] transition-all duration-500 ${
				hideHeader ? '-translate-y-full' : 'translate-y-0'
			}`}
		>
			<div className="mx-4">
				<div className="mx-auto max-w-[1100px] flex justify-between items-center py-4 md:text-base text-sm">
					<div className="flex items-center gap-3">
						<Link href="/" className="w-[168px] h-7">
							<Image width={193} height={32} className="w-full h-full object-cover" src={adaptvLogoBlack} alt="logo" />
						</Link>

						<div className="max-sm:hidden">for coach</div>
					</div>

					<div
						className={`fixed top-20 inset-0 bg-black bg-opacity-50 transition-all duration-500 ${
							menuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
						}`}
						onClick={() => setMenuOpen(false)}
					></div>

					<div className="flex items-center gap-6">
						<nav
							className={`${
								menuOpen ? 'max-h-[320px] pb-4' : 'max-h-0 pb-0'
							} transition-all duration-500 ease-in-out flex md:flex-row flex-col md:relative absolute left-0 top-full w-full md:w-auto z-50 bg-charcoal-mist-gradient md:bg-transparent md:backdrop-blur-0 backdrop-blur-[60px] overflow-hidden md:overflow-visible md:pb-0 md:items-center md:gap-4 md:px-0 px-5`}
						>
							{menuItems.map((item, idx) => {
								const { label, link } = item;
								const isLastItem = menuItems.length === idx + 1;
								return (
									<Link
										key={label}
										href={`/${link}`}
										onClick={() => setMenuOpen(false)}
										className={`text-sm font-semibold leading-[16px] tracking-[-0.07px] md:border-none border-translucent-white md:py-0 py-4 md:px-0 px-2.5 max-md:text-white hover:text-ocean-glow transition ${
											(fullPath.includes(`/${link}`) && link) || link === pathname ? 'text-ocean-glow' : 'text-black'
										} ${isLastItem ? 'border-none' : 'border-b'}`}
									>
										{label}
									</Link>
								);
							})}
						</nav>

						<div className="max-sm:hidden">
							<Button>Become a coach</Button>
						</div>

						<button className="md:hidden flex cursor-pointer w-6 h-6 relative" onClick={toggleMenu}>
							<div
								className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
									menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
								}`}
							>
								<CancelIcon height={24} width={24} />
							</div>
							<div
								className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
									menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
								}`}
							>
								<MenuIcon height={24} width={24} />
							</div>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
