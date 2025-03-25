import { Button } from '@workspace/ui/components';
import Link from 'next/link';
import RoleSelector from './RoleSelector';

interface IProps {
	menuItems: { label: string; link: string }[];
	isDarkBg: boolean;
	pathname: string;
	menuOpen: boolean;
	setMenuOpen: (value: boolean) => void;
	selectedRole: string;
	onRoleChange: (value: string) => void;
	selectedBtnClasses?: string;
	showLoginButton: boolean;
	buttonText: string;
}

const NavBar = ({
	menuItems,
	isDarkBg,
	pathname,
	menuOpen,
	setMenuOpen,
	selectedRole,
	onRoleChange,
	showLoginButton,
	buttonText,
}: IProps) => {
	const navClasses = showLoginButton
		? 'lg:flex-row lg:relative lg:w-auto lg:pb-0 lg:items-center lg:gap-4 lg:px-0 lg:bg-transparent lg:backdrop-blur-0 lg:overflow-visible'
		: 'md:flex-row md:relative md:w-auto md:pb-0 md:items-center md:gap-4 md:px-0 md:bg-transparent md:backdrop-blur-0 md:overflow-visible';

	const linkClasses = showLoginButton ? 'lg:py-0 lg:px-0' : 'md:py-0 md:px-0';

	return (
		<nav
			className={`${menuOpen ? 'max-h-[400px] pb-4' : 'max-h-0 pb-0'} transition-all duration-500 ease-in-out flex ${navClasses} flex-col absolute left-0 top-full w-full z-[99] bg-charcoal-mist-gradient backdrop-blur-[60px] overflow-hidden px-5`}
		>
			{menuItems.map(({ label, link }) => (
				<Link
					key={label}
					href={link}
					onClick={() => setMenuOpen(false)}
					className={`text-sm font-semibold leading-[16px] tracking-[-0.07px] ${linkClasses} py-4 px-2.5 hover:text-ocean-glow transition ${
						pathname.includes(link) ? 'text-ocean-glow' : isDarkBg ? 'text-white' : 'text-black'
					}`}
				>
					{label}
				</Link>
			))}

			<div className="sm:hidden mt-4">
				<RoleSelector
					isDarkBg={isDarkBg}
					selectedRole={selectedRole}
					onRoleChange={onRoleChange}
					selectedBtnClasses={'rounded-md w-full shadow-md !h-12'}
				/>
			</div>

			<div className="sm:hidden mt-4 flex flex-col gap-2">
				{showLoginButton ? (
					<Button size="xl" className="w-full" variant="outline">
						Login
					</Button>
				) : (
					<></>
				)}
				<Button size="xl" className="w-full" variant={isDarkBg ? 'light' : 'default'}>
					{buttonText}
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;
