import { DiscNote } from 'src/app/discnote';
import { Component, OnInit ,Input} from '@angular/core';
import { NoteService } from './../../services/note.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-discdetail',
  templateUrl: './discdetail.component.html',
  styleUrls: ['./discdetail.component.css']
})
export class DiscdetailComponent implements OnInit {

  discription = '';

  @Input() discnote: DiscNote;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location) { }

  ngOnInit() {
    this.getDiscNote();
  }
  getDiscNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getDiscNote(id)
      .subscribe(discnote => this.discnote = discnote);
  }
  Back(): void {
    this.location.back();

  }
  saveChange(): void {
    this.noteService.updateNote(this.discnote)
    .subscribe(() => this.Back());
  }

}
