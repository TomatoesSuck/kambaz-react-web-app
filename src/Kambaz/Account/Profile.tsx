import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">
      <h3>Profile</h3>
      <Form>
        <Form.Control defaultValue="alice" placeholder="username" className="mb-2" />
        <Form.Control defaultValue="123456" placeholder="password" type="password" className="mb-2" />
        <Form.Control defaultValue="Alice" placeholder="First Name" className="mb-2" />
        <Form.Control defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
        <Form.Control defaultValue="2000-01-01" type="date" className="mb-2" />
        <Form.Control defaultValue="alice@wonderland.com" type="email" className="mb-2" />
        <Form.Select defaultValue="USER" className="mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        <Link to="/Kambaz/Account/Signin">
          <Button variant="danger" className="w-100">Signout</Button>
        </Link>
      </Form>
    </div>
  );
}