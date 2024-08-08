"use client";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useExtractText } from "@PortfolioApp/hooks";
import { homeBG } from "../../public/backgrounds";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
    const { keyToText } = useExtractText();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#00000091] to-[#49998538] overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ y: "-20%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ zIndex: -1 }}
            >
                <Image
                    src={homeBG}
                    alt="BG IMAGE"
                    className="w-full min-h-screen object-cover brightness-75"
                    priority
                />
            </motion.div>

            <motion.div
                className="text-center max-w-4xl mx-auto px-5 py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <RocketLaunchIcon className="text-[#dfdfdf] text-6xl mr-4" />
                    <h1 className="sm:text-2xl md:text-5xl font-extrabold text-colorMedLightBlue drop-shadow-homeTextShadow">
                        {keyToText("HOME.WELCOME_MAIN")}
                    </h1>
                </div>
                <p className="text-lg text-[#a2c9fc] mb-8 drop-shadow-homeTextShadow">
                    {keyToText("HOME.SECONDARY_TEXT")}
                </p>
                <motion.button
                    className="px-6 py-3 bg-[#1B263B] text-[#E0E1DD] font-bold rounded-full drop-shadow-homeTextShadow hover:bg-[#68948a] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/projects" passHref>
                        Get Started
                    </Link>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default HomePage;
