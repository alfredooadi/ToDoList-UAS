import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
import  { auth, db }  from '../firebaseConfig';
import "./HeaderContainer.css";
interface ContainerProps {}

const RegisterContainer: React.FC<ContainerProps> = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [registError, setRegistError] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", user.user.uid), {
        fullname : fullName
      });
      console.log("Document written ID: ", user.user.uid);
    } catch (e){
      if (e == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'){
        alert('Email has already in use');
      }
      if (e == 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).'){
        alert('Password should be at least 6 characters');
      }
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h2>Register</h2>
      <br></br>
      <form autoComplete="off" className="form-group" >
        <label>Full Name</label>
        <input placeholder="Enter Full Name" type="text" className="form-control" required onChange={(e) => setFullName(e.target.value)} />
        <br></br>
        <label>Email</label>
        <input placeholder="Enter Email" type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <label>Password</label>
        <input placeholder="Enter Password" type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button disabled={loading} type="submit" className="btn btn-success mybtn2" onClick={handleRegister}>
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
