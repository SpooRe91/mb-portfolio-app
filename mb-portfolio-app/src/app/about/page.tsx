"use client";
import { TextBlock, IconsContainer } from "@PortfolioApp/Components";
import { useMemo } from "react";
import { ICON_NAMES_URLS } from "../constants/constants";
import { icons } from "../../../public/icons/index";
import { v4 as uuid } from "uuid";
import { useExtractText } from "@PortfolioApp/hooks";
import Image from "next/image";
import { aboutBG } from "../../../public/backgrounds";

type IconList = {
    src: string;
    name: string;
    extUrl: string;
}[];

const About = () => {
    const { keyToText } = useExtractText();

    const iconList = useMemo((): IconList => {
        return Object.values(icons).map((src: string, i) => ({
            src,
            name: ICON_NAMES_URLS[i].name,
            extUrl: ICON_NAMES_URLS[i].extUrl,
        }));
    }, []);

    return (
        <section className="relative min-h-screen md:min-h-screen-h-md sm:min-h-screen-h-sm flex flex-col items-center justify-center">
            <Image
                src={aboutBG}
                alt="BG IMAGE"
                className="w-full min-h-bg-image-height object-cover fixed z-[-1] brightness-[0.5]"
                priority
            />
            <div className="z-[10] relative flex flex-col items-center text-about-text-color sm:gap-[0.5rem]">
                <div className="flex flex-wrap gap-5 flex-col align-middle items-center max-w-4xl bg-bg-transparent-black-main p-[1.25rem] rounded-[5px] shadow-box-shadow-border-bottom">
                    <h1 className="text-3xl font-bold mb-4 sm:mb-0">{keyToText("ABOUT.HEADER")}</h1>
                    <p className={`text-left md:text-lg sm:text-sm`}>{keyToText("ABOUT.FIRST_PARAGRAPH")}</p>
                    <p className={`text-left md:text-lg sm:text-sm`}>{keyToText("ABOUT.SECOND_PARAGRAPH")}</p>
                </div>
                <div className="flex flex-col">
                    <TextBlock
                        title={keyToText("PROJECTS.TECHS_I_USE")}
                        titleClassName="mb-0 sm:text-base md:text-xl"
                        className="flex flex-col items-center text-center justify-cetetext-block p-2 text-tech-text-color"
                    />
                    <div className="max-w-4xl w-850px w-max-[850px] bg-bg-transparent-black-main rounded-[8px] mb-[15rem] shadow-box-shadow-border-bottom">
                        <div className="flex flex-row flex-wrap p-[1rem] justify-center gap-[1rem] w-full max-w-[750px]">
                            {iconList.map(({ src, name, extUrl }) => (
                                <IconsContainer
                                    key={uuid()}
                                    src={src}
                                    name={name}
                                    extUrl={extUrl}
                                    imgClassname={`w-full h-full ${name === "GitHub" && "brightness-[1] invert"}`}
                                    containerClassName="sm:w-[35px] sm:h-[35px] md:w-[64px] md:h-[64px] sm:rounded-[50%] md:rounded-none"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
