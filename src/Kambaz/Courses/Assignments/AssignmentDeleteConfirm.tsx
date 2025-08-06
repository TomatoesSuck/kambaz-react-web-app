import { Modal, Button } from "react-bootstrap";

interface AssignmentDeleteConfirmProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  assignmentTitle: string;
}

export default function AssignmentDeleteConfirm({ 
  show, 
  onHide, 
  onConfirm, 
  assignmentTitle 
}: AssignmentDeleteConfirmProps) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Assignment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove the assignment "{assignmentTitle}"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}