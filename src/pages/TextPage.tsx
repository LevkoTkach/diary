import React from "react";
import { Component } from "react";
import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import TextEditor from "../components/TextEditor";
import { RouteComponentProps } from "react-router";


interface AddProps {
  date: string;
}

interface AddStates {
  
}

class TextPage extends Component<RouteComponentProps<AddProps>> {

  render() {
    console.log(this.props);
    const save = (newValue: string) => {
      console.log('save', newValue);
    }
    
    const titleDate: string = this.props.match.params.date + ' notaition';
    const updatedAt = new Date();
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton>
              </IonMenuButton>
            </IonButtons>
            <IonTitle>
              {titleDate}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonLabel>{"Last updated " + updatedAt}</IonLabel>
          <TextEditor
            value={""}
            onChange={save}
          ></TextEditor>
        </IonContent>
      </IonPage>
    );
  }
}

export default TextPage;