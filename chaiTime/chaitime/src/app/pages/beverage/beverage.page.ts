import { AddCategoryComponent } from './../../components/add-category/add-category.component';
import { Beverage } from './../../api/models/beverage';
import { Component, OnInit, Directive } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
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
              private beverageService: BeverageResourceService,
              private alert: AlertController) { }


  ngOnInit() {
    this.beverageService.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev);
  }

  async presentModal(beverage, updateTrue?) {
    let update = updateTrue ? true : false;
    const modal = await this.modalController.create({
      component: AddCategoryComponent,
      componentProps : {
        beverages: beverage,
        updateMode: update
      }
    });
    modal.onDidDismiss().then(res => {
      console.log('Result', res);

      if (res.data !== undefined) {
        this.beverages.forEach(data => {
          console.log(res + 'data');
          if (data.id === beverage.id) {
            update = true;
            this.beverages[this.beverages.indexOf(data)] = res.data;
          }
       });
        if (!update && res.data) {
        this.beverages.push(res.data);
       }

      }
    });
    return await modal.present();
  }
  delete(id) {
    this.beverageService.deleteBeverageUsingDELETE(id).subscribe();
    this.beverages = this.beverages.filter(bev => bev.id !== id);

  }
  async presentAlertConfirm(id) {
    const alert = await this.alert.create({
      header: 'Delete',
      message: 'Are you sure ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Yes',
          handler: () => {
            this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  toggleEditable() {
    this.editable = !this.editable;
  }

}
