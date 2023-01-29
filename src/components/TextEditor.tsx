import { Component, FormEvent, FormEventHandler } from 'react';
import { IonTextarea, TextareaChangeEventDetail } from '@ionic/react';


interface AddProps {
  value: string;
  onChange: (value: string) => void
}

class TextEditor extends Component<AddProps> {
  onChange(e: CustomEvent) {
    this.props.onChange(e.detail.value);
  }
  render() {
    return (
      <IonTextarea
        placeholder="Type something here"
        value={this.props.value}
        onIonChange={(e) => this.onChange(e)}
      ></IonTextarea>
    );
  }
}
export default TextEditor;
