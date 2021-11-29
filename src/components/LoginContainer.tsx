import React from "react";
import { Link } from "react-router-dom";
import "./HeaderContainer.css";
interface ContainerProps {}

const LoginContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <br></br>
      <br></br>
      <h2>Login</h2>
      <br></br>
      <form autoComplete="off" className="form-group">
        <label>Email</label>
        <input placeholder="Enter Email" type="email" className="form-control" required />
        <br></br>
        <label>Password</label>
        <input placeholder="Enter Password" type="password" className="form-control" required />
        <br></br>
        <button type="submit" className="btn btn-success mybtn2">
          Login
        </button>
      </form>
      <span>
        Create Account? <Link to="/register">Register</Link>
      </span>
    </div>
  );
};

export default LoginContainer;
