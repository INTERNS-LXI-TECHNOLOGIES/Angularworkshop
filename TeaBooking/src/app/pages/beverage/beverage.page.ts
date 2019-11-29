import { Beverage } from './../../api/models/beverage';
import { AddproductComponent } from './../../components/addproduct/addproduct.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BeverageResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.page.html',
  styleUrls: ['./beverage.page.scss'],
})
export class BeveragePage implements OnInit {

  beverages: Beverage [] = [];

  constructor(public modalController: ModalController,
              private beverageService: BeverageResourceService) { }

  ngOnInit() {
    this.beverageService.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddproductComponent
    });
    modal.onDidDismiss().then(data => this.beverages.push(data.data));
    return await modal.present();
  }
  delete(id) {
    this.beverageService.deleteBeverageUsingDELETE(id).subscribe();
    this.beverages = this.beverages.filter(bev => bev.id !== id);

  }



}
