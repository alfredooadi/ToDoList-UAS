import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import BodyContainer from "../components/BodyContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar></IonToolbar>
        </IonHeader>

        <BodyContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
