'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CancelIcon, FireIcon, MenuIcon, UserClientIcon } from '@workspace/ui/icons';
import { imagesPaths } from '@/lib/public-assets-paths';
import { Button } from '@workspace/ui/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select';

const sectionIdsToHide = ['earning-path-sec'];
const hiddenRoutes = ['/install'];
const { adaptvLogoBlack } = imagesPaths;

const Header = ({ bgColor }: { bgColor?: string }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [shadowOpacity, setShadowOpacity] = useState(0);
	const [hideHeader, setHideHeader] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const pathname = usePathname();
	const router = useRouter();

	const isClientRoute = pathname.includes('/client');
	const menuItems = isClientRoute
		? [
				{ label: 'About', link: '/client/about' },
				{ label: 'Platform', link: '/client/platform' },
				{ label: 'Exercise Library', link: '/client/exercise-library' },
				{ label: 'Blog', link: '/client/blog' },
			]
		: [
				{ label: 'About', link: '/coach/about' },
				{ label: 'Platform', link: '/coach/platform' },
				{ label: 'Learning', link: '/coach/learning' },
			];
	const buttonText = isClientRoute ? 'Join the Waitlist' : 'Become a Coach';
	const [selectedRole, setSelectedRole] = useState(isClientRoute ? 'client' : 'for-coach');

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	const handleResize = () => {
		if (window.innerWidth >= 640) setMenuOpen(false);
	};

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		setHideHeader(currentScrollY > lastScrollY && currentScrollY > 100);
		setLastScrollY(currentScrollY);
		setShadowOpacity(Math.min(currentScrollY / 2000, 0.6));
	}, [lastScrollY]);

	const handleRoleChange = (value: string) => {
		setSelectedRole(value);
		router.push(value === 'client' ? '/client' : '/coach');
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const isVisible = entries.some((entry) => entry.isIntersecting);
				setHideHeader(isVisible);
			},
			{ threshold: 0.8 },
		);
		sectionIdsToHide.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
	}, [menuOpen]);

	if (hiddenRoutes.includes(pathname)) return null;

	return (
		<header
			style={{
				boxShadow: `0 8px 16px rgba(0, 0, 0, ${shadowOpacity})`,
				backgroundColor: bgColor || 'transparent',
			}}
			className={`sticky top-0 z-[99] transition-all duration-500 ${hideHeader ? '-translate-y-full' : 'translate-y-0'}`}
		>
			<div className="mx-4">
				<div className="mx-auto max-w-[1100px] flex justify-between items-center py-4 md:text-base text-sm">
					<div className="flex items-center gap-3">
						<Link href={pathname.includes('/client') ? '/client' : '/coach'} className="w-[168px] h-7">
							<Image width={193} height={32} className="w-full h-full object-cover" src={adaptvLogoBlack} alt="logo" />
						</Link>
						<div className="max-sm:hidden">
							<Select value={selectedRole} onValueChange={handleRoleChange}>
								<SelectTrigger className="rounded-full">
									<SelectValue placeholder="Select role" />
								</SelectTrigger>
								<SelectContent className="text-black rounded-md">
									<SelectItem value="for-coach">
										<FireIcon fill="black" />
										<span>For Coach</span>
									</SelectItem>
									<SelectItem value="client">
										<UserClientIcon className="text-black" />
										<span>Client</span>
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
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
								menuOpen ? 'max-h-[360px] pb-4' : 'max-h-0 pb-0'
							} transition-all duration-500 ease-in-out flex md:flex-row flex-col md:relative absolute left-0 top-full w-full md:w-auto z-[99] bg-charcoal-mist-gradient md:bg-transparent md:backdrop-blur-0 backdrop-blur-[60px] overflow-hidden md:overflow-visible md:pb-0 md:items-center md:gap-4 md:px-0 px-5`}
						>
							{menuItems.map(({ label, link }) => (
								<Link
									key={label}
									href={link}
									onClick={() => setMenuOpen(false)}
									className={`text-sm font-semibold leading-[16px] tracking-[-0.07px] md:py-0 py-4 md:px-0 px-2.5 max-md:text-black hover:text-ocean-glow transition ${
										pathname.includes(link) ? 'text-ocean-glow' : 'text-black'
									}`}
								>
									{label}
								</Link>
							))}

							<div className="sm:hidden mt-4">
								<Select value={selectedRole} onValueChange={handleRoleChange}>
									<SelectTrigger className="rounded-md w-full bg-white shadow-md !h-12">
										<SelectValue placeholder="Select role" />
									</SelectTrigger>
									<SelectContent className="text-black rounded-md">
										<SelectItem value="for-coach">
											<FireIcon fill="black" />
											<span>For Coach</span>
										</SelectItem>
										<SelectItem value="client">
											<UserClientIcon className="text-black" />
											<span>Client</span>
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="sm:hidden mt-4">
								<Button size="xl" className="w-full">
									{buttonText}
								</Button>
							</div>
						</nav>

						<div className="max-sm:hidden">
							<Button>{buttonText}</Button>
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
