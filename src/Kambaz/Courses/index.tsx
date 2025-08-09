import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import PeopleTable from "./People/Table";
import { LuAlignJustify } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUsersForCourse } from "./client";


export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
  const isFaculty = currentUser?.role === "FACULTY";
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async (cid: string) => {
    try {
      const users = await findUsersForCourse(cid);
      setUsers(users);
    } catch (err) {
      setUsers([]);
    }
  };
  
  useEffect(() => {
    if (cid) {
      fetchUsersForCourse(cid);
    }
  }, [cid]);

  const isEnrolledInCourse = () => {
    if (isFaculty) return true; // Faculty can access all courses
    return enrollments.some((e: any) => e.user === currentUser?._id && e.course === cid);
  };

  useEffect(() => {
    if (currentUser && !isEnrolledInCourse()) {
      navigate("/Kambaz/Dashboard");
    }
  }, [currentUser, enrollments, cid, navigate]);

  if (!course) {
    return <div className="text-center mt-4">Course not found</div>;
  }

  if (!isEnrolledInCourse()) {
    return <div className="text-center mt-4">You are not enrolled in this course</div>;
  }


  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <LuAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex w-100">
        <div className="d-none d-md-block" style={{ minWidth: "200px" }}>
          <CourseNavigation />
        </div>
        <div className="flex-fill" style={{ minWidth: "0" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
            <Route path="People" element={<PeopleTable users={users}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
