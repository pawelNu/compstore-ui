import { Offcanvas } from "react-bootstrap";

type TSideCanvasProps = {
    show: boolean;
    onClose: () => void;
};

export const SideCanvas: React.FC<TSideCanvasProps> = ({ show, onClose }) => {
    return (
        <div>
            <Offcanvas show={show} onHide={onClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
