import { UUID } from "crypto";
import { useState } from "react";
import { ConfirmDeleteModal } from "../../../../layout/components/modals/ConfirmDeleteModal";

export const PCActionsButton = ({
    deletePc,
    id,
}: {
    deletePc: (id: UUID) => void;
    id: UUID;
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);

    const confirmDelete = () => {
        deletePc(id);
        handleClose();
    };

    return (
        <div className="dropdown ms-3">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Actions
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="/">
                        Update
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"></hr>
                </li>
                <li>
                    <button
                        className="dropdown-item bg-danger text-white"
                        onClick={handleShow}
                    >
                        Delete
                    </button>
                </li>
            </ul>

            <ConfirmDeleteModal
                show={showDeleteModal}
                handleClose={handleClose}
                handleConfirmDelete={confirmDelete}
            />
        </div>
    );
};
