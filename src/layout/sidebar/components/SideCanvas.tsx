import { Offcanvas } from "react-bootstrap";
import { SidebarStore } from "../SidebarStore";

type TSideCanvasProps = {
    show: boolean;
    onClose: () => void;
};

export const SideCanvas: React.FC<TSideCanvasProps> = ({ show, onClose }) => {
    return (
        <div>
            <Offcanvas show={show} onHide={onClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Admin panel</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarStore />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
