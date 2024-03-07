import { MouseEventHandler, ReactNode } from "react";
import { Badge, Button } from "react-bootstrap";

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
    badgeValue?: number;
    badgeVariant?: "secondary" | "danger";
};

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    config: { title, type, variant, divClassName, link, icon },
    onClick,
    badgeValue,
    badgeVariant,
}) => {
    if (badgeValue === undefined) {
        badgeValue = 0;
    }
    return (
        <div className={divClassName}>
            <Button type={type} variant={variant} href={link} onClick={onClick}>
                <div className="d-inline-flex align-items-center">
                    <div>{title}</div>
                    <div className="ms-2">{icon}</div>
                    {badgeValue > 0 && (
                        <div className="ms-2">
                            <Badge bg={badgeVariant}>{badgeValue}</Badge>
                        </div>
                    )}
                </div>
            </Button>
        </div>
    );
};
