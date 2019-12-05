import { Injectable } from '@angular/core';
import { resource } from 'selenium-webdriver/http';
import { BeverageResourceService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class QueryServiceService {

  constructor(private beverage: BeverageResourceService) { }
  getBeverage(id){
   return this.beverage.getBeverageUsingGET(id);
  }
}
