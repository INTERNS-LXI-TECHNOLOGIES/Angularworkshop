import { NoteService } from './../../services/note.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() note: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getNote();
  }
  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => this.note = note);
  }
  goBack(): void {
    this.location.back();

  }

}
