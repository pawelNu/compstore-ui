import { TNavbarProps } from "../types/TNavbarProps";
import { useState } from "react";
import { UserRoleButton } from "../components/buttons/UserRoleButton";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navbarStyles } from "../static/styles/Navbar";
import { navbarElements } from "./navbarConfig";

export const NavbarStore: React.FC<TNavbarProps> = ({ onUserRoleChange }) => {
    const [userRole, setUserRole] = useState("Customer");

    const handleUserRoleChange = (role: string) => {
        setUserRole(role);
        onUserRoleChange(role);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyles}>
            <Container className="px-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {navbarElements.map((label, index) => (
                            <Nav.Link key={index} active href={label.link}>
                                {label.name}
                            </Nav.Link>
                        ))}
                        {userRole !== "Customer" && (
                            <Nav.Link active href="/admin-panel">
                                Admin panel
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
                <UserRoleButton onUserRoleChange={handleUserRoleChange} />
            </Container>
        </Navbar>
    );
};
