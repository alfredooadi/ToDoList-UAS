import React from "react";

import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import RegisterContainer from "../components/RegisterContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
            <IonTitle>Register Page</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <RegisterContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
