import { Dropdown } from "react-bootstrap";
import { TSortingButton } from "../../types/TSortingButton";
import { arrowUp, arrowDown } from "../../config/symbols";

export const SortingButton: React.FC<TSortingButton> = ({ ascendingFlag, onChangeSorting }) => {
    const sortingConfig = new Map([
        ["ascending", true],
        ["descending", false],
    ]);

    let sortedBy = "Sorted by price";

    if (ascendingFlag === true) {
        sortedBy += ` ascending ${arrowUp}`;
    } else if (ascendingFlag === false) {
        sortedBy += ` descending ${arrowDown}`;
    } else {
        sortedBy = "Not sorted";
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="page-size">
                {sortedBy}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {Array.from(sortingConfig.entries()).map(([key, value]) => (
                    <Dropdown.Item key={key} onClick={() => onChangeSorting(value)}>
                        {value === true ? arrowUp : arrowDown} Price {key}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
