import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid } = useParams();  // get the assignment ID from the URL parameters
  return (
    <div id="wd-edit-assignment" className="p-3">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" value={aid} />
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
          <Form.Control type="number" value="100" />
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-3" controlId="assignmentGroup">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select>
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </Form.Select>
        </Form.Group>

        {/* Display Grade as */}
        <Form.Group className="mb-3" controlId="displayGradeAs">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select>
            <option>Percentage</option>
            <option>Points</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-3" controlId="submissionType">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select>
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </Form.Select>

          <div className="mt-2">
            <Form.Check label="Text Entry" />
            <Form.Check label="Website URL" defaultChecked />
            <Form.Check label="Media Recordings" />
            <Form.Check label="Student Annotation" />
            <Form.Check label="File Uploads" />
          </div>
        </Form.Group>

        {/* Assign */}
        <Form.Group className="mb-3" controlId="assignTo">
          <Form.Label>Assign to</Form.Label>
          <Form.Control type="text" value="Everyone" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Available from</Form.Label>
            <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
          </Col>
          <Col>
            <Form.Label>Until</Form.Label>
            <Form.Control type="datetime-local" />
          </Col>
        </Row>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}