import React from "react";
import { Component } from "react";
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react";

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

          <IonButton>
            <IonCol>
              <IonTitle>Title</IonTitle>
              <IonText> note text </IonText>
            </IonCol>
            <IonIcon>
              dfghdfgh
            </IonIcon>
          </IonButton>

        </IonContent>
        <IonButton>done</IonButton>
      </IonPage>
    );
  }
}

export default NoteListPage;