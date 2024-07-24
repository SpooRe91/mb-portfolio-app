"use client";
import { useEffect, useState } from "react";

const mobileThreshold = 768;

const useGetViewWidth = () => {
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
