import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeverageproductPageRoutingModule } from './beverageproduct-routing.module';

import { BeverageproductPage } from './beverageproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeverageproductPageRoutingModule
  ],
  declarations: [BeverageproductPage]
})
export class BeverageproductPageModule {}
