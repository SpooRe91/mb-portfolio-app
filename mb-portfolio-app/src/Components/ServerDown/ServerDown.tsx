import React from "react";
import TextBlock from "../TextBlock/TextBlockComponent";

const ServerDown = () => {

    return (
        <div className="flex flex-col items-center gap-1 max-w- w-full bg-bg-transparent-black-main shadow-box-shadow-dark">
            <h1 className="text-center md:text-4xl sm:text-xl px-5 py-8 text-colorMediumDark">
                SORRY, SEEMS THE SERVER IS HAVING A BAD DAY
            </h1>
            <TextBlock
                title={"Please try again later!"}
                className="flex flex-col gap-4 items-center text-center justify-cetetext-block p-2 text-tech-text-color"
            >
            </TextBlock>
        </div>
    );
};

export default ServerDown;
