import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = {};
  constructor(private productService: ProductService ) { }
  ngOnInit() {
  }
  create() {
      this.productService.createProduct(this.product).subscribe();
  }
}
