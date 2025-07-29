import { useParams, Link } from "react-router-dom";
import {  Row, Col, FormControl, Button, ListGroup, Modal } from "react-bootstrap";
import { FaEllipsisV, FaRegEdit, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";



export default function Assignments() {
  const { cid } = useParams(); // 获取当前课程 ID
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const existingAssignments = assignments.filter((a: any) => a.course === cid);

  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser?.role === "FACULTY";

  // 删除弹窗状态
  const [show, setShow] = useState(false);
  const [toDelete, setToDelete] = useState<string | null>(null);

  const dispatch = useDispatch();

  /** 打开确认框并记住要删的 ID */
  const askDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();        
    e.stopPropagation();       
    setToDelete(id);
    setShow(true);
  };

  /** 真正执行删除 */
  const confirmDelete = () => {
    if (toDelete) dispatch(deleteAssignment(toDelete));
    setShow(false);
    setToDelete(null);
  };

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
          <Button variant="danger" disabled={!isFaculty} as={Link as any} to={`/Kambaz/Courses/${cid}/Assignments/new`}>
              + Assignment
          </Button>
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
          {existingAssignments.map((a: any) => (
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
                  <FaEllipsisV /> </Button>
                  {/* 删除图标：只有教师可见 */}
                  {isFaculty && (
                   <FaTrash
                    className="text-danger ms-2"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => askDelete(e, a._id)}
                  />
                  )}
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* 确认弹窗 */}
      <Modal show={show} onHide={() => setShow(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmDelete}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}