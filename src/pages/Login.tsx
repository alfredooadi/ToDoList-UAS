import React from "react";

import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { arrowBackOutline } from "ionicons/icons";

import LoginContainer from "../components/LoginContainer";
import "./Home.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
            <IonTitle>Login Page</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <LoginContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;
