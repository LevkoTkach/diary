import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { format, parseISO } from 'date-fns';
import { pencilSharp, settingsSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ComponentDayPicker from '../components/ComponentDayPicker';
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
    if (params.date) {
      setDate(params.date)
    };
  }, [params])

  useEffect(() => {
    document.body.classList.add(localStorage.getItem('font') ? localStorage.getItem('font')! : "nunito");
  }, []);

  return (
    <IonPage >
      <IonHeader className='main-header'>
        <IonToolbar className='main-tollbar'>
          <IonButtons slot="end">
            <IonButton
              color='dark'
              routerLink='/settings'
              shape='round'
              fill='clear'
              className='settings-button'>
              Settings
              <IonIcon color='tertiary' slot="end" icon={settingsSharp}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonTitle color='warning' className='main-header-title'>Feel free to create</IonTitle>
        <IonTitle color='dark' className='main-header-date-title'>{format(parseISO(date!), 'd MMMM')} selected</IonTitle>
      </IonHeader>
      <IonContent >

        <ComponentDayPicker
          date={date}
          onDayClick={(day: Date) => setDate(format(day, "yyyy-MM-dd"))}
        />

      </IonContent>
      {
        (function () {
          if (service.findByDate(date).length) {
            return <IonButton
              color="success"
              routerLink={`/note-list/${date}`}
              className="compose-button"
              shape="round">
              View Notes
            </IonButton>
          };
          return (
            <IonButton
              color="success"
              routerLink={`/note/${date}`}
              className="compose-button"
              shape="round"
            >
              <IonIcon className="pen-icon" slot="start" icon={pencilSharp}></IonIcon>
              Make a note
            </IonButton>
          )
        })()
      }
    </IonPage >
  );
};

export default MainPage;
