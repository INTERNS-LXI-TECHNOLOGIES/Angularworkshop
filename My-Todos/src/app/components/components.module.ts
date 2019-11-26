import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule, IconsModule, MdbIconComponent, ModalModule } from 'angular-bootstrap-md';
import { EventComponent } from './event/event.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    EventComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
