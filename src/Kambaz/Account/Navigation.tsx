import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
      <ListGroup className="rounded-0 wd">
        {!currentUser && (
          <>
            <ListGroup.Item as={Link} to="/Kambaz/Account/Signin"
              className={active("Signin")}>
              Signin
            </ListGroup.Item>

            <ListGroup.Item as={Link} to="/Kambaz/Account/Signup"
              className={active("Signup")}>
              Signup
            </ListGroup.Item>
          </>
        )}
        {currentUser && (
          <ListGroup.Item as={Link} to="/Kambaz/Account/Profile"
            className={active("Profile")}>
            Profile
          </ListGroup.Item>
        )}
        {currentUser && currentUser.role === "ADMIN" && (
          <Link to={`/Kambaz/Account/Users`}
            className={`list-group-item ${active("Users")}`}>
            Users
          </Link>
        )}
      </ListGroup>
  );
}
