import { IonButton, IonDatetime, IonHeader, IonIcon, IonLabel, IonPage, IonTitle } from '@ionic/react';
import { pencilSharp, settingsSharp } from 'ionicons/icons';
import { useState } from 'react';
import { NoteService } from '../NoteService';
import './MainPage.css';

const service = NoteService.getInstance();

const MainPage: React.FC<{}> = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  let dateSetter = (e: CustomEvent) => {
    console.log((e.detail.value).slice(0, 10));
    const newDate: string = e.detail.value;
    setDate(newDate.slice(0, 10));
  };

  const buttonLink = service.findByDate(date).length ? `/note-list/${date}` : `/note/${date}`;
  const buttonName = service.findByDate(date).length ? 'View Notes' : 'Compose';

  return (
    <IonPage >
      <IonHeader
        className='main-header'>
        <IonButton shape='round' fill='clear' className='settings-button'>
          Settings
          <IonIcon color='primary' slot="end" icon={settingsSharp}></IonIcon>
        </IonButton>
        <IonTitle className='main-header-title'>Select a day to compose</IonTitle>
        <IonLabel className='main-header-label'>Keep your diary updated</IonLabel>
      </IonHeader>

      <IonDatetime
        value={date}
        onIonChange={dateSetter}
        size="cover"
        className='calendar'
        presentation="date"
        locale="en-GB"
        firstDayOfWeek={1}
      />

      <IonButton
        routerLink={`/note-list/${date.slice(0, 10)}`}
        className="compose-button"
        shape="round">
        to route
      </IonButton>

      <IonButton
        routerLink={buttonLink}
        className="compose-button"
        shape="round">
        <IonIcon
          className="pen-icon"
          slot="start"
          icon={pencilSharp}>
        </IonIcon>
        {buttonName}
      </IonButton>
      <IonButton className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
};

export default MainPage;
