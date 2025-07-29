import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, FormControl } from "react-bootstrap";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useState } from "react";
import { enroll, unenroll } from "./Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const courses = useSelector((state: any) => state.courseReducer.courses);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState("");
  const [showAllCourses, setShowAllCourses] = useState(false);

  const filteredCourses = showAllCourses
  ? courses
  : courses.filter((course: any) =>
      enrollments.some((e: any) => e.user === currentUser._id && e.course === course._id)
    );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Enrollments Toggle */}
      <Button
        className="btn btn-info float-end mb-3"
        onClick={() => setShowAllCourses(!showAllCourses)}
      >
        Enrollments
      </Button>

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end"
              onClick={() => {
                dispatch(addCourse({ name: courseName, description }));
                setCourseName("");
                setDescription("");
              }}
            >Add</button>

            <button className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse({ _id: editingId, name: courseName, description }))}
            >Update</button>
          </h5>
          <FormControl value={courseName} onChange={(e) => setCourseName(e.target.value)} />
          <FormControl as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredCourses.map((course: any) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>

                    {/* Enroll/Unenroll */}
                    {showAllCourses && (
                      enrollments.some(
                        (e: any) => e.user === currentUser._id && e.course === course._id
                      ) ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={() => dispatch(unenroll({ user: currentUser._id, course: course._id }))}
                        >Unenroll</button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={() => dispatch(enroll({ user: currentUser._id, course: course._id }))}
                        >Enroll</button>
                      )
                    )}


                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button className="btn btn-danger" onClick={() => dispatch(deleteCourse(course._id))}>Delete</button>
                          <button className="btn btn-warning" onClick={() => {
                            setCourseName(course.name);
                            setDescription(course.description);
                            setEditingId(course._id);
                          }}>Edit</button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}