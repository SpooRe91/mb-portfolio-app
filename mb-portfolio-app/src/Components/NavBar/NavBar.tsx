"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const path = usePathname();
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(path);
    }, [path]);

    return (
        <div className="sticky w-full md:py-[1.75rem] md:px-[1.5rem] md:mb-[1rem] sm:p-[1rem] bg-bg-transparent-black-main top-0 left-0 z-[20] backdrop-blur-[5px] shadow-box-shadow-dark">
            <div className="flex md:flex-row sm:flex-col sm:gap-[0.75rem] items-center justify-between">
                <Link href={"/"}>
                    <h1 className="rounded-[8px] backdrop-blur-[5px] shadow-box-shadow-logo py-[0.2rem] px-[0.4rem] md:hover:text-colorLight text-navBarInactive font-bold tracking-wide transition-all duration-300 ease-in-out md:text-2xl sm:text-lg">
                        M.B. Portfolio
                    </h1>
                </Link>
                <ul
                    className={`flex flex-wrap md:flex-row sm:flex-col sm:items-center gap-4 text-lg text-navBarInactive`}
                >
                    <li>
                        <Link
                            href="/"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/projects" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/about" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contactMe"
                            passHref
                            className={`hover:text-colorLight transition-all ${active === "/contactMe" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
