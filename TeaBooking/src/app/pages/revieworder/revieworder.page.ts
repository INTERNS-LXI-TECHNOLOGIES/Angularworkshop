import { Order } from './../../api/models/order';
import { Beverage } from './../../api/models/beverage';
import { Component, OnInit } from '@angular/core';
import { OrderResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.page.html',
  styleUrls: ['./revieworder.page.scss'],
})
export class RevieworderPage implements OnInit {

  orders: Order[] = [];

  constructor(private ordersourse: OrderResourceService) { }

  ngOnInit() {
    this.ordersourse.getAllOrdersUsingGET().subscribe(ord => this.orders = ord);
  }
  delete(id){
    this.ordersourse.deleteOrderUsingDELETE(id).subscribe();
    this.orders = this.orders.filter(ord => ord.id !== id);

  }

}
