'use client';
import { useEffect, useState, useMemo } from 'react';
import { useExtractText, useGetViewWidth } from '@PortfolioApp/hooks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/MB-logo.webp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_BAR_ITEMS } from '@PortfolioApp/app/constants/constants';

export const NavBar = () => {
	const path = usePathname();
	const { keyToText } = useExtractText();
	const { isMobile } = useGetViewWidth();
	const [active, setActive] = useState(path);
	const [showMobileNav, setShowMobileNav] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		setActive(path);
	}, [path]);

	const NavItemsList = useMemo(() => Object.entries(NAV_BAR_ITEMS), []);

	if (!isMounted) return null; // Early return if the component is not mounted

	const isMountedAndMobile = isMounted && isMobile;
	const translateYClass =
		isMobile && showMobileNav ? 'translate-y-[0]' : 'translate-y-[-100%]';

	return (
		<div
			className={`left-0 top-0 z-[20] w-full bg-bg-transparent-black-main shadow-box-shadow-dark backdrop-blur-[5px] transition-all sm:fixed sm:p-[1rem] md:sticky md:px-[1.5rem] md:py-[1.75rem] ${translateYClass} ${isMounted && !isMobile && 'translate-y-[0]'}`}
		>
			<div className="flex items-center justify-between sm:flex-col sm:gap-[0.75rem] md:flex-row">
				{!isMountedAndMobile && (
					<Link href="/" className="h-auto w-auto animate-navBarLogo-fade-in">
						<Image
							src={logo}
							alt="Logo"
							width={64}
							className="h-auto w-auto overflow-hidden rounded-[10px] transition-all md:hover:hover:shadow-box-shadow-logo md:hover:[transform:translateZ(20px)]"
						/>
					</Link>
				)}
				<ul className="flex flex-wrap gap-4 text-lg text-navBarInactive transition-all sm:mb-[2rem] sm:flex-col sm:items-center md:mb-0 md:flex-row md:[transform-style:preserve-3d] md:[transform:perspective(1000px)]">
					{NavItemsList.map(([key, value]) => (
						<li key={value}>
							<Link
								href={value}
								onClick={() => setShowMobileNav(false)}
								className={`rounded-[8px] px-[0.5rem] py-[0.25rem] hover:text-colorLight ${active === value ? 'text-navBarActive shadow-box-shadow-border-bottom' : ''}`}
							>
								{keyToText(`NAVIGATION.${key}`)}
							</Link>
						</li>
					))}
				</ul>
				{isMountedAndMobile && (
					<div
						className={`padding-[0.5rem] absolute bottom-0 flex h-[2rem] w-full cursor-pointer items-center justify-center shadow-box-shadow-top-and-bottom transition-all active:bg-slate-800 ${showMobileNav ? 'bottom-0' : 'bottom-[-2rem] bg-bg-transparent-black-main'}`}
						onClick={() => setShowMobileNav(!showMobileNav)}
					>
						{showMobileNav ? <CloseIcon /> : <MenuIcon />}
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
