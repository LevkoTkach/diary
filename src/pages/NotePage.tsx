import React from "react";
import { Component } from "react";
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from "@ionic/react";
import TextEditor from "../components/TextEditor";
import { RouteComponentProps } from "react-router";


interface AddProps {
  date: string;
}

interface AddStates {

}

class NotePage extends Component<RouteComponentProps<AddProps>> {

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
              <IonIcon>kjbilb</IonIcon>
              Back
            </IonButton>
            <IonTitle>
              {titleDate}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <TextEditor
            value={"title"}
            onChange={save}
          />
          <TextEditor
            value={"note"}
            onChange={save}
          />
        </IonContent>
        <IonToolbar>
          <IonLabel>
          </IonLabel>
          <IonRadioGroup >
            <IonRadio></IonRadio>
            <IonRadio></IonRadio>
            <IonRadio></IonRadio>
            <IonRadio></IonRadio>
            <IonRadio></IonRadio>
            <IonRadio></IonRadio>
          </IonRadioGroup>
        </IonToolbar>
        <IonButton>done</IonButton>
      </IonPage>
    );
  }
}

export default NotePage;