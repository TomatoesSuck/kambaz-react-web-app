import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { 
  loadEnrollments, 
  enrollUserInCourseAPI, 
  unenrollUserFromCourseAPI 
} from "./Enrollments/reducer";
import type { AppDispatch } from "./store";

export default function Dashboard({ courses, selectedCourse, addCourse, deleteCourse, updateCourse, setSelectedCourse }: {
  courses: any[];
  selectedCourse: any;
  addCourse: (course: any) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: any) => void;
  setSelectedCourse: (course: any) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
  const loading = useSelector((state: any) => state.enrollmentsReducer.loading);
  const error = useSelector((state: any) => state.enrollmentsReducer.error);
  const isFaculty = currentUser?.role === "FACULTY";
  
  // Use localStorage to persist showAllCourses state
  const [showAllCourses, setShowAllCourses] = useState(() => {
    const saved = localStorage.getItem('showAllCourses');
    return saved ? JSON.parse(saved) : false;
  });
  

  
  const [formCourse, setFormCourse] = useState<any>(selectedCourse || {
    _id: "",
    name: "",
    description: "",
    number: "",
    startDate: "",
    endDate: "",
    image: "",
    department: "",
    credits: 0,
  });

  useEffect(() => {
    if (selectedCourse) setFormCourse(selectedCourse);
  }, [selectedCourse]);

  useEffect(() => {
    // Load all enrollments so we can check enrollment status for all courses
    dispatch(loadEnrollments());
  }, [dispatch]);



  // Save showAllCourses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('showAllCourses', JSON.stringify(showAllCourses));
  }, [showAllCourses]);

  const isEnrolledInCourse = (courseId: string) => {
    return enrollments.some((e: any) => e.user === currentUser?._id && e.course === courseId);
  };

  const handleEnroll = async (courseId: string) => {
    try {
      await dispatch(enrollUserInCourseAPI(currentUser._id, courseId));
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await dispatch(unenrollUserFromCourseAPI(currentUser._id, courseId));
      // After unenrolling, show all courses so user can see the course and re-enroll if needed
      setShowAllCourses(true);
    } catch (error) {
      console.error('Error unenrolling from course:', error);
    }
  };

  const filteredCourses = showAllCourses 
    ? courses 
    : courses.filter((course) => isEnrolledInCourse(course._id));

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-danger">Error: {error}</div>;
  }

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard {currentUser?.username}</h1>
        <Button 
          variant="primary" 
          onClick={() => setShowAllCourses(!showAllCourses)}
          className="me-3"
        >
          {showAllCourses ? "Show Enrolled" : "Show All Courses"}
        </Button>
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5>New/Edit Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                if (!formCourse._id) {
                  addCourse({ ...formCourse, _id: new Date().getTime().toString() });
                } else {
                  updateCourse(formCourse);
                }
                setFormCourse({ _id: "", name: "", description: "", number: "", startDate: "", endDate: "", image: "", department: "", credits: 0 });
                setSelectedCourse(null);
              }} > {formCourse._id ? "Update" : "Add"} </button>
            {formCourse._id && (
              <button className="btn btn-secondary float-end me-2" onClick={() => {
                setFormCourse({ _id: "", name: "", description: "", number: "", startDate: "", endDate: "", image: "", department: "", credits: 0 });
                setSelectedCourse(null);
              }}>Cancel</button>
            )}
          </h5><br />
          <input value={formCourse.name}
            className="form-control mb-2"
            placeholder="Enter course name"
            onChange={(e) => setFormCourse({ ...formCourse, name: e.target.value })} />
          <textarea value={formCourse.description}
            onChange={(e) => setFormCourse({ ...formCourse, description: e.target.value })}
            className="form-control"
            placeholder="Enter course description"
            rows={3} /><hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Enrolled Courses"} ({filteredCourses.length})
      </h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
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
                            setSelectedCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </>
                    )}

                  </Card.Body>
                </Link>
                
                <div className="p-3">
                  {isEnrolledInCourse(course._id) ? (
                    <Button 
                      variant="danger" 
                      className="w-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleUnenroll(course._id);
                      }}
                    >
                      Unenroll
                    </Button>
                  ) : (
                    <Button 
                      variant="success" 
                      className="w-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEnroll(course._id);
                      }}
                    >
                      Enroll
                    </Button>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);
}
