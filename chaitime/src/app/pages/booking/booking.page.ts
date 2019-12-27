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
  count: number;
  beverages: Beverage[] = [];
  constructor(public modalController: ModalController,
              private beverageResourceService: BeverageResourceService,
              private alert: AlertController
              ) { const oderingpipe = new OderingPipe(); }
  ngOnInit() {
    this.beverageResourceService.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev);
  }
}
