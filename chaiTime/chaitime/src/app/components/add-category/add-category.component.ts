import { Beverage } from './../../api/models/beverage';
import { BeverageResourceService } from 'src/app/api/services';
import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {

  beverages: Beverage = {};
  constructor(private modal: ModalController,
              private bevargeResService: BeverageResourceService) { }

  ngOnInit() {
  }

  saveModal() {
    this.bevargeResService.createBeverageUsingPOST(this.beverages).subscribe();
    this.modal.dismiss(this.beverages);
  }
  dismiss() {
    this.modal.dismiss();
  }
}
