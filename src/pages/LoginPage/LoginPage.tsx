import { IonPage, IonButton, IonLabel, IonImg, IonContent, IonIcon } from "@ionic/react";
import '../LoginPage/LoginPage.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import avatar1 from '../LoginPage/girl1.png'
import avatar2 from '../LoginPage/girl2.png'
import BG from '../LoginPage/backgrond-lite.png'
import GoogleIcon from "../LoginPage/logos_google-icon.svg";

const LoginPage: React.FC<{}> = () => {

  return (
    <IonPage>
      <IonContent>
        <Swiper
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>

          <SwiperSlide className="slide">
            <IonImg className="avatar1" src={avatar1}></IonImg>
            <IonLabel>
              <h2>Extension for your<br></br>thoughts and feelings </h2>
              <p>
                Diary is a personal document of an individual to<br></br>store his
                her emotions, thoughts or feelings<br></br>on daily basis.
              </p>
            </IonLabel>
            <IonImg src={BG} className="imgBG"></IonImg>
          </SwiperSlide>

          <SwiperSlide className="slide2">
            <IonImg className="avatar2" src={avatar2}></IonImg>
            <IonLabel>
              <h2 >
                Compose your<br></br>
                ideas and emotions
              </h2>
              <p>
                You can write about whatever you like, free of <br></br>
                outside judgment or criticism. It should be an<br></br>
                extension of your mind: safe and free.
              </p>
            </IonLabel>
            <IonImg src={BG} className="imgBG"></IonImg>
          </SwiperSlide>

        </Swiper>

        <IonButton
          routerLink={''}
          className="login-button"
          shape="round">
          <IonIcon size="small" slot="start" icon={GoogleIcon}></IonIcon>
          Login with Google account
        </IonButton>

      </IonContent>
      <IonButton className="google-ads-area" >Google Ads</IonButton>
    </IonPage>
  );
};

export default LoginPage;
