import React from "react";
import { FormEvent, FormEventHandler } from 'react';
import { IonButton, IonHeader, IonIcon, IonLabel, IonPage, IonRadio, IonRadioGroup, IonTextarea } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import './NotePage.css';
import { useParams } from "react-router";
import TextEditor from "../components/TextEditor";

interface addProps {
  date: string;
}

const NotePage: React.FC<addProps> = () => {
  const { date } = useParams<{ date: string; }>();
  const titleDate: string = date;


  const saveTitle = (newValue: string) => {
    const key: string = 'title' + date;
    localStorage.setItem(key, newValue);
    console.log('s', newValue);

  }
  const saveNote = (newValue: string) => {
    const key: string = 'note' + date;
    localStorage.setItem(key, newValue);
    console.log('s', newValue);
    return newValue;
  }

  const setting = (id: string) => {
    return localStorage.getItem(id + date)!;
  }
  const getTitle = setting('title');
  const getNote = setting('note');

  return (
    <IonPage >
      <IonPage className="page">
        <IonHeader className="ion-no-border header">
          <IonButton shape="round" fill="clear" className="back-button">
            <IonIcon className="arrow-icon" slot="start" icon={arrowBackOutline}>
            </IonIcon>
            Back
          </IonButton>
          <IonLabel className="title-date">{titleDate}</IonLabel>
          <IonButton shape="round" fill="clear" className="save-button">
            Save
          </IonButton>
        </IonHeader>
        
        <TextEditor value={getTitle} className="title-textarea ion-no-padding"
          placeholder=" Title" onChange={saveTitle}></TextEditor>
        <TextEditor value={getNote} className="custom-textarea "
          placeholder="Write your message in here.." onChange={saveNote}/>

        <IonLabel className="color_label">
          Choose a color
        </IonLabel>
        <IonRadioGroup className="radio-group" value="custom-checked">
          <IonRadio className="green-radio" value="custom-checked"></IonRadio>
          <IonRadio className="blue-radio"></IonRadio>
          <IonRadio className="purple-radio"></IonRadio>
          <IonRadio className="red-radio"></IonRadio>
          <IonRadio className="yellow-radio"></IonRadio>
          <IonRadio className="brown-radio"></IonRadio>
        </IonRadioGroup>
      </IonPage>
      <IonButton
        className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
}

export default NotePage;
