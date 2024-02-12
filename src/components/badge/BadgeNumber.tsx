import { Badge } from "react-bootstrap";

type BadgeNumberProps = {
    value: string | number;
    variant?: "primary" | "secondary" | "danger";
};

export const BadgeNumber: React.FC<BadgeNumberProps> = ({ value, variant }) => {
    return <Badge bg={variant}>{value}</Badge>;
};
