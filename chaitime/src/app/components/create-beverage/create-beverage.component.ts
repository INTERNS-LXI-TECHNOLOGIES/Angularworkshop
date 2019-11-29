import { Beverage } from './../../api/models/beverage';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BeverageResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-create-beverage',
  templateUrl: './create-beverage.component.html',
  styleUrls: ['./create-beverage.component.scss'],
})
export class CreateBeverageComponent implements OnInit {

  beverage: Beverage = {};
  constructor(
    private modal: ModalController,
    private beverageService: BeverageResourceService
    ) { }
  ngOnInit() {}


  closemodal() {
    this.modal.dismiss();
  }

  save() {
    this.beverageService.createBeverageUsingPOST(this.beverage).subscribe();
    this.modal.dismiss(this.beverage);
  }

}
