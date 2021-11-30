import React, { useState } from "react";
import { IonButton, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonToolbar } from "@ionic/react";
import { chevronBack, cloudUpload } from "ionicons/icons";

const Addsch: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [text, setText] = useState<string>();
  
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" >
        <IonFab vertical="top" horizontal="start" slot="fixed">
          <IonFabButton routerLink="/home">
            <IonIcon icon={chevronBack} />
          </IonFabButton>
        </IonFab>
        <br/>
        <br/>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Task</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Start Date</IonLabel>
                <IonDatetime displayFormat="DD MMMM YYYY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>End Date</IonLabel>
                <IonDatetime displayFormat="DD MMMM YYYY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Start Time</IonLabel>
                <IonDatetime displayFormat="HH:mm" placeholder="Select Time" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>End Time</IonLabel>
                <IonDatetime displayFormat="HH:mm" placeholder="Select Time" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Notes</IonLabel>
                <IonTextarea rows={4} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton>
                <IonIcon icon={cloudUpload}/>
                Add
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Addsch;
