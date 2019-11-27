import { CreateBeverageComponent } from './../../components/create-beverage/create-beverage.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.page.html',
  styleUrls: ['./beverage.page.scss'],
})
export class BeveragePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateBeverageComponent
    });
    return await modal.present();
  }
}
