import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
constructor() { }

createDb() {
 let products = [
   {
      id: 33, name: 'pro1', price: 11, quantity: 3
  }
  ];
 return  { products };
}
}
