"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useExtractText, useGetViewWidth } from "@PortfolioApp/hooks";
import logo from "/public/MB-logo.webp";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const NavBar = () => {
    const path = usePathname();
    const { keyToText } = useExtractText();
    const [active, setActive] = useState("");
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const { isMobile } = useGetViewWidth();

    useEffect(() => {
        setActive(path);
    }, [path]);

    return (
        <div
            className={`sm:fixed md:sticky w-full md:py-[1.75rem] md:px-[1.5rem] sm:p-[1rem] bg-bg-transparent-black-main top-0 left-0 z-[20] backdrop-blur-[5px] shadow-box-shadow-dark transition-all ${isMobile && showMobileNav ? "translate-y-[0]" : "translate-y-[-100%]"} ${!isMobile && "translate-y-[0]"}`}
        >
            <div className="flex md:flex-row sm:flex-col sm:gap-[0.75rem] items-center justify-between">
                {!isMobile && (
                    <div>
                        <Link className="animate-navBarLogo-fade-in" href={"/"}>
                            <Image
                                src={logo}
                                alt="Logo"
                                width={64}
                                height={64}
                                className="rounded-[10px] md:hover:hover:shadow-box-shadow-logo overflow-hidden transition-all"
                            />
                        </Link>
                    </div>
                )}
                {
                    <ul
                        className={`flex flex-wrap md:flex-row sm:flex-col sm:items-center gap-4 text-lg text-navBarInactive transition-all sm:mb-[2rem] md:mb-0`}
                    >
                        <li className="animate-navBarItem-slide-in-top1">
                            <Link
                                onClick={() => setShowMobileNav((state) => !state)}
                                href="/"
                                passHref
                                className={`py-[0.25rem] px-[0.5rem] rounded-[8px] hover:text-colorLight transition-all ${active === "/" ? "text-navBarActive shadow-box-shadow-border-bottom" : ""}`}
                            >
                                {keyToText("NAVIGATION.HOME_TEXT")}
                            </Link>
                        </li>
                        <li className="animate-navBarItem-slide-in-top2">
                            <Link
                                onClick={() => setShowMobileNav((state) => !state)}
                                href="/projects"
                                passHref
                                className={`py-[0.25rem] px-[0.5rem] rounded-[8px] hover:text-colorLight transition-all ${active === "/projects" ? "text-navBarActive shadow-box-shadow-border-bottom" : ""}`}
                            >
                                {keyToText("NAVIGATION.PROJECTS_TEXT")}
                            </Link>
                        </li>
                        <li className="animate-navBarItem-slide-in-top3">
                            <Link
                                onClick={() => setShowMobileNav((state) => !state)}
                                href="/about"
                                passHref
                                className={`py-[0.25rem] px-[0.5rem] rounded-[8px] hover:text-colorLight transition-all ${active === "/about" ? "text-navBarActive shadow-box-shadow-border-bottom" : ""}`}
                            >
                                {keyToText("NAVIGATION.ABOUT_TEXT")}
                            </Link>
                        </li>
                        <li className="animate-navBarItem-slide-in-top4">
                            <Link
                                onClick={() => setShowMobileNav((state) => !state)}
                                href="/contactMe"
                                passHref
                                className={`py-[0.25rem] px-[0.5rem] rounded-[8px] hover:text-colorLight transition-all ${active === "/contactMe" ? "text-navBarActive shadow-box-shadow-border-bottom" : ""}`}
                            >
                                {keyToText("NAVIGATION.CONTACT_TEXT")}
                            </Link>
                        </li>
                    </ul>
                }
                {isMobile && (
                    <div
                        className={`active:bg-slate-800 h-[2rem] shadow-box-shadow-top-and-bottom cursor-pointer absolute bottom-0 padding-[0.5rem] transition-all w-full flex justify-center items-center ${!showMobileNav ? "bottom-[-2rem] bg-bg-transparent-black-main" : "bottom-0"}`}
                        onClick={() => setShowMobileNav((state) => !state)}
                    >
                        <span>{isMobile && showMobileNav ? <CloseIcon /> : <MenuIcon />}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
