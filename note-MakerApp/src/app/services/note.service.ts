import { Injectable } from '@angular/core';
import { Note } from 'src/app/note';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

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

getDiscNotes (): Observable<Note[]> {
  return this.http.get<Note[]>(this.discUrl);
}

addDiscNote (notediscs: Note): Observable<Note> {
  return this.http.post<Note>(this.discUrl, notediscs, this.httpOptions);
  }

  deleteNote(note: Note): Observable<Note> {
    const id = typeof note === 'number' ? note : note.id;
  const url = `${this.notesUrl}/${id}`;

  return this.http.delete<Note>(url, this.httpOptions);
  }
  deleteDiscNote(discnote: Note): Observable<Note> {
    const id = typeof discnote === 'number' ? discnote : discnote.id;
  const url = `${this.discUrl}/${id}`;

  return this.http.delete<Note>(url, this.httpOptions);
  }
  saveDisc (note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, this.httpOptions);
  }
}



