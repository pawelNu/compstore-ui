import { Link } from "react-router-dom";

export const Baner = () => {
    return (
        <div className="container mt-2">
            <Link to={"/"}>
                <img
                    src={require("./../../../images/store_logo.png")}
                    alt="Logo"
                    width={300}
                />
            </Link>
        </div>
    );
};
