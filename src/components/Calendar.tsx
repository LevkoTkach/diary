import { IonItemGroup, IonIcon } from "@ionic/react";
import { format } from "date-fns";
import { ellipse, addCircleOutline } from "ionicons/icons";
import { DateFormatter, DayPicker } from "react-day-picker";
import { NoteService } from "../NoteService";
import "../components/Calendar.css"
import { useEffect, useState } from "react";

const service = NoteService.getInstance();

const notesIcon = (day: Date) => {
  const dayNotes = service.findByDate(format(day, "yyyy-MM-dd"));
  return (
    <IonItemGroup>
      {dayNotes.slice(0, 3).map((note, index) => (
        <IonIcon key={index} className='notesIcon' color={note.color} src={ellipse} />
      ))}
      {dayNotes.length > 3 && <IonIcon className='notesIcon' icon={addCircleOutline} />}
    </IonItemGroup>
  );
};

const formatDay: DateFormatter = (day, options) => {

  return (
    <>
      {format(day, 'd', { locale: options?.locale })}
      <div>{notesIcon(day)}</div>
    </>
  );
};

interface Params {
  date: string,
  onDayClick: (day: Date) => void,
}
const Calendar: React.FC<Params> = (params) => {
  const [montn, setMonts] = useState<Date>(new Date(params.date));
  useEffect(() => { 
    setMonts(new Date(params.date))
  }, [params.date])
  return (
    <DayPicker
      showOutsideDays
      month={montn}
      onMonthChange={setMonts}
      selected={new Date(params.date)}
      onDayClick={(day: Date) => params.onDayClick(day)}
      formatters={{ formatDay }}
    />
  );
}

export default Calendar;

