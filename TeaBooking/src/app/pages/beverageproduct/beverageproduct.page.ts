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

  constructor(private beverageresource: BeverageResourceService,
              private orderservice: OrderResourceService) {
                this.currentnumber = 0;
              }

  beverages: Beverage[] = [];
  quantity = [];
  orders: Order = {};
  currentnumber: any;
  i : any;

  ngOnInit() {
    this.beverageresource.getAllBeveragesUsingGET().subscribe(bev => {
      this.beverages = bev ;
      bev.forEach(_ => this.quantity.push(0));
    });
  }
  buy(beverages) {
    
    this.beverageresource.createBeverageUsingPOST(beverages).subscribe();
  }
  review(orders) {
    this.orderservice.createOrderUsingPOST(orders).subscribe();
  }
  increment(product) {

    const index = this.beverages.indexOf(product);
    console.log(this.quantity);
    this.quantity[index] = this.quantity[index] + 1;
    // this.orders.beverages.push(product);
  }
  decrement(product) {

}
}
