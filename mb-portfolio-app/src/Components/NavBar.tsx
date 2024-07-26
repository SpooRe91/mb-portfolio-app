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
        <div className="sticky w-full py-[1.75rem] px-[1.5rem] mb-[1rem] bg-bg-transparent-black-main top-0 left-0 z-[20] shadow-box-shadow-dark">
            <div
                className={`flex ${!isMobile ? `flex-row` : "flex-col items-center"} justify-between items-center`}
            >
                <Link href={"/"}>
                    <h1
                        className={`rounded-[8px] backdrop-blur-[5px] shadow-box-shadow-main py-[0.2rem] px-[0.4rem] ${!isMobile ? "hover:text-colorLight active:text-colorMediumLight" : ""} text-navBarInactive font-bold tracking-wide transition-all duration-300 ease-in-out ${!isMobile ? "text-2xl" : "text-lg mb-4"}`}
                    >
                        M.B. Portfolio
                    </h1>
                </Link>
                <ul
                    className={`flex flex-wrap ${!isMobile ? "flex-row" : "flex-col items-center"} gap-4 text-lg text-navBarInactive`}
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
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
