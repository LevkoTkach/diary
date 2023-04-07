import { deleteNote, getUserNotes, saveNote } from "./firebase";

export type NoteColor = 'first' | 'second' | 'third' | 'forth' | 'fifth' | 'sixst';

export interface NoteModel {
  id: number;
  date: string;
  color: NoteColor;
  title: string;
  text: string;
}

export class NoteService {

  private data: NoteModel[] = [];

  private static instance: NoteService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new NoteService();
    }
    return this.instance;
  }

  create(date: string, color: NoteColor, title: string, text: string) {
    if (!date) {
      throw new Error('[NoteService] date invalid ');
    }
    const id = Date.now();
    this.data.push({
      id,
      date,
      color,
      title,
      text
    })
    return id;
  }

  update(id: number, color: NoteColor, title: string, text: string) {
    const record = this.byId(id);
    record.color = color;
    record.title = title;
    record.text = text;
  }

  setDate(id: number, date: string) {
    const record = this.byId(id);
    record.date = date;
  }
  setColor(id: number, color: NoteColor) {
    const record = this.byId(id);
    record.color = color;
  }
  setTitle(id: number, title: string) {
    const record = this.byId(id);
    record.title = title;
  }
  setText(id: number, text: string) {
    const record = this.byId(id);
    record.text = text;
  }
  findByText() { };

  findByDate(date: string) {
    const record = this.data.filter(d => d.date === date);
    return record;
  }

  getById(id: number) {
    const record = this.byId(id);
    return { ...record };
  }
  
  private byId(id: number) {
    const record = this.data.find(d => d.id === id);
    if (!record) {
      window.alert('Record not found');
      throw new Error('[NoteServise] Record not found');
    }
    return record;
  }
  
  async load() {
    try {
      const loadNotes = await getUserNotes();
      this.data = loadNotes!;
      console.log(' I  get notes ');
      console.log(loadNotes);
    } catch (error) {
      console.log('I dont get notes on servise level');
    }
  };
    
  save(id: number, date: string, color: NoteColor, title: string, text: string) {
    saveNote(id, date, color!, title!, text!);
  }
  delete(id: number) {
    this.data = this.data.filter(d => d.id !== id);
    deleteNote(id);
  }
}