import { Dropdown } from "react-bootstrap";
import { arrowDown, arrowUp } from "../../../config/symbols";

export const SortingButton = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="page-size">
                {/* TODO add changeable showed text */}
                Sorted by price {arrowDown}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {/* TODO add sorting options */}
                <Dropdown.Item key={1}>
                    {arrowDown} Price descending
                </Dropdown.Item>
                <Dropdown.Item key={2}>{arrowUp} Price ascending</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
