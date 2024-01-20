import "./../static/styles/Navbar.css";

import { TNavbarProps } from "../types/TNavbarProps";
import { useState } from "react";
import { AddNewProductButton } from "../components/buttons/AddNewProductButton";
import { UserRoleButton } from "../components/buttons/UserRoleButton";

export const Navbar: React.FC<TNavbarProps> = ({ onUserRoleChange }) => {
    const [userRole, setUserRole] = useState("Customer");

    const handleUserRoleChange = (role: string) => {
        setUserRole(role);
        onUserRoleChange(role);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom mt-2">
            <div className="container px-0">
                <div className="container-fluid px-0">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navBar"
                        aria-controls="navBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active text-red"
                                    href="/"
                                >
                                    Promotions and more
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Loan installment
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Returns and complaints
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <UserRoleButton onUserRoleChange={handleUserRoleChange} />
                {userRole !== "Customer" && <AddNewProductButton />}
            </div>
        </nav>
    );
};
