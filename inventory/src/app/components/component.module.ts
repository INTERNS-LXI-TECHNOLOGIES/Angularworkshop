import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentModule { }
