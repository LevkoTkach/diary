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
          <IonCardTitle>{params.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent >
          {params.text}
        </IonCardContent>
        <IonIcon className='icon-in-card' icon={arrowForwardOutline}>
        </IonIcon>
      </IonCard>
    </IonItem >
  );
}

export default NoteCard;
