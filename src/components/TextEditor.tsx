import React from 'react';
import { FormEvent, FormEventHandler } from 'react';
import { IonTextarea, TextareaChangeEventDetail } from '@ionic/react';
import { RouteComponentProps, useParams } from 'react-router';

interface addProps {
  value: string;
  className: string;
  placeholder: string;
  onChange: (e: string) => void;
  // onBlur: (e: string) => void;
}

const TextEditor: React.FC<addProps> = (props) => { 

  const textChange = (e: CustomEvent) => {
    props.onChange(e.detail.value as string);
  }
  

  return (
    <IonTextarea
      // onIonBlur={(e) => textChange(e) }
      value={props.value}
      onIonChange={(e) => textChange(e)}
      className={props.className}
      placeholder={props.placeholder}
    ></IonTextarea>
  );
}

export default TextEditor;
