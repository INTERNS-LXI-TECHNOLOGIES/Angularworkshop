import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  hero:string[] = ['jishnu','jose','sarath']
  constructor() { }

  ngOnInit(): void {
  }

}
