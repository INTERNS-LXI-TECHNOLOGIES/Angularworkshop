import { OderingPipe } from 'src/app/pipes/odering.pipe';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor() {
  const oderingpipe = new OderingPipe();
  }
  ngOnInit() {
  }
}
