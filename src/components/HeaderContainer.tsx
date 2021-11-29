import { IonButton } from "@ionic/react";
import "./HeaderContainer.css";
interface ContainerProps {}

const HeaderContainer: React.FC<ContainerProps> = () => {
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
        <IonButton routerLink="/register" color="primary" shape="round">
          Register
        </IonButton>
        <IonButton routerLink="/login" color="secondary" shape="round">
          Login
        </IonButton>
      </div>
    </div>
  );
};

export default HeaderContainer;
