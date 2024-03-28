import { Link } from "react-router-dom";

type ToastWithLinkProps = {
    msg: string;
    direction: string;
    link: string;
};

export const ToastWithLink: React.FC<ToastWithLinkProps> = ({ msg, direction, link }) => {
    return (
        <div>
            {msg}
            <Link to={link}>{direction}</Link>
        </div>
    );
};
