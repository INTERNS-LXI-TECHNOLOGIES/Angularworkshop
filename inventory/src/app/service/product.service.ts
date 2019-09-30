import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Product } from '../models/Product';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'api/products';
  constructor(private httpClient: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  public getProducts() {
    return this.httpClient.get(this.url);
  }
  public getProduct(productId) {
    return this.httpClient.get(`${this.url}/${productId}`);
  }
  public deleteProduct(productId) {
    return this.httpClient.delete(`${this.url}/${productId}`);
}
public updateProduct(product) {
  return this.httpClient.put(`${this.url}/${product.id}`, product);
}
public createProduct(product) {
  return this.httpClient.post(this.url, product, this.httpOptions);
}
}
