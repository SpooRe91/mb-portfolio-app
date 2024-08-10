"use client";
import { useEffect, useState, useMemo } from "react";
import { useExtractText, useGetViewWidth } from "@PortfolioApp/hooks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/MB-logo.webp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_BAR_ITEMS } from "@PortfolioApp/app/constants/constants";

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
    const translateYClass = isMobile && showMobileNav ? "translate-y-[0]" : "translate-y-[-100%]";

    return (
        <div
            className={`sm:fixed md:sticky w-full md:py-[1.75rem] md:px-[1.5rem] sm:p-[1rem] bg-bg-transparent-black-main top-0 left-0 z-[20] backdrop-blur-[5px] shadow-box-shadow-dark transition-all ${translateYClass} ${isMounted && !isMobile && "translate-y-[0]"}`}
        >
            <div className="flex md:flex-row sm:flex-col sm:gap-[0.75rem] items-center justify-between">
                {!isMountedAndMobile && (
                    <Link href="/" className="animate-navBarLogo-fade-in w-auto h-auto">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={64}
                            className="w-auto h-auto rounded-[10px] md:hover:hover:shadow-box-shadow-logo md:hover:[transform:translateZ(20px)] overflow-hidden transition-all"
                        />
                    </Link>
                )}
                <ul className="flex flex-wrap md:flex-row sm:flex-col sm:items-center gap-4 text-lg text-navBarInactive transition-all sm:mb-[2rem] md:mb-0 md:[transform-style:preserve-3d] md:[transform:perspective(1000px)]">
                    {NavItemsList.map(([key, value]) => (
                        <li key={value}>
                            <Link
                                href={value}
                                onClick={() => setShowMobileNav(false)}
                                className={`py-[0.25rem] px-[0.5rem] rounded-[8px] hover:text-colorLight ${active === value ? "text-navBarActive shadow-box-shadow-border-bottom" : ""}`}
                            >
                                {keyToText(`NAVIGATION.${key}`)}
                            </Link>
                        </li>
                    ))}
                </ul>
                {isMountedAndMobile && (
                    <div
                        className={`active:bg-slate-800 h-[2rem] shadow-box-shadow-top-and-bottom cursor-pointer absolute bottom-0 padding-[0.5rem] transition-all w-full flex justify-center items-center ${showMobileNav ? "bottom-0" : "bottom-[-2rem] bg-bg-transparent-black-main"}`}
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
