import { Order } from './../../api/models/order';
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
  quantity = [];
  orders: Order = {};
  currentnumber: any;
  constructor(private beverageresource: BeverageResourceService,
              private orderservice: OrderResourceService) {
                this.currentnumber = 0;
              }

  ngOnInit() {
    this.beverageresource.getAllBeveragesUsingGET().subscribe(bev => this.beverages = bev );
  }
  orderb(beverages) {
    this.beverageresource.createBeverageUsingPOST(beverages).subscribe();
  }
  order(orders) {
    this.orderservice.createOrderUsingPOST(orders).subscribe();
  }
  increment(product) {
    this.orders.beverages.push(product);
  }
  decrement(i) {
    
  }

}
