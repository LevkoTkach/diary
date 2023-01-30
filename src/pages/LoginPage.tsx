import { IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonImg, IonLabel, IonMenuButton, IonNavLink, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {

  

  return (
    <IonPage>
      <IonSlides>
        <IonSlide>
          <IonImg>srtherth</IonImg>
        </IonSlide>
        <IonSlide>
          <IonImg>ertgertg</IonImg>
        </IonSlide>
      </IonSlides>
      
      <IonContent >    
        <IonButton>Login with Google account</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
