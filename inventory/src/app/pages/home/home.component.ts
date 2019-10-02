import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: Product[] = [];
constructor(private product: ProductService) { }
  ngOnInit() {
    this.product.getProducts().subscribe((products: Product[]) => this.products = products);
   }
   delete(id) {
   this.product.deleteProduct(id).subscribe();

   this.products = this.products.filter(data => data.id !== id );

   console.log('id', id);
  }
 update() {
   this.product.updateProduct(this.product).subscribe();
   console.log('FHHGHGGHGHGHGHH');
 }


}
