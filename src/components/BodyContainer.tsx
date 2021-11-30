import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import  { auth, db }  from '../firebaseConfig';
interface ContainerProps {}

const BodyContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();
  
  const logout = async () => {
    try{
      await signOut(auth);
      history.push('/')
    } catch {
      alert('Failed to log out')
    }
  };

  return (
    <div className="wrapper">
      <br></br>
      <br></br>
      <div className="container">
        <form autoComplete="off" className="form-group">
          <input type="text" placeholder="Enter Activities" className="form-control" required disabled />
          <br></br>
          <div>
            <button type="submit" style={{ width: 100 + "%" }} className="btn btn-success" disabled>
              Add
            </button>
            <div className="error-msg">Please register or login to use application</div>
          </div>
        </form>
      </div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default BodyContainer;
