import { useParams, Link } from "react-router-dom";
import { Row, Col, FormControl, Button, ListGroup } from "react-bootstrap";
import { FaEllipsisV, FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams(); // 获取当前课程 ID
  const assignments = db.assignments.filter((a) => a.course === cid); // 只显示当前课程的作业

  return (
    <div id="wd-assignments" className="p-3">
      <h2>Assignments</h2>
      <hr />

      {/* 搜索框 + 按钮 */}
      <Row className="mb-3">
        <Col>
          <FormControl placeholder="Search..." />
        </Col>
        <Col className="text-end">
          <Button variant="secondary" className="me-2">+ Group</Button>
          <Button variant="danger">+ Assignment</Button>
        </Col>
      </Row>

      {/* 作业列表 Header */}
      <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded-0 border">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 text-secondary" />
          <strong>ASSIGNMENTS</strong>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-2 border rounded-pill px-2 py-1 text-muted" style={{ fontSize: "0.9rem" }}>
            40% of Total
          </div>
          <Button variant="link" className="text-decoration-none text-secondary p-1">
            <FaEllipsisV />
          </Button>
        </div>
      </div>

      {/* 动态生成作业列表 */}
      <div id="wd-assignments-list" className="mb-3">
        <ListGroup className="rounded-0">
          {assignments.map((a) => (
            <ListGroup.Item
              key={a._id}
              className="rounded-0"
              style={{ borderLeft: "5px solid green" }}
              as={Link}
              to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
            >
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 text-secondary" />
                  <FaRegEdit className="me-2 text-success" />
                  <div>
                    <b>{a.title}</b><br />
                    <small className="text-muted">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span className="fw-bold">Not available until</span> May 6 at 12:00am  |<br />
                      Due May 13 at 11:59pm | 100 pts
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
          ))}
        </ListGroup>
      </div>
    </div>
  );
}