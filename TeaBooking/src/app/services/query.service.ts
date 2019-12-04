// import { CatagoryPage } from './../pages/catagory/catagory.page';
import { AddproductComponent } from './../components/addproduct/addproduct.component';
import { BeveragePage } from './../pages/beverage/beverage.page';
import { Beverage } from './../api/models/beverage';
// tslint:disable-next-line: max-line-length
import { BeverageResourceService, AccountResourceService, CustomerResourceService, OrderResourceService, SellerResourceService, UserJwtControllerService, UserResourceService } from 'src/app/api/services';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class QueryService {

  // beverages: Beverage = {};
  // bevarage: Beverage[] = [];

  constructor(private beverageservice: BeverageResourceService,
              private accountservice: AccountResourceService,
              private customerservice: CustomerResourceService,
              private orderservice: OrderResourceService,
              private sellerservice: SellerResourceService,
              private userjwtservice: UserJwtControllerService,
              private userservice: UserResourceService,
              public add: AddproductComponent,
              public bevege: BeveragePage) { }
              getBeverage() {
               return this.beverageservice.getAllBeveragesUsingGET();
              }
              getAccount() {
                return this.accountservice.getAccountUsingGET();
              }
              getCustomer() {
                return this.customerservice.getAllCustomersUsingGET();
              }
              getOrder() {
                return this.orderservice.getAllOrdersUsingGET();
              }
              getSeller() {
                return this.sellerservice.getAllSellersUsingGET();
              }
              // createBeverage() {
              //   this.beverageservice.createBeverageUsingPOST(this.add.beverage).subscribe();
              // }
              // deleteBeverage(bevege: { id: number; }) {
              //   this.beverageservice.deleteBeverageUsingDELETE(bevege.id).subscribe();
              //   this.bevege.beverages = this.bevege.beverages.filter(bev => bev.id !== bevege.id);
              // }
              // updateBeverage(bevege: { bev: Beverage; }) {
              //   this.beverageservice.updateBeverageUsingPUT(bevege.bev).subscribe();
              // }




}
