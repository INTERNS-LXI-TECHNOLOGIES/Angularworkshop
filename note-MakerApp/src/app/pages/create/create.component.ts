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
  note: Note = {
    discription:[]
  };
  discription = '';


  @Output() valueChange = new EventEmitter();


  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
      }

      ngOnInit() {
        this.note = {
          id: 0,
          date: '',
          discription: [],
          title: ''
        };
        this.getNotes();
      }

      create(): void {
        this.note.discription.push(this.discription);
        this.noteService.addNote(this.note)
        .subscribe(notes => {
          console.log(this.note.discription);
          this.notes.push(this.note);
          console.log(this.notes);
          this.valueChange.emit();
    });

    console.log('added', this.notes);
  }


}
