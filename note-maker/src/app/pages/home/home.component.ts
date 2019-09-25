import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'note-maker';
  titles = ['title 1', 'title 2', 'title 3', 'title 4'];
  mytitle = this.titles[0];

  constructor() { }

  ngOnInit() {
  }

}
