import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {
  notes: Note[];
  note: Note = {};

  @Output() valueChange = new EventEmitter();

  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
      }

      ngOnInit() {
        this.getNotes();
      }

      create( note: Note ): void {
        this.noteService.addNote(this.note)
        .subscribe(notes => {
          this.notes.push(notes);
          this.valueChange.emit();
    });

    console.log('added', this.note);
  }
}

