import { Order } from './../../api/models/order';
import { Beverage } from './../../api/models/beverage';
import { OderingPipe } from 'src/app/pipes/odering.pipe';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { BeverageResourceService } from 'src/app/api/services';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  count = 0;
  add: number[] = [];
  order: Order;
  beverages: Beverage[] = [];
  constructor(public modalController: ModalController,
              private beverageResourceService: BeverageResourceService,
              private alert: AlertController
              ) { const oderingpipe = new OderingPipe(); }
  ngOnInit() {
    this.beverageResourceService.getAllBeveragesUsingGET().subscribe(bev => {
      this.beverages = bev;
      bev.forEach(bev => {
        this.add.push(0);
      } );
    });
  }
  createOder(beverage) {
    const index = this.beverages.indexOf(beverage);
    console.log(index);
    this.add[index] = this.add[index] + 1;
    this.count = this.count + 1;

  }
  subOder(beverage) {
    const index = this.beverages.indexOf(beverage);
    this.add[index] = this.add[index] - 1;
  }

  buy() {

  }
}
