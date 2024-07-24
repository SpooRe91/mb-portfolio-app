"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import useGetViewWidth from "@PortfolioApp/hooks/useGetViewWidth";

const NavBar = () => {
    const path = usePathname();
    const [active, setActive] = useState("");

    const { isMobile } = useGetViewWidth();

    useEffect(() => {
        setActive(path);
    }, [path]);

    return (
        <div className="w-full py-[1.75rem] px-[1.5rem] mb-[1rem] bg-bg-transparent-black-main shadow-lg sticky top-0 left-0 z-[20]">
            <div
                className={`flex ${!isMobile ? `flex-row` : "flex-col items-center"} justify-between items-center`}
            >
                <div
                    className={`mx-3 text-welcome-text-color ${!isMobile ? "text-2xl" : "text-lg mb-4"} font-bold`}
                >
                    M.B. Portfolio
                </div>
                <ul
                    className={`flex flex-wrap ${!isMobile ? "flex-row" : "flex-col items-center"} gap-4 text-lg text-welcome-text-color`}
                >
                    <li>
                        <Link
                            href="/"
                            passHref
                            className={`hover:text-rawUmber transition-all ${active === "/" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            passHref
                            className={`hover:text-rawUmber transition-all ${active === "/projects" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            passHref
                            className={`hover:text-rawUmber transition-all ${active === "/about" ? "text-navBarActive underline drop-shadow-navDropShadow" : ""}`}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
