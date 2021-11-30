import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { auth, db } from "../firebaseConfig";
interface ContainerProps {}

const BodyContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="wrapper">
      {/* <br></br>
      <br></br>
      <div className="container">
        <form autoComplete="off" className="form-group">
          <input type="text" placeholder="Enter Activities" className="form-control" required />
          <br></br>
          <div>
            <button type="submit" style={{ width: 100 + "%" }} className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div> */}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/addsch">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </div>
  );
};

export default BodyContainer;
