import React from "react";
import { IonButton,  IonCol, IonContent, IonHeader, IonIcon,  IonPage,  IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";



const NoteListPage: React.FC = () => {
  const { date } = useParams<{ date: string; }>();

      const save = (newValue: string) => {
      console.log('save', newValue);
  }
  
    const titleDate: string = date + ' notaition';

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
              icon
            </IonIcon>
          </IonButton>

        </IonContent>
        <IonButton>done</IonButton>
      </IonPage>
    );
  }


export default NoteListPage;