import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

type NotificationProps = {
    error?: string;
    notification?: string;
    handleSetMessage: () => void;
};

export const NotificationComponent = ({ error, notification, handleSetMessage }: NotificationProps) => {
    const [currentMessage, setCurrentMessage] = useState<string>(error || notification || "");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentMessage("");
            handleSetMessage();
        }, 5000);

        return () => clearTimeout(timeout);
    },[handleSetMessage]);

    return (
        <div
            className="w-full flex flex-col flex-wrap gap-[1.5rem] items-center relative z-[50] transition-all"
        >
            <Alert style={{ fontSize: "1rem" }} severity={error ? "error" : "success"}>
                <>{currentMessage}</>
            </Alert>
        </div>
    );
};

export default NotificationComponent;
