import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MmmComponent } from './pages/mmm/mmm.component';
import { TodoService } from './services/todo.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    MmmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [ComponentsModule, TodoService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
