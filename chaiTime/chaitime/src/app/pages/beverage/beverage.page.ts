import { AddCategoryComponent } from './../../components/add-category/add-category.component';
import { Beverage } from './../../api/models/beverage';
import { Component, OnInit, Directive } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BeverageResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.page.html',
  styleUrls: ['./beverage.page.scss'],
})
export class BeveragePage implements OnInit {

  beverages: Beverage [] = [];

  editable =  true;

  constructor(public modalController: ModalController,
              private beverageService: BeverageResourceService) { }
              myStyles: Object = { showUsername: false };

  ngOnInit() {
    this.beverageService.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCategoryComponent
    });
    modal.onDidDismiss().then(data => this.beverages.push(data.data));
    return await modal.present();
  }
  delete(id) {
    this.beverageService.deleteBeverageUsingDELETE(id).subscribe();
    this.beverages = this.beverages.filter(bev => bev.id !== id);

  }
  update(bev) {
    this.beverageService.updateBeverageUsingPUT(bev).subscribe();


  }

  toggleEditable() {
    this.editable = !this.editable;
  }

}
