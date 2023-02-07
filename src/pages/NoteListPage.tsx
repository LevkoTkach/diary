
import React from "react";

import { IonButton, IonHeader, IonIcon, IonLabel, IonPage, IonRadio, IonRadioGroup, IonToolbar } from "@ionic/react";
import { arrowBackOutline, chevronBackOutline, chevronForwardOutline, pencil, pencilSharp } from "ionicons/icons";
import './NoteListPage.css';
import { useParams } from "react-router";
import NoteCard from "../components/NoteCadr";


// const store = new Storage();
// await store.create();
interface addProps {
  date: string;
}

const NoteListPage: React.FC<addProps> = () => {
  const { date } = useParams<{ date: string; }>();
  const titleDate: string = date;


  const setting = (id: string) => {
    return localStorage.getItem(id + date)!;
  }
  const getTitle = setting('title');
  const getNote = setting('note');

  return (
    <IonPage >
      <IonPage className="page">
        <IonHeader className="ion-no-border header">
          <IonButton
            shape="round"
            fill="clear"
            className="back-button">
            <IonIcon className="arrow-icon" slot="start" icon={arrowBackOutline} ></IonIcon>
            Back
          </IonButton>
      
            <IonButton
              shape="round"
              fill="clear"
              className="back-date-button">
              <IonIcon className="arrow-icon " slot="start" icon={chevronBackOutline} ></IonIcon>
            </IonButton>
            <IonLabel className="title-date_list-page">{titleDate}</IonLabel>
            <IonButton
              shape="round"
              fill="clear"
              className="forward-date-button">
              <IonIcon className="arrow-icon" slot="end" icon={chevronForwardOutline} >
              </IonIcon>
            </IonButton>          

        </IonHeader>
        <NoteCard className="note-card" />
        <IonButton
          className="compose-button"
          shape="round">
          <IonIcon
            className="pen-icon"
            slot="start"
            icon={pencilSharp}>
          </IonIcon>
          Compose
        </IonButton>
      </IonPage>
      <IonButton className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
}


export default NoteListPage;


