import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    CreateContactComponent
  ]
})
export class ComponentsModule { }
