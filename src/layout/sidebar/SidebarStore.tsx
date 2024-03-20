import { Accordion, ListGroup } from "react-bootstrap";
import { sidebarElements } from "./sidebarConfig";

export const SidebarStore = () => {
    return (
        <Accordion alwaysOpen>
            {sidebarElements.map((item, index) => (
                <Accordion.Item key={index} eventKey={`${index}`}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            {item.subMenu.map((subItem, index) => (
                                <ListGroup.Item
                                    action
                                    key={index}
                                    href={subItem.link}
                                >
                                    {subItem.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};
