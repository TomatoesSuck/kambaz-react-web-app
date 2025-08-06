import { Routes, Route, Navigate } from "react-router";
import { useState, useEffect } from "react";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import { addCourse, deleteCourse as deleteReduxCourse, updateCourse as updateReduxCourse, setSelectedCourse } from "./Courses/reducer";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";


export default function Kambaz() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>([]);
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const selectedCourse = useSelector((state: any) => state.coursesReducer.selectedCourse);

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async (course: any) => {
    const newCourse = await userClient.createCourse(course);
    setCourses((courses) => [...courses, newCourse]);
  };
  
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const handleAddCourse = async (course: any) => {
    try {
      await addNewCourse(course);
      dispatch(addCourse(course));
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  
  const handleDeleteCourse = async (courseId: string) => {
    try {
      await deleteCourse(courseId);
      dispatch(deleteReduxCourse(courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  const updateCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }));
  };
  
  const handleUpdateCourse = async (course: any) => {
    try {
      await updateCourse(course);
      dispatch(updateReduxCourse(course));
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  const handleSetSelectedCourse = (course: any) => {
    dispatch(setSelectedCourse(course));
  };

  return (
    <Session>
      <div id="wd-kambaz" className="d-flex">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  selectedCourse={selectedCourse}
                  addCourse={handleAddCourse}
                  deleteCourse={handleDeleteCourse}
                  updateCourse={handleUpdateCourse}
                  setSelectedCourse={handleSetSelectedCourse}
                />
              </ProtectedRoute>} />
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
