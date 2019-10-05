import { NoteService } from 'src/app/services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';


@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {

  notes: Note[];
  note: Note = {
    discription: []
  };
  discription = '';

  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }
  ngOnInit() {
    this.getNotes();
  }
  delete(note: Note): void {
    this.notes = this.notes.filter(h => h !== note);
    this.noteService.deleteNote(note).subscribe();
    console.log('deleted', this.notes);
  }
  search(value: string): void {
    console.log('searched');
  }
  save( ): void {
    this.note.discription.push(this.discription);
    this.noteService.saveBullet(this.note)
      .subscribe(note => {
        console.log(this.note.discription);
        this.notes.push(this.note);
        console.log('saved', this.notes);
      });
  }

}
