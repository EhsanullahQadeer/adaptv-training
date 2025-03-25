'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@workspace/ui/components';
import { CancelIcon, MenuIcon } from '@workspace/ui/icons';
import Logo from './Logo';
import RoleSelector from './RoleSelector';
import NavBar from './NavBar';
import { determineBgColor, handleRoleChange } from '@/lib/utils/headerUtils';

const sectionIdsToHide: string[] = [];
const hiddenRoutes: string[] = [];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [shadowOpacity, setShadowOpacity] = useState(0);
	const [hideHeader, setHideHeader] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isDarkBg, setIsDarkBg] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	const headerBgColor = determineBgColor(pathname);
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
	const buttonText = isClientRoute
		? pathname === '/client/exercise-library'
			? 'Start Training'
			: 'Join the Waitlist'
		: 'Become a Coach';
	const showLoginButton = pathname === '/client/exercise-library';
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

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		if (!sectionIdsToHide.length) return;
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

	useEffect(() => {
		if (headerBgColor === 'bg-black') {
			setIsDarkBg(true);
		} else {
			setIsDarkBg(false);
		}
	}, [headerBgColor]);

	if (hiddenRoutes.includes(pathname)) return null;

	return (
		<header
			style={{
				boxShadow: `0 8px 16px rgba(0, 0, 0, ${shadowOpacity})`,
			}}
			className={`sticky top-0 z-[99] transition-all duration-500 ${hideHeader ? '-translate-y-full' : 'translate-y-0'} ${headerBgColor}`}
		>
			<div className="mx-4">
				<div className="mx-auto max-w-[1100px] flex justify-between items-center py-4 md:text-base text-sm">
					<div className="flex items-center gap-3">
						<Logo isDarkBg={isDarkBg} pathname={pathname} />
						<div className="max-sm:hidden">
							<RoleSelector
								isDarkBg={isDarkBg}
								selectedRole={selectedRole}
								onRoleChange={(value: string) => handleRoleChange(value, setSelectedRole, router)}
							/>
						</div>
					</div>

					<div
						className={`fixed top-20 inset-0 bg-black bg-opacity-50 transition-all duration-500 ${
							menuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
						}`}
						onClick={() => setMenuOpen(false)}
					></div>

					<div className="flex items-center gap-6">
						<NavBar
							menuItems={menuItems}
							isDarkBg={isDarkBg}
							pathname={pathname}
							menuOpen={menuOpen}
							setMenuOpen={setMenuOpen}
							selectedRole={selectedRole}
							onRoleChange={(value: string) => handleRoleChange(value, setSelectedRole, router)}
							showLoginButton={showLoginButton}
							buttonText={buttonText}
						/>

						<div className="max-sm:hidden flex gap-2">
							{showLoginButton ? <Button variant="outline">Login</Button> : <></>}
							<Button variant={isDarkBg ? 'light' : 'default'}>{buttonText}</Button>
						</div>

						<button
							className={`flex cursor-pointer w-6 h-6 relative ${isDarkBg ? 'text-white' : 'text-black'} ${showLoginButton ? 'lg:hidden' : 'md:hidden'}`}
							onClick={toggleMenu}
						>
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
