import { IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonLabel, IonPage,  IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './MainPage.css';

const MainPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage className='page'>
      <IonHeader className='main-header'>
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
          <IonDatetime
            presentation="date"
            locale="en-GB"
            firstDayOfWeek={1}
          ></IonDatetime>
        </IonButtons>

        <IonButton shape='round' className='compose-button'>compose</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default MainPage;
