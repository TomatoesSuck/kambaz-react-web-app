import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <ListGroup className="rounded-0 wd">
      {!currentUser && (
        <>
          <ListGroup.Item as={Link} to="/Kambaz/Account/Signin"
            className="active border border-0"> Signin </ListGroup.Item>

          <ListGroup.Item as={Link} to="/Kambaz/Account/Signup"
            className="text-danger border border-0"> Signup </ListGroup.Item>
        </>
      )}

      {currentUser && (
        <ListGroup.Item as={Link} to="/Kambaz/Account/Profile"
          className="text-danger border border-0"> Profile </ListGroup.Item>
      )}
    </ListGroup>
  );
}
