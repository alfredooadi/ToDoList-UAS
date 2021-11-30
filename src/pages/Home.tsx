import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";

import BodyContainer from "../components/BodyContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
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
