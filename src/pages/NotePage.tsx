import React from "react";
import { Component } from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonLoading, IonPage, IonRadio, IonRadioGroup, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import TextEditor from "../components/TextEditor";
import { RouteComponentProps } from "react-router";
import { arrowBackOutline } from "ionicons/icons";
import './NotePage.css';

interface AddProps {
  date: string;
}

interface AddStates {
  date: string;
}

class NotePage extends Component<RouteComponentProps<AddProps>> {

  render() {
    const save = (newValue: string) => {
      console.log('save', newValue);
    }
    const titleDate: string = this.props.match.params.date;

    return (
      <IonPage >
        <IonPage className="page">          
          <IonHeader className="ion-no-border header">
            <IonButton shape="round" fill="clear" className="back-button">
              <IonIcon className="arrow-icon" slot="start" icon={arrowBackOutline} ></IonIcon>
              Back
            </IonButton>
            <IonLabel className="title-date">{titleDate}</IonLabel>
            <IonButton shape="round" fill="clear" className="save-button">
              Save
            </IonButton>
          </IonHeader>          
            <IonTextarea
              className="title-textarea ion-no-padding"
              placeholder="  Title"
            ></IonTextarea>
            <IonTextarea
              className="custom-textarea "
              placeholder="Write your message in here.."
            ></IonTextarea>
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
        <IonButton className="google-ads-area" >Google Ads</IonButton>
      </IonPage>
    );
  }
}

export default NotePage;