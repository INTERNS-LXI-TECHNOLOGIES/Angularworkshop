
import { Component, OnInit } from '@angular/core';
import { MypipePipe } from 'src/app/pipes/mypipe.pipe';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {

  birthday = new Date();
  toggle = true;
  constructor() {
    const Mypipepipe = new MypipePipe();
    // tslint:disable-next-line: no-shadowed-variable
  }

  ngOnInit() {
  }
  get format() { return this.toggle ? 'shortDate' : 'fullDate';}
  toggleFormat() {
    this.toggle = !this.toggle;

  }

}
