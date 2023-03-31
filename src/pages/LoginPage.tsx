import React, { useEffect } from "react";
import { IonPage, IonButton, IonImg, IonContent, IonItemGroup } from "@ionic/react";
import '../pages/LoginPage.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Avatar1 from '../pages/girl1.png'
import Avatar2 from '../pages/girl2.png'
import Background from '../pages/background-light.png'
import BackgroundDark from '../pages/background-darck.png'


const LoginPage: React.FC<{}> = () => {

  useEffect(() => {
    if (localStorage.getItem('dark-theme') === 'true') {
      document.body.classList.add("dark-theme");
    }
    return () => localStorage.setItem("getStarted", "true");
  });
  const background = !localStorage.getItem('dark-theme') ? Background : BackgroundDark;
  return (
    <IonPage>
      <IonContent fullscreen>
        <Swiper
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="slide">
            <IonImg className="avatar1" src={Avatar1}></IonImg>
            <IonItemGroup className="text-group">
              <h2>Extension for your<br></br>thoughts and feelings </h2>
              <p>
                Diary is a personal document of an individual to<br></br>store his
                her emotions, thoughts or feelings on<br></br>daily basis.
              </p>
            </IonItemGroup>
            <IonImg src={background} className="imgBG"></IonImg>
          </SwiperSlide>

          <SwiperSlide className="slide2">
            <IonImg src={Avatar2} className="avatar2"></IonImg>
            <IonItemGroup className="text-group">
              <h2 >
                Compose your<br></br>
                ideas and emotions
              </h2>
              <p>
                You can write about whatever you like, free of <br></br>
                outside judgment or criticism. It should be an<br></br>
                extension of your mind: safe and free.
              </p>
            </IonItemGroup>
            <IonImg src={background} className="imgBG"></IonImg>
          </SwiperSlide>
        </Swiper>

        <IonButton
          routerLink='/main'
          className="login-button"
          shape="round">
          Get Started
        </IonButton>

      </IonContent>
    </IonPage >
  );
};

export default LoginPage;
