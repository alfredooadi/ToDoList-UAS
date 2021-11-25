import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username" />
        <IonInput placeholder="Password" />
        <IonButton>Login</IonButton>

        <p>
          Create Account?<Link to="register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
