import { useState } from "react";
import { Link } from "react-router-dom";

import "./HeaderContainer.css";
interface ContainerProps {}

const RegisterContainer: React.FC<ContainerProps> = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registError, setRegistError] = useState("");

  const handleRegister = () => {};

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h2>Register</h2>
      <br></br>
      <form autoComplete="off" className="form-group" onSubmit={handleRegister}>
        <label>Full Name</label>
        <input placeholder="Enter Full Name" type="text" className="form-control" required onChange={(e) => setFullName(e.target.value)} value={fullName} />
        <br></br>
        <label>Email</label>
        <input placeholder="Enter Email" type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} value={email} />
        <br></br>
        <label>Password</label>
        <input placeholder="Enter Password" type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} value={password} />
        <br></br>
        <button type="submit" className="btn btn-success mybtn2">
          Sign Up
        </button>
      </form>
      {registError && <div className="error-msg">{registError}</div>}
      <span>
        Already have an account ? <Link to="/login">Login Here</Link>
      </span>
    </div>
  );
};

export default RegisterContainer;
