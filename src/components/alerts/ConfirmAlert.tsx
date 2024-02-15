import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { createRoot } from "react-dom/client";

export type ConfirmAlertProp = {
    message: string;
    variant: "primary" | "success" | "info";
    timeout?: number;
};

export const ConfirmAlert: React.FC<ConfirmAlertProp> = ({
    message,
    variant,
    timeout,
}) => {
    const [visible, setVisible] = useState(true);

    if (timeout === undefined) {
        timeout = 2;
    }

    const time = timeout * 1000;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, time);

        return () => clearTimeout(timeout);
    }, [time]);

    return (
        <>
            {visible && (
                <div
                    style={{
                        position: "fixed",
                        top: "5px",
                        left: 0,
                        marginLeft: "5px",
                        width: "99%",
                        zIndex: 9999,
                    }}
                >
                    <Alert key={variant} variant={variant}>
                        {message}
                    </Alert>
                </div>
            )}
        </>
    );
};

export const renderAlert = (props: ConfirmAlertProp) => {
    const alertContainer = document.createElement("div");
    document.body.appendChild(alertContainer);

    const root = createRoot(alertContainer);

    root.render(<ConfirmAlert {...props} />);
};
