import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div
    className="text-white"
    style={{ background: "white", width: "120px", minHeight: "100vh" }}
  >
    <ListGroup variant="flush">
      {links.map((link) => (
        <ListGroup.Item key={link} className="border-0 p-1">
          <Link
            to={`/Kambaz/Account/${link}`}
            className="text-danger text-decoration-none"
          >
            {link}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);
}