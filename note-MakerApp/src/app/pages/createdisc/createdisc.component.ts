import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DiscNote } from 'src/app/discnote';

@Component({
  selector: 'app-createdisc',
  templateUrl: './createdisc.component.html',
  styleUrls: ['./createdisc.component.css']
})
export class CreatediscComponent implements OnInit {
  notediscs: DiscNote[];
  notedisc: DiscNote = {};

  @Output() Change = new EventEmitter();

  constructor(private noteService: NoteService) { }

  getDiscNotes(): void {
    this.noteService.getDiscNotes()
        .subscribe(notediscs => this.notediscs = notediscs);
      }

      ngOnInit() {
        this.getDiscNotes();
      }

      add(notedisc: DiscNote): void {
        this.noteService.addDiscNote(this.notedisc)
        .subscribe(notediscs => {
          this.notediscs.push(notediscs);
          this.Change.emit();
    });

    console.log('added', this.notedisc);
      }



}
