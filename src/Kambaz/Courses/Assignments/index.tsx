import { Row, Col, FormControl, Button, ListGroup } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <h2>Assignments</h2>
      <hr />
      
      {/* Search + Buttons */}
      <Row className="mb-3">
        <Col>
          <FormControl placeholder="Search..." />
        </Col>
        <Col className="text-end">
          <Button variant="secondary" className="me-2">+ Group</Button>
          <Button variant="danger">+ Assignment</Button>
        </Col>
      </Row>

      {/* Assignments Header */}
      <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded-0 border">
        {/* Left section */}
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 text-secondary" />
          <strong>ASSIGNMENTS</strong>
        </div>

        {/* Right section */}
        <div className="d-flex align-items-center">
          <div className="me-2 border rounded-pill px-2 py-1 text-muted" style={{ fontSize: "0.9rem" }}>
            40% of Total
          </div>
          <Button variant="link" className="text-decoration-none text-secondary p-1">
          </Button>
          <Button variant="link" className="text-decoration-none text-secondary p-1">
            <FaEllipsisV />
          </Button>
        </div>
      </div>
      {/* Assignments List */}
      <div  id="wd-assignments-list" className="mb-3">
      <ListGroup className="rounded-0">
        {/* a1 */}
        <ListGroup.Item 
          className="rounded-0" 
          style={{ borderLeft: "5px solid green" }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 text-secondary" />
              <FaRegEdit className="me-2 text-success" />
              <div>
                <b>A1</b><br />
                <small className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="fw-bold">Not available until</span> May 6 at 12:00am |{" "}
                  <br />Due May 13 at 11:59pm | 100 pts
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <Button variant="link" className="text-decoration-none text-secondary">
                <FaEllipsisV />
              </Button>
            </div>
          </div>
        </ListGroup.Item>
        {/* a2 */}
        <ListGroup.Item 
          className="rounded-0" 
          style={{ borderLeft: "5px solid green" }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 text-secondary" />
              <FaRegEdit className="me-2 text-success" />
              <div>
                <b>A2</b><br />
                <small className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="fw-bold">Not available until</span> May 6 at 12:00am |{" "}
                  <br />Due May 20 at 11:59pm | 100 pts
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <Button variant="link" className="text-decoration-none text-secondary">
                <FaEllipsisV />
              </Button>
            </div>
          </div>
        </ListGroup.Item>
        {/* a3 */}
        <ListGroup.Item 
          className="rounded-0" 
          style={{ borderLeft: "5px solid green" }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 text-secondary" />
              <FaRegEdit className="me-2 text-success" />
              <div>
                <b>A3</b><br />
                <small className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="fw-bold">Not available until</span> May 6 at 12:00am |{" "}
                  <br />Due May 27 at 11:59pm | 100 pts
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <Button variant="link" className="text-decoration-none text-secondary">
                <FaEllipsisV />
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      </div>
    </div>
  );
}



