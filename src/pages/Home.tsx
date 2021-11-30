import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import BodyContainer from "../components/BodyContainer";
import HeaderHomeContainer from "../components/HeaderHomeContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDoList</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HeaderHomeContainer />
        <BodyContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
