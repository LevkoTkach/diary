import React from 'react';
import { IonTextarea } from '@ionic/react';

interface Params {
  value: string,
  className: string,
  placeholder: string,
  onChange: (e: string) => void,
}

const TextEditor: React.FC<Params> = (params) => { 

  const textChange = (e: CustomEvent) => {
    params.onChange(e.detail.value as string);
  }
  

  return (
    <IonTextarea
      autoGrow={true}
      value={params.value}
      onIonChange={(e) => textChange(e)}
      className={params.className}
      placeholder={params.placeholder} />
  );
}

export default TextEditor;
