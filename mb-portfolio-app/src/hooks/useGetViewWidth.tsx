import { useEffect, useState } from "react";

const mobileThreshold = 768;
const isMounted = typeof window !== "undefined";
export const useGetViewWidth = () => {
    const [windowWidth, setWindowWidth] = useState(isMounted ? window.innerWidth : mobileThreshold + 1);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const isMobile = windowWidth < mobileThreshold;

    return { isMobile };
};

export default useGetViewWidth;
