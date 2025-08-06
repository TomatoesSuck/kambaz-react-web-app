


import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAssignmentAPI, updateAssignmentAPI, loadAssignments } from "./reducer";
import type { AppDispatch } from "../../store";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const loading = useSelector((state: any) => state.assignmentsReducer.loading);
  const error = useSelector((state: any) => state.assignmentsReducer.error);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  
  console.log('Editor Debug:', { cid, aid, assignments, loading, error, isFaculty });
  
  useEffect(() => {
    console.log('Loading assignments...');
    dispatch(loadAssignments());
  }, [dispatch]);
  
  useEffect(() => {
    if (!isFaculty) {
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    }
  }, [isFaculty, navigate, cid]);

  const [formData, setFormData] = useState(() => ({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: ""
  }));

  useEffect(() => {
    if (assignments && Array.isArray(assignments)) {
      const isNewAssignment = aid === 'new';
      const assignment = isNewAssignment ? null : assignments.find((a: any) => a._id === aid && a.course === cid);
      
      if (assignment) {
        console.log('Updating form data with assignment:', assignment);
        setFormData({
          title: assignment.title || "",
          description: assignment.description || "",
          points: assignment.points || 100,
          dueDate: assignment.dueDate || "",
          availableDate: assignment.availableDate || ""
        });
      }
    }
  }, [assignments, aid, cid]);

  if (!isFaculty) {
    return null;
  }

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-danger">Error: {error}</div>;
  }

  if (!assignments || !Array.isArray(assignments)) {
    console.log('Assignments not loaded yet:', assignments);
    return <div className="text-center mt-4">Loading assignment data...</div>;
  }
  
  const isNewAssignment = aid === 'new';
  const assignment = isNewAssignment ? null : assignments.find((a: any) => a._id === aid && a.course === cid);
  
  console.log('Assignment found:', assignment);
  
  if (!isNewAssignment && !assignment) {
    return <div className="text-center mt-4 text-danger">Assignment not found</div>;
  }
  
  const currentAssignment = assignment || {
    _id: isNewAssignment ? `A${Date.now()}` : (aid || ""),
    title: "",
    description: "",
    course: cid || "",
    availableDate: "",
    dueDate: "",
    points: 100,
    available: "",
    due: ""
  };

  const handleSave = async () => {
    console.log('Saving assignment:', formData);
    const assignmentData = {
      _id: currentAssignment._id,
      title: formData.title,
      description: formData.description,
      course: cid || "",
      availableDate: formData.availableDate,
      dueDate: formData.dueDate,
      points: formData.points,
      available: formData.availableDate || "",
      due: formData.dueDate || ""
    };

    try {
      if (isNewAssignment) {
        await dispatch(createAssignmentAPI(assignmentData));
      } else {
        await dispatch(updateAssignmentAPI(assignmentData));
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error('Error saving assignment:', error);
    }
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="ms-1 mb-2">
          <Form.Label className="mb-2">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="ms-1 mb-2">
          <Form.Label className="mb-2">Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Assignment description..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </Form.Group>
      </Form>
      <Container>
        <Row className="mb-2">
          <Col className="text-end" xs={3}>Points</Col>
          <Col>
            <Form.Control 
              id="wd-points" 
              value={formData.points}
              onChange={(e) => setFormData({...formData, points: parseInt(e.target.value) || 0})}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="text-end" xs={3}>Assignment Group</Col>
          <Col>
            <Form.Select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="text-end" xs={3}>Display Grade As</Col>
          <Col>
            <Form.Select id="wd-grade-display" defaultValue="PERCENT">
              <option value="PERCENT">Percentage</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="text-end" xs={3}>Submission Type</Col>
          <Col>
            <div className="border border-gray rounded-2 p-3">
              <Form.Select id="wd-submission-type" className="mb-2">
                <option value="ONLINE">Online</option>
              </Form.Select>
              {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"].map((label, idx) => (
                <Form.Check
                  key={idx}
                  className="ms-2 mb-2"
                  type="checkbox"
                  name="wd-online-entry-checkbox"
                  label={label}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="text-end" xs={3}>Assign</Col>
          <Col>
            <div className="border border-gray rounded-2 p-3">
              <Form.Group className="mb-4">
                <Form.Label className="mb-2"><b>Assign to</b></Form.Label>
                <Form.Select id="wd-assign-to" >
                  <option value="EVERY">Everyone</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="mb-2"><b>Due</b></Form.Label>
                <Form.Control 
                  type="date" 
                  id="wd-assignment-due" 
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                />
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className="mb-2"><b>Available from</b></Form.Label>
                    <Form.Control 
                      type="date" 
                      id="wd-assignment-available" 
                      value={formData.availableDate}
                      onChange={(e) => setFormData({...formData, availableDate: e.target.value})}
                    />
                  </Col>
                  <Col>
                    <Form.Label className="mb-2"><b>Until</b></Form.Label>
                    <Form.Control 
                      type="date" 
                      id="wd-assignment-until" 
                      value={formData.dueDate}
                      onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="float-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Button variant="danger" className="ms-2" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
