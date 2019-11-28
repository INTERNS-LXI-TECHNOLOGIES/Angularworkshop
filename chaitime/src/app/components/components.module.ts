import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CreateBeverageComponent } from './create-beverage/create-beverage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CreateBeverageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule

  ],
  exports: [
    CreateBeverageComponent
  ]
})
export class ComponentsModule { }
