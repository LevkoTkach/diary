import React, { useEffect, useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonToolbar, } from "@ionic/react";
import { arrowBackOutline, chevronBackOutline, chevronForwardOutline, pencilSharp, trash } from "ionicons/icons";
import { useParams } from "react-router";
import NoteCard from "../components/NoteCard";
import { format, parseISO } from "date-fns";
import { NoteModel, NoteService } from "../NoteService";
import './NoteListPage.css';

interface Params {
  history: string;
  date: string;
}
const service = NoteService.getInstance();

const NoteListPage: React.FC<Params> = () => {
  const params = useParams<Params>();
  const [date, setDate] = useState(params.date.toString());
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setDate(params.date.toString());
  }, [params]);

  useEffect(() => {
    setNotes(service.findByDate(date));
    if (refresh === true) {
      setRefresh(false);
    }
  }, [date, params, refresh]);

  const countDate = (n: number) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + n);
    return newDate.toISOString().slice(0, 10);
  };

return (
  <IonPage>
    <IonHeader className="list-ion-header ion-no-border">
      <IonToolbar className="toolbar">
        <IonButtons slot="start">
          <IonButton color="primary" shape='round' className="list-back-button" routerLink={`/main/${date}`}>
            <IonIcon className="back-button-icon" icon={arrowBackOutline}></IonIcon>
            Back
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonToolbar className="date-toolbar">
        <IonButtons slot="start">
          <IonButton
            color='dark'
            onClick={() => {
              setDate(countDate(-1));
              window.history.replaceState(null, '', `/note-list/${(countDate(-1))}`);
            }}
            shape="round"
            fill="clear"
          >
            <IonIcon className="arrow-icon " slot="start" icon={chevronBackOutline} />
          </IonButton>
        </IonButtons>
        <IonLabel color='dark' className="title-date_list-page">
          {format(parseISO(date), 'd MMMM yyyy')}
        </IonLabel>
        <IonButtons slot="end">
          <IonButton color='dark'
            onClick={() => {
              setDate(countDate(+1));
              window.history.replaceState(null, '', `/note-list/${(countDate(+1))}`)
            }}
            shape="round"
            fill="clear"
            className="forward-date-button"
          >
            <IonIcon className="arrow-icon" slot="end" icon={chevronForwardOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonItemGroup>
        <IonList lines="none">

          {notes.map(note => {
            return (
              <IonItemSliding key={note.id} className="margin-bottom-8px">
                <NoteCard

                  className={`note-color-${note.color}`}
                  routerLink={`/note/${date}/${note.id}`}
                  title={`${note.title}`}
                  text={`${note.text}`} />
                <IonItemOptions
                  slot="end"
                  onIonSwipe={() => {
                    setRefresh(true);
                    service.delete(note.id);
                  }}
                >
                  <IonItemOption color="danger" >
                  </IonItemOption>
                  <IonItemOption color="danger" >
                  </IonItemOption>
                  <IonItemOption color="danger" >
                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding >
            );
          })}

        </IonList>
      </IonItemGroup>

    </IonContent >

    <IonButton
      color="success"
      routerLink={`/note/${date}`}
      className="compose-button"
      shape="round"
    >
      <IonIcon className="pen-icon" slot="start" icon={pencilSharp} />
      Make a note
    </IonButton>

  </IonPage>
);
}


export default NoteListPage;


