import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";


export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isEditing = !!aid;

  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser?.role === "FACULTY";

  const [assignment, setAssignment] = useState({
    _id: "",
    course: cid,
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });


  useEffect(() => {
    if (isEditing && existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [isEditing, existingAssignment]);
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (isEditing) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, _id: uuidv4() }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-edit-assignment" className="p-3">
      <h2>{isEditing ? "Edit Assignment" : "Create New Assignment"}</h2>
      {/* Assignment Name */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={assignment.title}
            onChange={handleChange}
            disabled={!isFaculty}
          />
      </Form.Group>

      {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={4}
            value={assignment.description}
            onChange={handleChange}
            disabled={!isFaculty}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            name="points"
            type="number"
            value={assignment.points}
            onChange={handleChange}
            disabled={!isFaculty}
          />
        </Form.Group>

        {/* Assign To */}
        <Form.Group className="mb-3" controlId="assignTo">
          <Form.Label>Assign to</Form.Label>
          <Form.Control type="text" value=" " disabled={!isFaculty}/>
        </Form.Group>


        {/* Due/Available/Until Dates */}
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                name="dueDate"
                type="datetime-local"
                value={assignment.dueDate}
                onChange={handleChange}
                disabled={!isFaculty}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                name="availableFromDate"
                type="datetime-local"
                value={assignment.availableFromDate}
                onChange={handleChange}
                disabled={!isFaculty}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Available Until</Form.Label>
              <Form.Control
                name="availableUntilDate"
                type="datetime-local"
                value={assignment.availableUntilDate}
                onChange={handleChange}
                disabled={!isFaculty}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave} disabled={!isFaculty}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}