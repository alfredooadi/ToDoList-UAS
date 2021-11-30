import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import  { auth }  from '../firebaseConfig';
import "./HeaderContainer.css";
interface ContainerProps {}

const LoginContainer: React.FC<ContainerProps> = () => {
  const [loading, setLoading] = useState(false);
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, loginemail, loginpassword);
      console.log("Logged In");
    } catch (e){
      alert("Incorrect Email or Password!");
      console.error(e);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   if (loading) {
      
  //     return;
  //   }
  // }, [loading]);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h2>Login</h2>
      <br></br>
      <form autoComplete="off" className="form-group">
        <label>Email</label>
        <input placeholder="Enter Email" type="email" className="form-control" required onChange={(e) => setLoginemail(e.target.value)} />
        <br></br>
        <label>Password</label>
        <input placeholder="Enter Password" type="password" className="form-control" required onChange={(e) => setLoginpassword(e.target.value)} />
        <br></br>
        <button disabled={loading} type="submit" className="btn btn-success mybtn2" onClick={handleLogin}>
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
