import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonItem, IonList, IonSelect, IonSelectOption, IonButton, IonIcon, IonLabel } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import './Settings.css';

const Settings: React.FC<{}> = () => {
  const [font, setFont] = useState(localStorage.getItem('font') ? localStorage.getItem('font')! : "nunito");

  useEffect(() => {
    document.body.classList.remove("nunito", "aclonica", "tilt-neon", "gotisch", "josefin-sans");
    document.body.classList.add(font);
    localStorage.setItem('font', font);
  }, [font])

  return (
    <IonPage>
      <IonHeader className="ion-no-border settings-ion-header">
        <IonToolbar className="button-ion-toolbar">
          <IonButtons slot="start">
            <IonButton className="list-back-button" routerLink={`/main`}>
              <IonIcon className="back-button-icon" icon={arrowBackOutline}></IonIcon>
              Back</IonButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel slot="start">Selected font</IonLabel>
        <IonList className=" ion-no-border">
          <IonItem className="item-select ion-no-border">
            <IonSelect className="select ion-no-border" value={font} onIonChange={e => setFont(e.detail.value)} interface="action-sheet" placeholder="Select Font" >
              <IonSelectOption value="nunito">Nunito</IonSelectOption>
              <IonSelectOption value="aclonica">Aclonica</IonSelectOption>
              <IonSelectOption value="tilt-neon">Tilt Neon</IonSelectOption>
              <IonSelectOption value="gotisch">Grenze Gotisch</IonSelectOption>
              <IonSelectOption value="josefin-sans">JosefinSans</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
}

export default Settings;