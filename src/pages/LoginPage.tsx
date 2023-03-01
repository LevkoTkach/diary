import React, { useEffect } from "react";
import { IonPage, IonButton, IonLabel, IonImg, IonContent, IonIcon } from "@ionic/react";
import '../pages/LoginPage.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Avatar1 from '../pages/girl1.png'
import Avatar2 from '../pages/girl2.png'
import BG from '../pages/background-light.png'
import GoogleIcon from "../pages/logos-google-icon.svg";

const LoginPage: React.FC<{}> = () => {

  useEffect(() => {
    return () => localStorage.setItem("getStarted", "true");
  });
    
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
            <IonImg className="avatar1" src={Avatar1}></IonImg>
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
            <IonImg src={Avatar2} className="avatar2"></IonImg>
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
          routerLink='/main'
          className="login-button"
          shape="round">
          Get Started
        </IonButton>

      </IonContent>    
    </IonPage>
  );
};

export default LoginPage;
