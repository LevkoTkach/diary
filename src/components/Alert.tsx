
import { IonButton, IonIcon, useIonAlert } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './Alert.css';


function Alert(params: { id: Number; }) {
  const [presentAlert] = useIonAlert();
  const history = useHistory();
  return (
    <>
      <IonButton
        color="primary" shape='round' className="list-back-button"
        onClick={() =>
          presentAlert({
            header: "Are you sure you want to cancel writing?",
            cssClass: 'custom-alert',
            message: 'Your content has not been saved yet. Continue writing if you want to save it.',
            buttons: [
              {
                text: 'Yes, cancel',
                role: 'confirm',
                cssClass: 'alert-button-confirm',
                handler: () => {
                  history.goBack();
                },
              },
              {
                text: 'Continue writing',
                role: 'cancel',
                cssClass: 'alert-button-cancel',
                handler: () => { },
              },
            ],
          })
        }
      >
        <IonIcon className="back-button-icon" icon={arrowBackOutline}></IonIcon>
        Back
      </IonButton>
    </>
  );
}
export default Alert;

