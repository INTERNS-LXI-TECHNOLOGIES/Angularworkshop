import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddCategoryComponent } from './add-category/add-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    AddCategoryComponent
  ]
})
export class ComponentsModule { }
