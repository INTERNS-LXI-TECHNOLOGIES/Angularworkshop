import { NoteService } from 'src/app/services/note.service';
import { Component, OnInit } from '@angular/core';
import { DiscNote } from 'src/app/discnote';



@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css']
})
export class DiscriptionComponent implements OnInit {

  discnotes: DiscNote[];
  constructor(private noteService: NoteService) { }

  getDiscNotes(): void {
    this.noteService.getDiscNotes()
        .subscribe(discnotes => this.discnotes = discnotes);
  }

  ngOnInit() {
    this.getDiscNotes();
  }
delete(disc: DiscNote): void {
  this.discnotes = this.discnotes.filter(h => h !== disc);
    this.noteService.deleteDiscNote(disc).subscribe();
    console.log('deleted', this.discnotes);

}

}
