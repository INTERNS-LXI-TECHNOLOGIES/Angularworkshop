import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  notes: Note[];
  constructor(private noteService: NoteService) { }
  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }

  ngOnInit() {
  }
  create( note: Note ): void {
    this.noteService.addNote({ note } as unknown as Note)
    .subscribe(notes => {
      this.notes.push(notes);
    });
}
}
