import { Link } from "react-router-dom";
import { Form} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as client from "./client";

export default function Signup() { 
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    } catch (err: any) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div id="wd-signup-screen" className="p-3">
      <h1>Sign up</h1>
      <Form.Control 
        placeholder="username" 
        className="mb-2"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <Form.Control 
        placeholder="password" 
        type="password" 
        className="mb-2"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Form.Control placeholder="verify password" type="password" className="mb-2" />
      <button 
        id="wd-signin-btn"
        onClick={signup}
        className="btn btn-primary w-100 mb-2">
        Sign up 
      </button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
