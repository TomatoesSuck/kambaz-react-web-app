import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default function AccountNavigation() {
  return (
    <div className="text-white" style={{ background: "white", width: "120px", minHeight: "100vh" }}>
      <ListGroup variant="flush">
        <ListGroup.Item className="border-0 p-1">
          <Link to="/Kambaz/Account/Signin" className="text-danger text-decoration-none">Signin</Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 p-1">
          <Link to="/Kambaz/Account/Signup" className="text-danger text-decoration-none">Signup</Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 p-1">
          <Link to="/Kambaz/Account/Profile" className="text-danger text-decoration-none">Profile</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}