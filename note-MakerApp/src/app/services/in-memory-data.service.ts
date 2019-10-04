import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from 'src/app/note';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      { id: 1, title: 'title1' , discription: ['this is my first title', 'goooo', 'gooo', 'goooo'], date: '24/9/19'},
      { id: 2, title: 'title2' , discription: ['this is my second title'], date: '24/9/19'},
      { id: 3, title: 'title3' , discription: ['this is my third title'], date: '24/9/19'},

    ];
    const discnotes = [
      { id: 1, title: 'disc1' , discription: 'disc1 of description note', date: '24/9/19'},
      { id: 2, title: 'disc2' , discription: 'disc2 of description note', date: '24/9/19'},
      { id: 3, title: 'disc3' , discription: 'disc3 of description note', date: '24/9/19'},

    ];
    return {notes, discnotes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
  genDiscId(discnotes: Note[]): number {
    return discnotes.length > 0 ? Math.max(...discnotes.map(discnote => discnote.id)) + 1 : 11;
  }
}
