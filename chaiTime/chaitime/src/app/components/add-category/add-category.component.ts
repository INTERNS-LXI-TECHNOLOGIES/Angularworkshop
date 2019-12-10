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

  updateMode = false;
  beverages: Beverage = {};
  constructor(private modal: ModalController,
              private bevargeResService: BeverageResourceService) { }

  ngOnInit() {
  }
  dismiss() {
    this.modal.dismiss();
  }

  dismissData(data) {
    this.modal.dismiss(data);
  }

  saveModal(updateStatus) {
    if (this.beverages.id ) {
      
      this.bevargeResService.updateBeverageUsingPUT(this.beverages).subscribe();
     } else {
       
       this.bevargeResService.createBeverageUsingPOST(this.beverages).subscribe();
     }
    this.dismissData(this.beverages);
   }

 }

