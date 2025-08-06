import { Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";


export default function AssignmentsControls() {
  const navigate = useNavigate();
  const { cid } = useParams();

  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
  };

  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Search..."
          id="wd-search-assignments"
          className="mb-1 w-25"
        />
      </div>
      <div className="d-flex">
        <Button
          id="wd-add-assignments-cat"
          variant="secondary"
          size="lg"
          className="me-1"
        >
          <FaPlus className="me-2" />
          Group
        </Button>

        <Button
          id="wd-add-assignments"
          variant="danger"
          size="lg"
          onClick={handleAddAssignment}
        >
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}
