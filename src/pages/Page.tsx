import { IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonLabel, IonMenuButton, IonNavLink, IonPage, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              Settings<IonIcon></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonTitle>Select a day compose</IonTitle>
          <IonLabel>header 2</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButtons>
          <IonDatetime></IonDatetime>
        </IonButtons>

        <IonButton>compose</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Page;
