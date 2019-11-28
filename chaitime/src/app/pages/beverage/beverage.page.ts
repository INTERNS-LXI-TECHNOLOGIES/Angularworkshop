import { Beverage } from './../../api/models/beverage';
import { CreateBeverageComponent } from './../../components/create-beverage/create-beverage.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BeverageResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.page.html',
  styleUrls: ['./beverage.page.scss'],
})
export class BeveragePage implements OnInit {

  beverages: Beverage[] = [];
  constructor(public modalController: ModalController, private beverageResourceService: BeverageResourceService) { }

  ngOnInit() {
      this.beverageResourceService.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateBeverageComponent
    });
    return await modal.present();
  }

  delete(id: number) {
    this.beverageResourceService.deleteBeverageUsingDELETE(id).subscribe();
  }

}
