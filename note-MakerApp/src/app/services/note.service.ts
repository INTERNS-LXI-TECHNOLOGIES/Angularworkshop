import { Injectable } from '@angular/core';
import { Note } from 'src/app/note';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscNote } from '../discnote';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  [x: string]: any;


  private notesUrl = 'api/notes';
  private discUrl = 'api/discnotes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }


getNotes (): Observable<Note[]> {
  return this.http.get<Note[]>(this.notesUrl);
}

addNote (notes: Note): Observable<Note> {
  return this.http.post<Note>(this.notesUrl, notes, this.httpOptions);
  }

getDiscNotes (): Observable<DiscNote[]> {
  return this.http.get<DiscNote[]>(this.discUrl);
}

addDiscNote (notediscs: DiscNote): Observable<DiscNote> {
  return this.http.post<DiscNote>(this.discUrl, notediscs, this.httpOptions);
  }

  deleteNote(note: Note): Observable<Note> {
    const id = typeof note === 'number' ? note : note.id;
  const url = `${this.notesUrl}/${id}`;

  return this.http.delete<Note>(url, this.httpOptions);
  }
  deleteDiscNote(discnote: DiscNote): Observable<DiscNote> {
    const id = typeof discnote === 'number' ? discnote : discnote.id;
  const url = `${this.discUrl}/${id}`;

  return this.http.delete<Note>(url, this.httpOptions);
  }
  saveBullet (note: Note): Observable<Note> {
    return this.http.put<Note>(this.notesUrl, note, this.httpOptions);
  }

    getNote(id: number): Observable<Note> {
      const url = `${this.notesUrl}/${id}`;
      return this.http.get<Note>(url);
  }
  getDiscNote(id: number): Observable<DiscNote> {
    const url = `${this.discUrl}/${id}`;
    return this.http.get<DiscNote>(url);
}
  searchNotes(term: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.notesUrl}/?name=${term}`);

  }
  searchDiscNotes(term: string): Observable<DiscNote[]> {
    return this.http.get<DiscNote[]>(`${this.discUrl}/?name=${term}`);

  }
  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.notesUrl, note, this.httpOptions);
  }
}



