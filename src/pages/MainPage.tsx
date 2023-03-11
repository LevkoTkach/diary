import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItemGroup, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { format, parseISO } from 'date-fns';
import { addCircleOutline, ellipse, pencilSharp, settingsSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NoteService } from '../NoteService';
import './MainPage.css';
import { DateFormatter, DayPicker } from 'react-day-picker';


const service = NoteService.getInstance();

const notesIcon = (day: Date) => {
  const dayNotes = service.findByDate(format(day, "yyyy-MM-dd"));
  return (
    <IonItemGroup>
      {dayNotes.slice(0, 3).map((note, index) => (
        <IonIcon key={index} className='notesIcon' color={note.color} src={ellipse} />
      ))}
      {dayNotes.length > 3 && <IonIcon className='notesIcon' icon={addCircleOutline} />}
    </IonItemGroup>
  );
};

const formatDay: DateFormatter = (day, options) => {
  return (
    <>
      {format(day, 'd', { locale: options?.locale })}
      <br />
      {notesIcon(day)}
    </>
  );
};

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

        <IonTitle color='warning' className='main-header-title'>Compose now</IonTitle>
        <IonTitle color='dark' className='main-header-date-title'>{format(parseISO(date!), 'd MMMM')} selected</IonTitle>
      </IonHeader>
      <IonContent >

        <DayPicker
          selected={new Date(date)}
          onDayClick={(day: Date) =>setDate(format(day, "yyyy-MM-dd"))}
          formatters={{ formatDay }}
        />

      </IonContent>
      {
        (function () {
          if (service.findByDate(date).length) {
            return <IonButton
              color="danger"
              routerLink={`/note-list/${date}`}
              className="compose-button"
              shape="round">
              View Notes
            </IonButton>
          };
          return <IonButton
            color="danger"
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
        })()
      }

    </IonPage >
  );
};

export default MainPage;
