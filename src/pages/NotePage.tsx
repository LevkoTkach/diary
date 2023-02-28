import React, { useEffect, useState } from "react";
import { IonButton, IonHeader, IonIcon, IonLabel, IonPage, IonRadio, IonRadioGroup, IonTextarea } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import './NotePage.css';
import { useParams } from "react-router";
import TextEditor from "../components/TextEditor";
import { format, parseISO } from 'date-fns';
import { NoteColor, NoteService } from "../NoteService";

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

        <IonLabel className="title-date">{date && format(parseISO(date!), 'd ccc / MMM yyyy')}</IonLabel>

        <IonButton
          routerLink={`/note-list/${date}`}
          shape="round"
          fill="clear"
          className="save-button">
          Save
        </IonButton>
      </IonHeader>

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

      <IonLabel className="color_label">
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
      <IonButton
        className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
}

export default React.memo(NotePage);
