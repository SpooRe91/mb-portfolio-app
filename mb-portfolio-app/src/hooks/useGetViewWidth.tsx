"use client";
import { useEffect, useState } from "react";

const mobileThreshold = 768;
/**
 * Hook to determine if the view width is considered mobile.
 * Adds an eventListener to the window object and listens for width changes.
 * Whenever the window is resized, the useEffect is recalled and a new value is returned.
 * @type { isMobile: boolean }
 * @returns isMobile - Object with a boolean indicating if the view width is mobile.
 */
const useGetViewWidth = (): { isMobile: boolean } => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (isMounted) {
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMounted]);

    const isMobile = mobileThreshold > windowWidth;
    return { isMobile };
};

export default useGetViewWidth;
