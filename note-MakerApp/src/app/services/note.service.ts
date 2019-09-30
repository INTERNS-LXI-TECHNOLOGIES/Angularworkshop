import { Injectable } from '@angular/core';
import { Note } from 'src/app/note';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'api/notes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  
getNotes (): Observable<Note[]> {
  return this.http.get<Note[]>(this.notesUrl);
}

addNote (note: Note): Observable<Note> {
  return this.http.post<Note>(this.notesUrl, note, this.httpOptions);
  }
}

