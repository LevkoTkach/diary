import React, { useState } from "react";
import { IonButton, IonHeader, IonIcon, IonLabel, IonPage, IonRadio, IonRadioGroup, IonTextarea } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import './NotePage.css';
import { useParams } from "react-router";
// import TextEditor from "../components/TextEditor";
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

  let title: string = !localId ? '' : service.getById(localId).title;
  let text: string = !localId ? '' : service.getById(localId).text;
  let color: string = 'green';

  const handleColor = (event: CustomEvent) => {
    color = event.detail.value;
  };
  const saveColor = () => {
    if (!localId) {
      localId = service.create(date, 'green', '', '');
    }
    service.setColor(localId, color);
  };

  const handleTitle = (event: CustomEvent) => {
    title = (event.detail.value);
  };
  const saveTitle = () => {
    if (!localId) {
      localId = service.create(date, 'green', '', '');
    };
    service.setTitle(localId, title);
    console.log('save', title);
  };

  const handleText = (event: CustomEvent) => {
    text = (event.detail.value);
  };
  const saveText = () => {
    if (!localId) {
      localId = service.create(date, 'green', '', '');
    };
    service.setText(localId, text);
    console.log('save', text);
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

      <IonTextarea
        className="title-textarea ion-no-padding"
        placeholder=" Title"
        value={title}
        onIonChange={handleTitle}
        onIonBlur={saveTitle}
      />
      <IonTextarea
        className="custom-textarea "
        placeholder="Write your message in here.."
        value={text}
        onIonChange={handleText}
        onIonBlur={saveText}
      />

      <IonLabel className="color_label">
        Choose a color
      </IonLabel>
      <IonRadioGroup className="radio-group" value={color} onIonChange={handleColor} onBlur={saveColor}>
        <IonRadio className="green-radio" value="green" ></IonRadio>
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

export default NotePage;
