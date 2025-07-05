import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const courses = [
  {
    id: 5610,
    title: "CS5610 Web development",
    desc: "Design & build dynamic, data‑driven web apps using HTML, CSS, JavaScript, backend services, databases and deployable production websites.",
    img: "/images/web_development_fullstack.jpg"
  },
  {
    id: 5001,
    title: "CS5001 Python",
    desc: "Master Python fundamentals and backend practices, including server‑side scripting, REST APIs, and database integration.",
    img: "/images/python_backend.jpg"
  },
  {
    id: 5002,
    title: "CS5002 Discrete Structure",
    desc: "Learn mathematical foundations for CS — logic, set theory, proofs, combinatorics, graphs, trees and algorithm analysis.",
    img: "/images/discrete_structures_math.jpg"
  },
  {
    id: 5003,
    title: "CS5003 Recitation for CS5001",
    desc: "Hands‑on Python practice, Q&A sessions, and guided problem solving to reinforce concepts from CS5001.",
    img: "/images/python_recitation.jpg"
  },
  {
    id: 5004,
    title: "CS5004 Java",
    desc: "Explore Java programming in depth: object‑oriented design, data structures, and system‑level application development.",
    img: "/images/java_system_programming.jpg"
  },
  {
    id: 5008,
    title: "CS5008 Data Structure, Algo & App in C",
    desc: "Implement classic data structures and algorithms in C with practical applications in modern frontend frameworks.",
    img: "/images/c_data_algo.jpg"
  },
  {
    id: 5800,
    title: "CS5800 Algorithm",
    desc: "Dive into algorithm design and analysis: sorting, graph algorithms, dynamic programming, complexity and AI foundations.",
    img: "/images/algorithm_ai.jpg"
  }
];

export default function Dashboard() {
  
  return (
    <div id="wd-dashboard">
      {/* Main Dashboard title */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Published Courses subtitle */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses">
        {/* 
          Render courses in a responsive grid:
          xs=1 => 1 column on extra small screens
          sm=2 => 2 columns on small screens
          md=3 => 3 columns on medium screens
          lg=4 => 4 columns on large screens
          g-4 => gap between rows/columns = 4 spacing units
        */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          
          {/* Loop through each course and render a card */}
          {courses.map(course => (
            <Col key={course.id}>
              <Card style={{ width: '270px' }}>
                
                {/* Link wraps the whole card, navigates to course Home screen */}
                <Link 
                  to={`/Kambaz/Courses/${course.id}/Home`} 
                  className="text-decoration-none text-dark"
                >
                  {/* Course image */}
                  <Card.Img 
                    variant="top" 
                    src={course.img} 
                    height="160px" 
                  />

                  <Card.Body>
                    {/* Course title */}
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>

                    {/* Course description text */}
                    <Card.Text 
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.desc}
                    </Card.Text>

                    {/* Button at bottom of card */}
                    <Button variant="primary">Go</Button>
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