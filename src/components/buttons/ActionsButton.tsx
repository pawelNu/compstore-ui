import { UUID } from "crypto";
import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ConfirmDeleteModal } from "../modals/ConfirmDeleteModal";
import { InfoModal } from "../modals/ErrorModal";

type Props = {
    id: UUID;
    editLink: string;
    deleteItem: (id: UUID) => Promise<{ success: boolean; error?: string }>;
};

export const ActionsButton: React.FC<Props> = ({ id, editLink, deleteItem }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [error, setError] = useState<string>("");

    const handleClose = () => {
        setShowDeleteModal(false);
        setError("");
    };

    const handleShow = () => setShowDeleteModal(true);

    const confirmDelete = async () => {
        const result = await deleteItem(id);
        if (!result.success) {
            if (result.error) {
                setError(result.error);
                setShowDeleteModal(false);
                setShowErrorModal(true);
            } else {
                setError("Unknown error: file: ActionsButton.tsx:   confirmDelete   confirmDelete");
                setShowDeleteModal(false);
                setShowErrorModal(true);
            }
        } else {
            handleClose();
        }
    };

    return (
        <div className="ms-3">
            <DropdownButton id="actions-dropdown" variant="secondary" title="Actions">
                <Dropdown.Item href={editLink + id}>Edit</Dropdown.Item>
                <Dropdown.Item className="bg-danger text-white" onClick={handleShow}>
                    Delete
                </Dropdown.Item>
            </DropdownButton>

            <ConfirmDeleteModal show={showDeleteModal} handleClose={handleClose} handleConfirmDelete={confirmDelete} />

            {error && <InfoModal message={error} show={showErrorModal} handleClose={handleClose} />}
        </div>
    );
};
