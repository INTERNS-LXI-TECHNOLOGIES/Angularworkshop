import { Beverage } from './../../api/models/beverage';
import { Component, OnInit } from '@angular/core';
import { OrderResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.page.html',
  styleUrls: ['./revieworder.page.scss'],
})
export class RevieworderPage implements OnInit {

  beverages: Beverage[] = [];
  constructor(private ordersourse: OrderResourceService) { }

  ngOnInit() {
    this.ordersourse.getAllOrdersUsingGET().subscribe(bev => this.beverages = bev);
  }

}
