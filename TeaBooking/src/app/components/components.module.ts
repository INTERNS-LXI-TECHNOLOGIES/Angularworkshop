import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AddproductComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    AddproductComponent
  ]
})
export class ComponentsModule { }
