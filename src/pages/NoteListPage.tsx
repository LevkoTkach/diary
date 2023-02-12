import React from "react";
import { IonButton, IonHeader, IonIcon, IonItemGroup, IonLabel, IonPage } from "@ionic/react";
import { arrowBackOutline, chevronBackOutline, chevronForwardOutline, pencilSharp } from "ionicons/icons";
import { useParams } from "react-router";
import NoteCard from "../components/NoteCard";
import { format, parseISO } from "date-fns";
import './NoteListPage.css';

interface addProps {
  date: string;
}

const NoteListPage: React.FC<addProps> = () => {
  const { date } = useParams<{ date: string; }>();  

  const setting = (id: string) => {
    return localStorage.getItem(id + date)!;
  }
  const getTitle = setting('title');
  const getNote = setting('note');

  return (
    <IonPage >
      <IonPage className="page">
        <IonHeader className="ion-no-border header">
          <IonButton routerLink={`/note/${date}`} shape="round" fill="clear" className="back-button">
            <IonIcon className="arrow-icon" slot="start" icon={arrowBackOutline} />
            Back
          </IonButton>
          <IonButton shape="round" fill="clear" className="back-date-button">
            <IonIcon className="arrow-icon " slot="start" icon={chevronBackOutline} />
          </IonButton>
          <IonLabel className="title-date_list-page">
            {format(parseISO(date), 'd MMMM yyyy')}
          </IonLabel>
          <IonButton shape="round" fill="clear" className="forward-date-button">
            <IonIcon className="arrow-icon" slot="end" icon={chevronForwardOutline} />
          </IonButton>
        </IonHeader>

        <IonItemGroup>
          <NoteCard className="note-card" />
        </IonItemGroup>

      </IonPage>
      <IonButton routerLink={`/note/${date}`} className="compose-button" shape="round">
        <IonIcon className="pen-icon" slot="start" icon={pencilSharp}/>
        Compose
      </IonButton>
      <IonButton className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
}


export default NoteListPage;


