import React from "react";
import { IonButton, IonHeader, IonIcon, IonLabel, IonPage, IonRadio, IonRadioGroup } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import './NotePage.css';
import { useParams } from "react-router";
import TextEditor from "../components/TextEditor";
import { format, parseISO } from 'date-fns';
import { NoteService } from "../NoteService";

interface addProps {
  date: string;
}
const service = NoteService.getInstance();


const NotePage: React.FC<addProps> = () => {

  const { date } = useParams<{ date: string; }>();
  const { id } = useParams<{ id: string; }>();
  
  const titleDate: string = format(parseISO(date), 'd ccc / MMM yyyy');

  let localId: number | undefined = (id === undefined) ? undefined : +id;
  console.log(localId);
  
  const getTitle = !localId ? '' : service.getById(localId).title;
  const getNote = !localId ? '' : service.getById(localId).text;

  const saveTitle = (newValue: string) => {
    if (!localId) {
      localId = service.create(date, 'green', '', '');
    };
    service.setTitle(localId, newValue);
  }
  const saveNote = (newValue: string) => {
    if (!localId) {
      localId = service.create(date, 'green', '', '');
    };
    service.setText(localId, newValue);
  }

  const handleChange = (event: any) => {
    service.setColor(localId!, event.detail.value);
    };

  return (

    <IonPage className="page">
      <IonHeader className="ion-no-border header">

        <IonButton
          routerLink='/main'
          shape="round"
          fill="clear"
          className="back-button">
          <IonIcon
            className="arrow-icon"
            slot="start"
            icon={arrowBackOutline}>
          </IonIcon>
          Back
        </IonButton>

        <IonLabel className="title-date">{titleDate}</IonLabel>

        <IonButton
          routerLink={`/note-list/${date}`}
          shape="round"
          fill="clear"
          className="save-button">
          Save
        </IonButton>
      </IonHeader>
      <TextEditor
        value={getTitle}
        className="title-textarea ion-no-padding"
        placeholder=" Title"
        onChange={saveTitle} />
      <TextEditor
        value={getNote}
        className="custom-textarea "
        placeholder="Write your message in here.."
        onChange={saveNote} />
      <IonLabel className="color_label">
        Choose a color
      </IonLabel>
      <IonRadioGroup className="radio-group" onIonChange={handleChange}>
        <IonRadio className="green-radio" value="green" aria-checked={true} ></IonRadio>
        <IonRadio className="blue-radio" value="blue"></IonRadio>
        <IonRadio className="purple-radio" value="purple"></IonRadio>
        <IonRadio className="red-radio" value="red"></IonRadio>
        <IonRadio className="yellow-radio" value="yellow"></IonRadio>
        <IonRadio className="brown-radio" value="brown"></IonRadio>
      </IonRadioGroup>
      <IonButton
        className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
}

export default React.memo(NotePage);
