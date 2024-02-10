import { MouseEventHandler, ReactNode } from "react";
import { Button } from "react-bootstrap";

export type TButtons = {
    title: string;
    type?: "button" | "submit" | "reset";
    variant?: string;
    divClassName?: string;
    link?: string;
    icon?: ReactNode;
};

type ButtonWithIconProps = {
    config: TButtons;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    config: { title, type, variant, divClassName, link, icon },
    onClick,
}) => {
    return (
        <div className={divClassName}>
            <Button type={type} variant={variant} href={link} onClick={onClick}>
                <div className="d-inline-flex align-items-center">
                    <div>{title}</div>
                    <div className="ms-2">{icon}</div>
                </div>
            </Button>
        </div>
    );
};
