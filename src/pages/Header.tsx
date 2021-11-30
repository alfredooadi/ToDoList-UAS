import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "../components/HeaderContainer.css";
import HeaderContainer from "../components/HeaderContainer";

const Header: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HeaderContainer />  
      </IonContent>
    </IonPage>
  );
};

export default Header;