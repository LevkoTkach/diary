import React, { useState } from "react";
import { IonPage, IonButton, IonImg, IonContent, IonItemGroup, IonSpinner } from "@ionic/react";
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
import { useHistory } from "react-router-dom";
import { googleLogin } from "../firebase";


const LoginPage: React.FC<{}> = () => {

  let history = useHistory();
  const [load, getload] = useState(false);
  async function login() {
    getload(true);
    const res = await googleLogin();
    console.log(res ? 'sucses' : 'fail');
    if (res) history.push('/main');
    getload(false);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Swiper
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>

          <SwiperSlide className="slide">
            <IonImg className="avatar1" src={Avatar1}></IonImg>
            <IonItemGroup className="text-group">
              <h2>Extension for your<br></br>thoughts and feelings </h2>
              <p>
                Diary is a personal document of an individual to<br></br>store his
                her emotions, thoughts or feelings on<br></br>daily basis.
              </p>
            </IonItemGroup>
            <IonImg src={BG} className="imgBG"></IonImg>
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
            <IonImg src={BG} className="imgBG"></IonImg>
          </SwiperSlide>

        </Swiper>

        <IonButton
          onClick={login}
          className="login-button"
          shape="round"
        >
          login with goole
          {load && <IonSpinner></IonSpinner>}
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
