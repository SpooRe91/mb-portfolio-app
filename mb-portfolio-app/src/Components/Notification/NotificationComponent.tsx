import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

type NotificationProps = {
    error?: string;
    notification?: string;
    mainClassName?: string;
    secondaryClassname?: string;
    hasAnimation?: boolean;
    handleClearMessage?: () => void;
};

/**
 *
 * This component accepts the following props:
 *
 * - `error` - A string which represents an error message.
 * - `notification` - A string which represents an error message.
 * - `mainClassName` - String, which should be the styling applied to the main container of the NotificationComponent.
 * - `secondaryClassname` - String, which should be the styling applied to the Alert component inside the container of the NotificationComponent.
 * - `hasAnimation` - Boolean, indicates whether the notification should animate and slide to the right off screen:
 * animation: ` "slide-out-fade-out": {
                    "0%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translateX(100%)",
                    },
                },`
 * - `handleClearMessage` - String, which should be the styling applied to the main container of the NotificationComponent.
 * 
 * Code structure:
 * `<div className="w-full flex flex-col flex-wrap gap-[1.5rem] md:top-[1rem] md:right-[1rem] mt-[1rem] items-center absolute z-[50] transition-all">
    <Alert
        style={{ fontSize: "1rem" }}
        severity={error ? "error" : "success"}
        className={`md:text-[1rem] sm:text-[0.8rem] fixed md:top-[1rem] md:right-[1rem]`}
    >
     <>{currentMessage}</>
    </Alert>
  </div>`
 */
export const NotificationComponent = ({
    error,
    notification,
    handleClearMessage,
    hasAnimation = false,
    mainClassName,
    secondaryClassname,
}: NotificationProps) => {
    const [currentMessage, setCurrentMessage] = useState<string>(error || notification || "");
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (hasAnimation) {
                setIsVisible(false);
                setTimeout(() => {
                    if (handleClearMessage) {
                        handleClearMessage();
                    }
                }, 250); // Duration of the animation
            } else {
                setCurrentMessage("");
                if (handleClearMessage) {
                    handleClearMessage();
                }
            }
        }, 4000); // Duration before starting the hide process

        return () => clearTimeout(timeout);
    }, [handleClearMessage, hasAnimation]);

    return (
        <div
            className={`${mainClassName}`}
        >
            <Alert
                style={{ fontSize: "1rem" }}
                severity={error ? "error" : "success"}
                className={`${secondaryClassname} ${isVisible ? "" : hasAnimation ? "animate-slide-out-fade-out" : ""} ${!isVisible ? "" : hasAnimation ? "animate-slide-in-fade-in" : ""}`}
            >
                <>{currentMessage}</>
            </Alert>
        </div>
    );
};

export default NotificationComponent;
