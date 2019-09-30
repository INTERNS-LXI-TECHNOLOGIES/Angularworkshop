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
  constructor(private noteService: NoteService) { }


  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }
  ngOnInit() {
    this.getNotes();
  }
  create( title: string, discription: string, date: string ): void {
    this.noteService.addNote({title, discription, date} as Note)
    .subscribe(notes => {
      this.notes.push(notes);
    });
}

}
