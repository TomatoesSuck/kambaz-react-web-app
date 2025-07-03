import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams } from "react-router";

export default function Courses() {
    const { cid } = useParams();   // Extract course ID from URL parameters
    return (
      <div id="wd-courses">
          <h2>Course {cid}</h2> 
        <hr />
      <table>
        <tr>
          <td valign="top">
            <CourseNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<h2>Assignments</h2>} />
              <Route path="Assignments/:aid" element={<h2>Assignment Editor</h2>} />
              <Route path="People" element={<h2>People</h2>} />
            </Routes>
          </td>
        </tr>
      </table>
      </div>
  );}  