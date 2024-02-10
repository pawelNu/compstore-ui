import "../static/styles/Navbar.js";

import { useState } from "react";
import { UserRoleButton } from "../components/buttons/UserRoleButton";
import { navbarStyles } from "../static/styles/Navbar.js";
import { TNavbarProps } from "../types/TNavbarProps";
import { links } from "../config/links.js";

export const Navbar: React.FC<TNavbarProps> = ({ onUserRoleChange }) => {
    const [userRole, setUserRole] = useState("Customer");

    const handleUserRoleChange = (role: string) => {
        setUserRole(role);
        onUserRoleChange(role);
    };

    return (
        <nav className="navbar navbar-expand-lg mt-2" style={navbarStyles}>
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
                                    href={links.mainPage}
                                >
                                    Promotions and more
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href={links.mainPage}
                                >
                                    Loan installment
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href={links.mainPage}
                                >
                                    Returns and complaints
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href={links.mainPage}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <UserRoleButton onUserRoleChange={handleUserRoleChange} />
            </div>
        </nav>
    );
};
