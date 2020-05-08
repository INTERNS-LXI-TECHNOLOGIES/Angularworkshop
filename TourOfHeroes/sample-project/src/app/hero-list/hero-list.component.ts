import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  hero:string[] ;
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }
  getheros()
  {

  this.hero=this.heroService.getheros()
  }

}
