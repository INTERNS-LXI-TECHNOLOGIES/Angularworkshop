import { ComponentsModule } from './../../components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeveragePageRoutingModule } from './beverage-routing.module';

import { BeveragePage } from './beverage.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeveragePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BeveragePage],
})
export class BeveragePageModule {}
