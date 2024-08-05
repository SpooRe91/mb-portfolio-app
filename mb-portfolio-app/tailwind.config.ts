import type { Config } from "tailwindcss";
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "320px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            keyframes: {
                "slide-out-fade-out": {
                    "0%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translateX(100%)",
                    },
                },
                "slide-in-fade-in": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(100%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                "sidebar-slide-in": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                "sidebar-slide-out": {
                    "0%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                    "99%": {
                        opacity: "0",
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(-100%)",
                        position: "absolute",
                    },
                },
                "homePage-slide-in-top": {
                    from: {
                        transform: "translateY(-100%)",
                    },
                    to: {
                        transform: "translateY(0)",
                    },
                },
                "element-fade-in": {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                "navBar-slide-in-top": {
                    from: {
                        transform: "translateY(-1000%)",
                    },
                    to: {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "slide-out-fade-out": "slide-out-fade-out 0.25s ease-out forwards",
                "slide-in-fade-in": "slide-in-fade-in 0.25s ease-in forwards",
                "sidebar-slide-in": "sidebar-slide-in 0.15s ease-in forwards",
                "sidebar-slide-out": "sidebar-slide-out 0.15s ease-in forwards",
                "homePage-slide-in-top": "homePage-slide-in-top 0.5s ease-in forwards",
                "homePage-fade-in": "element-fade-in 1.5s ease-in forwards",
                "navBarItem-slide-in-top1": "navBar-slide-in-top 0.35s ease-in forwards",
                "navBarItem-slide-in-top2": "navBar-slide-in-top 0.5s ease-in forwards",
                "navBarItem-slide-in-top3": "navBar-slide-in-top 0.75s ease-in forwards",
                "navBarItem-slide-in-top4": "navBar-slide-in-top 1s ease-in forwards",
                "navBarLogo-fade-in": "element-fade-in 1.5s ease-in forwards",
            },
            colors: {
                navBarActive: "#edf1ec",
                navBarInactive: "#61bea5",
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
                colorMedLightBlue: "#61bea5",
                colorDarkMedBlue: "#93d9db",
                "bg-transparent-black-main": "#000000b8",
                "bg-transparent-black-secondary": "#000000b3",
                "bg-transparent-black-tretriary": "#00000029",
                "bg-transparent-project-hover": "#1d2121",
                "welcome-text-color": "#d3ba94",
                "tech-text-color": "#c8e7ee",
                "about-text-color": "#DAD3BE",
                "input-field-bg": "#63888957",
            },
            boxShadow: {
                "box-shadow-main": "0px 8px 20px -4px #968676",
                "box-shadow-secondary": "0px 6px 20px -4px #a08571",
                "image-container-box-shadow": "0px 0px 20px -5px #bcb9b3",
                "box-shadow-dark": "1px 1px 20px #131310",
                "box-shadow-logo": "1px 7px 30px #343737",
                "box-shadow-border-bottom": "0px 2px 4px #343737",
                "box-shadow-border-top": "0px -2px 4px #343737",
            },
            fontFamily: {
                sans: ["JetBrains Mono", "Titillium Web", "PT Sans", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            height: {
                "350px": "350px",
                "screen-h-md": "calc(100vh - (168px + 94.38px))",
                "screen-h-sm": "calc(100vh - (150.38px + 238.38px))",
            },
            minHeight: {
                "bg-image-height": "calc(100vh + 10rem)",
                "screen-h-md": "calc(100vh - (168px + 94.38px))",
                "screen-h-sm": "calc(100vh - (150.38px + 238.38px))",
            },
            maxHeight: {
                "max-screen-h-md": "calc(100vh - (168px + 94.38px))",
                "max-screen-h-sm": "calc(100vh - (150.38px + 238.38px))",
            },
            dropShadow: {
                navDropShadow: "0px 0px 20px #e7c9af",
                logoShadow: "2px 1px 1px #966348",
            },
        },
    },
    plugins: [],
};

export default config;
