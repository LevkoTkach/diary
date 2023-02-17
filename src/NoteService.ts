type noteBackground = 'greenBG' | 'blueBG' | 'purpleBG' | 'redBG' | 'yellowBG' | 'brownGN';

export interface NoteModel {
  id: number;
  date:string;
  color: noteBackground;
  title: string;
  text: string;
}

export class NoteService {
  
  private  data: NoteModel[] = [];
  private readonly key = 'notes';

  private static instance: NoteService;
  
  static getInstance(){
    if (!this.instance) {
      this.instance = new NoteService();
    }
    return this.instance;
  }

  private constructor() {
    this.load();
  }

  create(date: string, color: noteBackground, title: string, text: string) { 
    if (!date) {
      throw new Error ('[NoteServise] date invalid ');
      return;
    }
    const id = Date.now();
    this.data.push({
      id,
      date,
      color,
      title,
      text
    })
    this.save();
    return id;
  }  
  setDate(id: number, date: string) {
    const record = this.byId(id);
    record.date = date;
    this.save();
  }
  setColor(id: number, color: noteBackground) {
    const record = this.byId(id);
    record.color = color;
    this.save();
  }
  setTitle(id: number, title:string) { 
    const record = this.byId(id);
    record.title = title;
    this.save();
  }
  setText(id: number, text:string) { 
    const record = this.byId(id);
    record.text = text;
    this.save();
  }
  findByText() { };

  findByDate(date: string) {
    const record = this.data.filter(d => d.date === date);
    return record;
  }

  clearAmptyNotes() {
    this.data = this.data.filter(d => d.title! || d.text!);
    this.save();
  }
  
  getById(id:number) {
    const record = this.byId(id);
    return { ...record };
  }
  private byId(id:number){
    const record = this.data.find(d => d.id === id);
    if (!record) throw Error('[Noteservise] record not found');
    return record;
  }
  
  private save() { 
    localStorage.setItem(this.key, JSON.stringify(this.data))
  }
  private load() {
    this.data = !localStorage.getItem(this.key) ? [] : JSON.parse(localStorage.getItem(this.key)!);
  }
    
}