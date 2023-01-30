import React from "react";
import { Component } from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import TextEditor from "../components/TextEditor";
import { RouteComponentProps } from "react-router";


interface AddProps {
  date: string;
}

class NoteListPage extends Component<RouteComponentProps<AddProps>> {

  render() {
    const save = (newValue: string) => {
      console.log('save', newValue);
    }
    const titleDate: string = this.props.match.params.date + ' notaition';

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButton>
              <IonIcon></IonIcon>
              Back
            </IonButton>
          </IonToolbar>          
        </IonHeader>
        <IonContent >
          <IonTitle>
            {titleDate}
          </IonTitle>
        </IonContent>
        <IonButton>done</IonButton>
      </IonPage>
    );
  }
}

export default NoteListPage;