import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            colors: {
                navBarActive: "#edf1ec",
                greenHover: "#98f090",
                rawUmber: "#94654B",
                kobicha: "#6A3B23",
                sealBrown: "#45210E",
                blackBean: "#341304",
                licorice: "#130101",
                colorDark: "#638889",
                colorMediumDark: "#9DBC98",
                colorMediumLight: "#EBD9B4",
                colorLight: "#F9EFDB",
                "bg-transparent-black-main": "#000000b8",
                "bg-transparent-black-secondary": "#000000b3",
                "welcome-text-color": "#d3ba94",
                "tech-text-color": "#c8e7ee",
                "about-text-color": "#DAD3BE",
            },
            boxShadow: {
                "box-shadow-main": "0px 8px 20px -4px #968676",
                "box-shadow-secondary": "0px 6px 20px -4px #a08571",
                "image-container-box-shadow": "0px 0px 20px -5px #bcb9b3",
            },
            fontFamily: {
                sans: ["Titillium Web", "PT Sans", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "main-bg-image": "url(../../../public/portfolio-background.webp)",
            },
            height: {
                "350px": "350px",
            },
            dropShadow: {
                navDropShadow: "0px 0px 20px #e7c9af",
            },
        },
    },
    plugins: [],
};

export default config;
