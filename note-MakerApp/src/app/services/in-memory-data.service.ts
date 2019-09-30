import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from 'src/app/note';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      { id: 1, title: 'title1' , discription: 'this is my first title', date: '24/9/19'},
      { id: 2, title: 'title2' , discription: 'this is my second title', date: '24/9/19'},
      { id: 3, title: 'title3' , discription: 'this is my third title', date: '24/9/19'},

    ];
    return {notes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
