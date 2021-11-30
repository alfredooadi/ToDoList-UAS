import { IonContent, IonPage } from "@ionic/react";

import BodyContainer from "../components/BodyContainer";
import HeaderHomeContainer from "../components/HeaderHomeContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HeaderHomeContainer />
        <BodyContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
