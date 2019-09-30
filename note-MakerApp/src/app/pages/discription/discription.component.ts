import { NoteService } from 'src/app/services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';



@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css']
})
export class DiscriptionComponent implements OnInit {

  notes: Note[];
  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }

  ngOnInit() {
    this.getNotes();
  }
  add( title: string, discription: string, date: string ): void {
    this.noteService.addNote({title, discription, date} as Note)
    .subscribe(notes => {
      this.notes.push(notes);
    });
}


}
