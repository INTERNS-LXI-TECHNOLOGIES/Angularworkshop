import { Beverage } from './../../api/models/beverage';
import { Component, OnInit } from '@angular/core';
import { BeverageResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  beverage: Beverage = {};
  constructor(private beverageService: BeverageResourceService ,
              public modalController: ModalController) { }

  ngOnInit() {}

  save() {
    this.beverageService.createBeverageUsingPOST(this.beverage).subscribe();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
