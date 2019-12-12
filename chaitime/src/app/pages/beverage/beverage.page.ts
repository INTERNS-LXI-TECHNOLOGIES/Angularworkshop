import { Beverage } from './../../api/models/beverage';
import { CreateBeverageComponent } from './../../components/create-beverage/create-beverage.component';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BeverageResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.page.html',
  styleUrls: ['./beverage.page.scss'],
})
export class BeveragePage implements OnInit {

  beverages: Beverage[] = [];
  constructor(public modalController: ModalController,
              private beverageResourceService: BeverageResourceService,
              private alert: AlertController
              ) { }

  ngOnInit() {
      this.beverageResourceService.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev);
  }

  async presentModal(beverage) {
    let update = false;
    const modal = await this.modalController.create({
      component: CreateBeverageComponent,
      componentProps : {
        beverage
      }
    });
    modal.onDidDismiss().then(res => {
      this.beverages.forEach(data => {
        if (data.id === beverage.id) {
          update = true;
          this.beverages[this.beverages.indexOf(data)] = res.data;
        }
     });
      if (!update && res.data) {
      this.beverages.push(res.data);
     }
    });
    return await modal.present();
  }

  delete(id: number) {
    this.beverageResourceService.deleteBeverageUsingDELETE(id).subscribe();
    this.beverages = this.beverages.filter(bev => id !== bev.id);
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
          text: 'Okay',
          handler: () => {
            this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }
}
