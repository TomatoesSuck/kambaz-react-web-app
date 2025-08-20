import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: (course: any) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: any) => void;
  enrolling: boolean; 
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void
}) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  

  
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5>New/Edit Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                if (!course._id) {
                  addNewCourse(course);
                } else {
                  updateCourse(course);
                }
                setCourse({ _id: "", name: "", description: "", number: "", startDate: "", endDate: "", image: "", department: "", credits: 0 });
              }} > {course._id ? "Update" : "Add"} </button>
            {course._id && (
              <button className="btn btn-secondary float-end me-2" onClick={() => {
                setCourse({ _id: "", name: "", description: "", number: "", startDate: "", endDate: "", image: "", department: "", credits: 0 });
              }}>Cancel</button>
            )}
          </h5><br />
          <input value={course.name}
            className="form-control mb-2"
            placeholder="Enter course name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            className="form-control"
            placeholder="Enter course description"
            rows={3} /><hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {enrolling ? "All Courses" : "Enrolled Courses"} ({courses.length})
      </h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                        {enrolling && (
                          <button onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>

                    {isFaculty && (
                      <>
                        <Button variant="danger" className="float-end"
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}> Delete </Button>

                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);
}
