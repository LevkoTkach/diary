import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonItem, IonList, IonSelect, IonSelectOption, IonButton, IonIcon, IonLabel, IonToggle } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import './Settings.css';

const Settings: React.FC<{}> = () => {
  const [font, setFont] = useState(localStorage.getItem('font') ? localStorage.getItem('font')! : "nunito");
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('dark-theme') === 'true');

  useEffect(() => {
    if (localStorage.getItem('dark-theme') === 'true') {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  })


  const handleFont = (font: string) => {
    document.body.classList.remove("nunito", "montserrat-alternates", "mukta", "poppins", "prompt", "raleway", "tilt-neon", "gotisch", "josefin-sans");
    document.body.classList.add(font);
    localStorage.setItem('font', font);
    setFont(font);
  }

  const toggleTheme = (event: CustomEvent) => {
    if (event.detail.checked) {
      localStorage.setItem('dark-theme', 'true');
    } else {
      localStorage.removeItem('dark-theme');
    };
    setDarkTheme(event.detail.checked);
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border settings-ion-header">
        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonButton color="primary" className="list-back-button" routerLink={`/main`}>
              <IonIcon className="back-button-icon" icon={arrowBackOutline}></IonIcon>
              Back</IonButton>
          </IonButtons>
          <IonTitle color='dark'>Settings</IonTitle>
        </IonToolbar>

      </IonHeader>
      <IonContent fullscreen>


        <IonList lines="none" className="ion-no-border">
          <IonLabel className="font-label" color="dark" slot="start">Selected font</IonLabel>
          <IonItem lines="none" className="item-select ion-no-border">
            <IonSelect className="select ion-no-border" value={font} onIonChange={e => handleFont(e.detail.value)} interface="action-sheet" placeholder="Select Font" >
              <IonSelectOption className="nunito" value="nunito">Nunito</IonSelectOption>
              <IonSelectOption className="montserrat-alternates" value="montserrat-alternates">Montserrat Alternates</IonSelectOption>
              <IonSelectOption className="mukta" value="mukta">Mukta</IonSelectOption>
              <IonSelectOption className="poppins" value="poppins">Poppins</IonSelectOption>
              <IonSelectOption className="prompt" value="prompt">Prompt</IonSelectOption>
              <IonSelectOption className="raleway" value="raleway">Raleway</IonSelectOption>
              <IonSelectOption className="tilt-neon" value="tilt-neon">Tilt Neon</IonSelectOption>
              <IonSelectOption className="gotisch" value="gotisch">Grenze Gotisch</IonSelectOption>
              <IonSelectOption className="josefin-sans" value="josefin-sans">JosefinSans</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonItem lines="none">
          <IonLabel color='dark' className="dark-theme-label" slot="start">Dark theme</IonLabel>
          <IonToggle className="dark-theme-toggle" slot="end" checked={darkTheme} onIonChange={toggleTheme}></IonToggle>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

export default Settings;