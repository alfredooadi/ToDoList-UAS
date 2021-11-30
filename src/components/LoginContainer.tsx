import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
<<<<<<< HEAD
import { auth } from "../firebaseConfig";
=======
import  { auth }  from '../firebaseConfig';
>>>>>>> 3a1a8a82bc59a68a3027a11da2870b7915589ae4
import "./HeaderContainer.css";
interface ContainerProps {}

const LoginContainer: React.FC<ContainerProps> = () => {
  const [loading, setLoading] = useState(false);
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const history = useHistory();
<<<<<<< HEAD

=======
  
>>>>>>> 3a1a8a82bc59a68a3027a11da2870b7915589ae4
  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, loginemail, loginpassword);
      console.log("Logged In");
      history.push("/home");
<<<<<<< HEAD
    } catch (e) {
=======
    } catch (e){
>>>>>>> 3a1a8a82bc59a68a3027a11da2870b7915589ae4
      alert("Incorrect Email or Password!");
      console.error(e);
    }
    setLoading(false);
  };

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
