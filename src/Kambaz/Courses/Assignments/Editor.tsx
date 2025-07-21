import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // 确保默认导出对象中有 assignments

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = db.assignments.find(a => a._id === aid);
  
  if (!assignment) {
    return <div className="text-danger p-3">Assignment not found</div>;
  }

  return (
    <div id="wd-edit-assignment" className="p-3">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" value={assignment.title} readOnly />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Description</Form.Label>
          <div className="border p-2 rounded" style={{ minHeight: "150px", background: "white" }}>
            The assignment is <span className="text-danger">available online</span><br />
            Submit a link to the landing page of your Web application running on Netlify.<br /><br />
            The landing page should include the following:<br />
            - Your full name and section<br />
            - Links to each of the lab assignments<br />
            - Link to the Kanbas application<br />
            - Links to all relevant source code repositories<br /><br />
            The Kanbas application should include a link to navigate back to the landing page.
          </div>
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="text" value="100" readOnly/>
        </Form.Group>

        {/* Assign To */}
        <Form.Group className="mb-3" controlId="assignTo">
          <Form.Label>Assign to</Form.Label>
          <Form.Control type="text" value=" "/>
        </Form.Group>


        {/* Due/Available/Until Dates */}
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue="2024-05-13T23:59"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="availableFrom">
              <Form.Label>Available from</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue="2024-05-06T00:00"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="availableUntil">
              <Form.Label>Until</Form.Label>
              <Form.Control type="datetime-local" defaultValue="" />
            </Form.Group>
          </Col>
        </Row>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
