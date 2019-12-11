import { BeverageResourceService, OrderResourceService } from 'src/app/api/services';
import { Beverage } from './../../api/models/beverage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverageproduct',
  templateUrl: './beverageproduct.page.html',
  styleUrls: ['./beverageproduct.page.scss'],
})
export class BeverageproductPage implements OnInit {

  beverages: Beverage[] = [];
  beverage: Beverage = {};
  constructor(private beverageresource: BeverageResourceService,
              private orderservice: OrderResourceService) { }

  ngOnInit() {
    this.beverageresource.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev );
  }
  order(beverage) {
    this.orderservice.createOrderUsingPOST(beverage).subscribe();
  }

}
