import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import './NoteCard.css';

interface addProps {
  className: string;  
  title: string;
  text: string;
  routerLink: string;
}

const NoteCard: React.FC<addProps> = (props) => {

  return (
    <IonCard className={props.className} button={true} routerLink={props.routerLink}>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className='content-in-card'>
        {props.text}
      </IonCardContent>
      <IonIcon className='icon-in-card' icon={arrowForwardOutline}>
      </IonIcon>
    </IonCard>
  );
}

export default NoteCard;
