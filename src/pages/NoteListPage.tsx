import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItemGroup, IonLabel, IonPage, IonToolbar } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline, pencilSharp } from "ionicons/icons";
import { useParams } from "react-router";
import NoteCard from "../components/NoteCard";
import { format, parseISO } from "date-fns";
import { NoteModel, NoteService } from "../NoteService";
import './NoteListPage.css';

interface AddProps {
  date: string;
}
const service = NoteService.getInstance();

const NoteListPage: React.FC<AddProps> = () => {
  const params = useParams<AddProps>();
  const [date, setDate] = useState(params.date.toString());
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    setDate(params.date.toString());
  }, [params]);

  useEffect(() => {
    setNotes(service.findByDate(date));
  }, [date, params]);

  const decDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate.toISOString().slice(0, 10));
  };
  const incDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate.toISOString().slice(0, 10));
  };

  return (
    <IonPage>
      <IonHeader className="list-ion-header ion-no-border">
        <IonToolbar className=".button-ion-toolbar">
          <IonButtons slot="start"> 
            <IonBackButton text="Back"></IonBackButton>            
          </IonButtons>
        </IonToolbar>
        <IonToolbar className="date-toolbar">
          <IonButtons slot="start">
            <IonButton onClick={decDay} shape="round" fill="clear" >
              <IonIcon className="arrow-icon " slot="start" icon={chevronBackOutline} />
            </IonButton>
          </IonButtons>
          <IonLabel className="title-date_list-page">
            {format(parseISO(date), 'd MMMM yyyy')}
          </IonLabel>
          <IonButtons slot="end">
            <IonButton onClick={incDay} shape="round" fill="clear" className="forward-date-button">
              <IonIcon className="arrow-icon" slot="end" icon={chevronForwardOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="content">
        <IonItemGroup>
          {notes.map(note => {
            return <NoteCard key={note.id}
              className={`note-card note-color-${note.color}`}
              routerLink={`/note/${date}/${note.id}`}
              title={`${note.title}`}
              text={`${note.text}`} />;
          })}
        </IonItemGroup>
      </IonContent >

      <IonButton routerLink={`/note/${date}`} className="compose-button" shape="round">
        <IonIcon className="pen-icon" slot="start" icon={pencilSharp} />
        Compose
      </IonButton>
      
    </IonPage>
  );
}


export default NoteListPage;


