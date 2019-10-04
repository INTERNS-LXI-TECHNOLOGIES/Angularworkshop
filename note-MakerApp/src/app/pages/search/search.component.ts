import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/services/note.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  notes$: Observable<Note[]>;
  private searchTerms = new Subject<string>();

  constructor(private noteService: NoteService) { }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log('searched');
  }

  ngOnInit(): void {
    this.notes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.noteService.searchNotes(term)),
    );
    }
}
