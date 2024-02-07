import { Dropdown, DropdownButton } from "react-bootstrap";
import { links } from "../../../config/links";

export const ActionsButton = () => {
    return (
        <DropdownButton
            id="actions-dropdown"
            variant="secondary"
            title="Actions"
        >
            {/* TODO add edit functions */}
            <Dropdown.Item href={links.processorBrandsEdit}>Edit</Dropdown.Item>
            {/* TODO add delete functions */}
            <Dropdown.Item className="bg-danger text-white">
                Delete
            </Dropdown.Item>
        </DropdownButton>
    );
};
