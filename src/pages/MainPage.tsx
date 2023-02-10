import { IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { pencilSharp, settingsSharp } from 'ionicons/icons';
import { useParams } from 'react-router';
import './MainPage.css';

const MainPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage >
      <IonHeader        
        className='main-header'>
        <IonButton
          shape='round'
          fill='clear'
          className='settings-button'>
          Settings
          <IonIcon
            color='primary'
            slot="end"
            icon={settingsSharp}></IonIcon>
        </IonButton>
        <IonTitle className='main-header-title'>Select a day to compose</IonTitle>
        <IonLabel className='main-header-label'>Keep your diary updated</IonLabel>
      </IonHeader>

      <IonDatetime>
      </IonDatetime>

      <IonButton
        className="compose-button"
        shape="round">
        <IonIcon
          className="pen-icon"
          slot="start"
          icon={pencilSharp}>
        </IonIcon>
        Compose
      </IonButton>
      <IonButton className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
};

export default MainPage;
