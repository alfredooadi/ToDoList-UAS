import { IonButton } from "@ionic/react";
import "./HeaderContainer.css";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
interface ContainerProps {}

const HeaderHomeContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();

  const logout = async () => {
    try {
      await signOut(auth);
      history.push("/");
    } catch {
      alert("Failed to log out");
    }
  };
  return (
    <div className="header-box">
      <div className="leftside">
        <div className="img">
          <img src="https://cdn-icons-png.flaticon.com/512/1953/1953237.png" alt="logo" />
        </div>
        <div className="content">
          <div className="heading-big">Lots of work to do ?</div>
          <div className="heading-small">Lets make a list</div>
        </div>
      </div>
      <div className="rightside">
        <button className="btn btn-danger mybtn2" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HeaderHomeContainer;
