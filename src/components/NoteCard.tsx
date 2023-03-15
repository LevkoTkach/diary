import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem, } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import './NoteCard.css';

interface Params {
  className: string;
  title: string;
  text: string;
  routerLink: string;
}

const NoteCard: React.FC<Params> = (params) => {

  return (
    <IonItem>
      <IonCard className={params.className} button={true} routerLink={params.routerLink}>
        <IonCardHeader>
          <IonCardTitle color='light'>{params.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {params.text}
        </IonCardContent>
        <IonIcon color='light' className='icon-in-card' icon={arrowForwardOutline}>
        </IonIcon>
      </IonCard>
    </IonItem >
  );
}

export default NoteCard;
