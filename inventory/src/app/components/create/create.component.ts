import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ReplaceSource } from 'webpack-sources';
import { Z_FULL_FLUSH } from 'zlib';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = {};
  constructor(private productService: ProductService, private location: Location, private route: ActivatedRoute) { }
  ngOnInit() {
    this.product = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      name:  this.route.snapshot.paramMap.get('name'),
      price: this.route.snapshot.paramMap.get('price'),
      quantity: this.route.snapshot.paramMap.get('quantity')
       };
console.log('product=',this.product);
  }
  create() {
  this.productService.createProduct(this.product).subscribe(_ => this.location.back());
  }
  update() {

    this.productService.updateProduct(this.product).subscribe(_ => this.location.back());
  }
}
