import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItemGroup, IonLabel, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from "@ionic/react";
import './NotePage.css';
import { useParams } from "react-router";
import TextEditor from "../components/TextEditor";
import { format, parseISO } from 'date-fns';
import { NoteColor, NoteService } from "../NoteService";
import { checkmarkOutline } from "ionicons/icons";

interface Params {
  id: string;
  date: string;
}
const service = NoteService.getInstance();

const NotePage: React.FC<Params> = () => {
  const params = useParams<Params>();
  const [date] = useState<string>(() => params.date.toString());
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();
  const [color, setColor] = useState<NoteColor>();

  useEffect(() => {
    if (params.id) {
      const note = service.getById(+params.id);
      setTitle(note.title);
      setText(note.text);
      setColor(note.color);
    } else {
      setTitle('');
      setText('');
      setColor('green');
    }
  }, [params.id])

  useEffect(() => {
    if (!title && !text) {
      return;
    }
    if (!params.id) {
      const newId = service.create(date, color!, title!, text!);
      params.id = newId.toString();
    } else {
      service.update(+params.id, color!, title!, text!);
    }
  }, [title, text, color]);



  return (

    <IonPage>
      <IonHeader className="ion-no-border note-ion-header">
        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color="primary" text="Back"></IonBackButton>
          </IonButtons>
          <IonTitle color='dark' className="title-date">{date && format(parseISO(date!), 'd ccc / MMM yyyy')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemGroup className="left-right-margin-16px" >
          <TextEditor
            value={title!}
            className="title-textarea ion-no-padding"
            placeholder=" Title"
            onChange={setTitle}
          />
          <TextEditor
            value={text!}
            className="custom-textarea "
            placeholder="Write your message in here.."
            onChange={setText}
          />
          <IonLabel color='dark' className="color-label">
            Choose a color
          </IonLabel>
          <IonRadioGroup className="radio-group" value={color} onIonChange={e => setColor(e.detail.value)} >
            <IonRadio className="green-radio" value="green" ></IonRadio>
            <IonRadio className="blue-radio" value="blue"></IonRadio>
            <IonRadio className="purple-radio" value="purple"></IonRadio>
            <IonRadio className="red-radio" value="red"></IonRadio>
            <IonRadio className="yellow-radio" value="yellow"></IonRadio>
            <IonRadio className="brown-radio" value="brown"></IonRadio>
          </IonRadioGroup>
        </IonItemGroup>
      </IonContent>

      <IonButton 
        routerLink={`/note-list/${date}`}
        className="dode-button"
        shape="round">
        <IonIcon icon={checkmarkOutline}></IonIcon>
        Done
      </IonButton>

    </IonPage>
  );
}

export default React.memo(NotePage);
