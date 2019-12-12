import { Beverage } from './../api/models/beverage';
import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController, IonSegmentButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navcntoller: NavController) {}
  beverages: Beverage [] = [];

  @ViewChild('slides', { static: true}) slider: IonSlides;
  segment = 0;

  async segmentChanged(event: any) {
   // console.log(event.detail.value, '00');
    this.segment = event;

    this.navcntoller.navigateForward(event.detail.value);
  }
  async slideChanged(event) {
    await this.slider.slideTo(this.segment);
  }
}
