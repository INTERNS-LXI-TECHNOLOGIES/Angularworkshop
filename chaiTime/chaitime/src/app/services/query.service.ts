import { BeverageResourceService, CustomerResourceService, OrderResourceService } from 'src/app/api/services';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private beverageResService: BeverageResourceService,
              private customerResService: CustomerResourceService,
              private orderResService: OrderResourceService ) { }

  getBeverage(id) {
    return this.beverageResService.getBeverageUsingGET(id);
  }
  getCustomer() {
    return this.customerResService.getAllCustomersUsingGET();
  }
  getOrder() {
    return this.orderResService.getAllOrdersUsingGET();
  }
}
