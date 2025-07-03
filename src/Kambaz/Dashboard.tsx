import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <h5>CS2345 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend development with Node.js</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
            <img src="/images/mongodb.jpg" width={200} />
            <div>
              <h5>CS3456 MongoDB</h5>
              <p className="wd-dashboard-course-title">NoSQL database design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
            <img src="/images/angular.jpg" width={200} />
            <div>
              <h5>CS4567 Angular</h5>
              <p className="wd-dashboard-course-title">Frontend framework with Angular</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/vue.jpg" width={200} />
            <div>
              <h5>CS5678 Vue.js</h5>
              <p className="wd-dashboard-course-title">Frontend development with Vue</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>CS6789 Python</h5>
              <p className="wd-dashboard-course-title">Introduction to Python programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5>CS7890 Java</h5>
              <p className="wd-dashboard-course-title">Object-oriented programming with Java</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}