"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useExtractText } from "@PortfolioApp/hooks";
import logo from "/public/MB-logo.webp";
import Image from "next/image";

export const NavBar = () => {
    const path = usePathname();
    const { keyToText } = useExtractText();
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(path);
    }, [path]);

    return (
        <div className="sticky w-full md:py-[1.75rem] md:px-[1.5rem] sm:p-[1rem] bg-bg-transparent-black-main top-0 left-0 z-[20] backdrop-blur-[5px] shadow-box-shadow-dark">
            <div className="flex md:flex-row sm:flex-col sm:gap-[0.75rem] items-center justify-between">
                <div className="">
                    <Link className="animate-navBarLogo-fade-in" href={"/"}>
                        <Image
                            src={logo}
                            alt="Logo"
                            width={64}
                            height={64}
                            className="rounded-[10px] border-y-pink-900 md:hover:hover:shadow-box-shadow-logo overflow-hidden transition-all"
                        />
                    </Link>
                </div>
                <ul
                    className={`flex flex-wrap md:flex-row sm:flex-col sm:items-center gap-4 text-lg text-navBarInactive`}
                >
                    <li className="animate-navBarItem-slide-in-top1">
                        <Link
                            href="/"
                            passHref
                            className={` hover:text-colorLight transition-all ${active === "/" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            {keyToText("NAVIGATION.HOME_TEXT")}
                        </Link>
                    </li>
                    <li className="animate-navBarItem-slide-in-top2">
                        <Link
                            href="/projects"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/projects" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            {keyToText("NAVIGATION.PROJECTS_TEXT")}
                        </Link>
                    </li>
                    <li className="animate-navBarItem-slide-in-top3">
                        <Link
                            href="/about"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/about" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            {keyToText("NAVIGATION.ABOUT_TEXT")}
                        </Link>
                    </li>
                    <li className="animate-navBarItem-slide-in-top4">
                        <Link
                            href="/contactMe"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/contactMe" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            {keyToText("NAVIGATION.CONTACT_TEXT")}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
