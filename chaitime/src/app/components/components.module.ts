import { CreateBeverageComponent } from './create-beverage/create-beverage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CreateBeverageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateBeverageComponent
  ]
})
export class ComponentsModule { }
