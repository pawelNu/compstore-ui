import { useState } from "react";
import { UserRoleButton } from "../../components/buttons/UserRoleButton";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navbarStyles } from "../../static/styles/Navbar";
import { navbarElements } from "./navbarConfig";
import { SideCanvas } from "../sidebar/components/SideCanvas";
import { useUser } from "../../redux/UserProvider";

export const NavbarStore = () => {
    const { userRole, userRoleChange } = useUser();
    const [showSideCanvas, setShowSideCanvas] = useState(false);

    const handleUserRoleChange = (role: string) => {
        userRoleChange(role);
    };

    const handleAdminPanelClick = () => {
        setShowSideCanvas(true);
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
                            <Nav.Link
                                type="button"
                                active
                                onClick={handleAdminPanelClick}
                            >
                                Admin panel
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
                <UserRoleButton onUserRoleChange={handleUserRoleChange} />
            </Container>
            <SideCanvas
                show={showSideCanvas}
                onClose={() => setShowSideCanvas(false)}
            />
        </Navbar>
    );
};
