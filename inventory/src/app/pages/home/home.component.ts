import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: Product[] = [];
constructor(private product: ProductService, private router: Router) { }
  ngOnInit() {
    this.product.getProducts().subscribe((products: Product[]) => this.products = products);
   }
   delete(id) {
   this.product.deleteProduct(id).subscribe();
   this.products = this.products.filter(data => data.id !== id );
   console.log('id', id);
  }

 routeUpdate(product) {
   this.router.navigate(['/create', product]);
 }
}
