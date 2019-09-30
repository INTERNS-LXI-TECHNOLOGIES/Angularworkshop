import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ReplaceSource } from 'webpack-sources';
import { Z_FULL_FLUSH } from 'zlib';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = {};
  constructor(private productService: ProductService, private location: Location) { }
  ngOnInit() {
  }
  create() {
  this.productService.createProduct(this.product).subscribe(_ => this.location.back());
  }
}
