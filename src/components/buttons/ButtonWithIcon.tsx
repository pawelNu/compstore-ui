import { ReactNode } from "react";
import { Button } from "react-bootstrap";

export type TButtons = {
    title: string;
    variant?: string;
    divClassName?: string;
    link?: string;
    icon?: ReactNode;
};

type ButtonWithIconProps = {
    config: TButtons;
};

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    config: { title, variant, divClassName, link, icon },
}) => {
    return (
        <div className={divClassName}>
            <Button variant={variant} href={link}>
                <div className="d-inline-flex align-items-center">
                    <div>{title}</div>
                    <div>{icon}</div>
                </div>
            </Button>
        </div>
    );
};
