import React from 'react';
import { IonTextarea } from '@ionic/react';

interface addProps {
  value: string;
  className: string;
  placeholder: string;
  onChange: (e: string) => void;
  
}

const TextEditor: React.FC<addProps> = (props) => { 

  const textChange = (e: CustomEvent) => {
    props.onChange(e.detail.value as string);
  }
  

  return (
    <IonTextarea value={props.value} onIonChange={(e) => textChange(e)}
      className={props.className} placeholder={props.placeholder} ></IonTextarea>
  );
}

export default TextEditor;
