import { IonButton, IonDatetime, IonHeader, IonIcon, IonLabel, IonPage, IonTitle } from '@ionic/react';
import { format, parseISO } from 'date-fns';
import { pencilSharp, settingsSharp } from 'ionicons/icons';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { NoteService } from '../NoteService';
import './MainPage.css';

const service = NoteService.getInstance();
interface Params {
  date: string;
}
const MainPage: React.FC<Params> = () => {
  const params = useParams<Params>();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  useEffect(() => { 
    if (params.date ) {
      setDate(params.date)
    };
  }, [params])
  
  useEffect(() => {
    document.body.classList.add(localStorage.getItem('font') ? localStorage.getItem('font')! : "nunito");
  }, []);

  let dateSetter = (e: CustomEvent) => {
    const newDate: string = e.detail.value;
    setDate(newDate.slice(0, 10));
  };


  return (
    <IonPage >
      <IonHeader
        className='main-header'>
        <IonButton routerLink='/settings' shape='round' fill='clear' className='settings-button'>
          Settings
          <IonIcon color='primary' slot="end" icon={settingsSharp}></IonIcon>
        </IonButton>
        <IonTitle className='main-header-title'>Compose now</IonTitle>
        <IonLabel className='main-header-label'>{format(parseISO(date!), 'd MMMM')} selected</IonLabel>
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

        {(function () {
        if (service.findByDate(date).length) {
          return <IonButton
            routerLink={`/note-list/${date}`}
            className="compose-button"
            shape="round">
            View Notes
          </IonButton>
        };
        return <IonButton
          routerLink={`/note/${date}`}
          className="compose-button"
          shape="round">
          <IonIcon
            className="pen-icon"
            slot="start"
            icon={pencilSharp}>
          </IonIcon>
          Compose
        </IonButton>
      })()}

    
    </IonPage>
  );
};

export default MainPage;
