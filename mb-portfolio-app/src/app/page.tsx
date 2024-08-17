"use client";
import Image from "next/image";
import Link from "next/link";
import { TextCard } from "@PortfolioApp/Components";
import { useExtractText } from "@PortfolioApp/hooks";
import { homeBG } from "../../public/backgrounds";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { HOME_PAGE_CARD_TITLES } from "@PortfolioApp/app/constants/constants";

const HomePage = () => {
    const { keyToText } = useExtractText();

    return (
        <section className="relative md:min-h-screen-h-md sm:min-h-screen-h-sm-noNav flex flex-col items-center justify-center bg-gradient-to-br overflow-hidden sm:pt-[5rem] sm:pb-[15rem]">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ scale: 1.1, y: "-10%" }}
                animate={{ scale: 1, y: "0%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ zIndex: -1 }}
            >
                <Image
                    src={homeBG}
                    alt="BG IMAGE"
                    className="w-full min-h-screen object-cover fixed brightness-[0.5]"
                    priority
                />
            </motion.div>

            <motion.div
                className="text-center max-w-4xl mx-auto px-[1rem]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <div className="flex items-center justify-center mb-6 sm:flex-wrap md:flex-nowrap">
                    <RocketLaunchIcon className="text-[#dfdfdf] sm:text-2xl md:text-5xl mr-4" />
                    <h1
                        className="sm:text-2xl md:text-5xl font-extrabold text-transparent"
                        style={{
                            textShadow:
                                "1px 1px 1px #000000, 2px 2px 10px #5ab099, 2px 2px 10px #5ab099, 2px 2px 0px #5eb79f",
                        }}
                    >
                        {keyToText("HOME.WELCOME_MAIN")}
                    </h1>
                </div>
                <p className="text-lg text-[#a2c9fc] mb-8 drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]">
                    {keyToText("HOME.SECONDARY_TEXT")}
                </p>
                <motion.button
                    className="px-6 py-3 bg-[#1B263B] text-[#E0E1DD] font-bold rounded-full drop-shadow-homeTextShadow hover:bg-[#68948a] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link className="drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]" href="/projects">
                        Get Started
                    </Link>
                </motion.button>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {HOME_PAGE_CARD_TITLES.map((key, i) => (
                        <div
                            key={i}
                            className="text-[#a2c9fc] p-4 bg-[#1B263B] rounded-lg shadow-lg drop-shadow-homeTextShadow"
                        >
                            <p>{keyToText(key)}</p>
                            <TextCard
                                title={keyToText(`HOME.${key}.TITLE`) as string}
                                text={keyToText(`HOME.${key}.TEXT`) as string}
                                titleClassName="font-bold mb-2 text-colorDarkMedBlue drop-shadow-homeTextShadow sm:text-[1rem] md:text-[1.25rem]"
                                textClassName="text-[#a2c9fc] drop-shadow-homeTextShadow sm:text-[0.85rem] md:text-[1rem]"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default HomePage;
