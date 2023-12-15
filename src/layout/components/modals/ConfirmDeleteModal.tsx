import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

export const ConfirmDeleteModal = ({
  show,
  handleClose,
  handleConfirmDelete,
}: {
  show: boolean;
  handleClose: () => void;
  handleConfirmDelete: () => void;
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Confirm Delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
