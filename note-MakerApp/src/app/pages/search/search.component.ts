import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();

  constructor() { }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log('searched');
  }

  ngOnInit() {
  }

}
