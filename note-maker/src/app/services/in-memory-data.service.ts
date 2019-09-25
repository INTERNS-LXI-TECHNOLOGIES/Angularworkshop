import { Note } from 'src/app/note';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const notes = [
     { id: 1, title: 'title1', discription: 'this is  my 1st sample note'},
     { id: 2, title: 'title2', discription: 'this is  my 2nd sample note'},
     { id: 3, title: 'title3', discription: 'this is  my 3rd sample note'},
    ];
    return(notes);
  }
  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;

}
}
