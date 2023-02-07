import React from 'react';
import { FormEvent, FormEventHandler } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, } from '@ionic/react';
import { RouteComponentProps, useParams } from 'react-router';
import { arrowForwardOutline } from 'ionicons/icons';
import './NoteCadr.css';

interface addProps {
  className: string;
}

const NoteCard: React.FC<addProps> = (props) => {
  const { date } = useParams<{ date: string; }>();

  const setting = (id: string) => {
    return localStorage.getItem(id + date)!;
  }
  const getTitle = setting('title');
  const getNote = setting('note');

  return (
    <IonCard className={props.className} button={true}>
      <IonCardHeader className='header-in-card'>
        <IonCardTitle>{getTitle}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className='content-in-card'>
        {getNote}
      </IonCardContent>

      <IonIcon className='icon-in-card' icon={arrowForwardOutline}>
      </IonIcon>

    </IonCard>
  );
}

export default NoteCard;
