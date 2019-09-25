import { NoteService } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: Note[];
  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }


  ngOnInit() {
    this.getNotes();
  }

}
