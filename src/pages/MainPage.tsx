import { IonButton, IonDatetime, IonHeader, IonIcon, IonLabel, IonPage, IonRouterLink, IonTitle } from '@ionic/react';
import { pencilSharp, settingsSharp } from 'ionicons/icons';
import { Router, useParams } from 'react-router';
import { Route } from 'workbox-routing';
import { format, parseISO } from 'date-fns';


import './MainPage.css';

const MainPage: React.FC<{}> = () => {

  let date: string = new Date().toISOString();
  
  const dateSetter = (e: CustomEvent) => {
    console.log((e.detail.value).slice(0, 10)); 
  };
  
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

      <IonDatetime
        onIonChange={ dateSetter }
        size="cover"
        className='calendar'
        presentation="date"
        locale="en-GB"
        firstDayOfWeek={1}
      ></IonDatetime>

      <IonButton
        routerLink={`/note/${format(parseISO(date), 'yyyy-MM-dd')}`}
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
