import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Note } from 'src/app/note';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'api/notes';
  constructor(private http: HttpClient) { }

  getNotes (): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
  log(arg0: string) {
    throw new Error('Method not implemented.');
  // tslint:disable-next-line: eofline
  }
}
