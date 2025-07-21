import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();       // 动态获取课程 ID
  const { pathname } = useLocation(); // 当前路径，用于高亮

  // 导航项数组
  const links = [
    "Home", "Modules", "Piazza", "Zoom",
    "Assignments", "Quizzes", "Grades", "People"
  ];

  return (
    <div id="wd-course-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label) => (
        <Link
          key={label}
          to={`/Kambaz/Courses/${cid}/${label}`}        
          id={`wd-course-${label.toLowerCase()}-link`} 
          className={`list-group-item border border-0 ${
            pathname.includes(label) ? "active" : "text-danger"
          }`} 
        >
          {label}
        </Link>
      ))}
    </div>
  );
}