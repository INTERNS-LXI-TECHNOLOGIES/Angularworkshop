import { AppRoutingModule } from './../../app-routing.module';
import { EditComponent } from './../edit/edit.component';
import { InMemoryDataService } from './../../in-memory-data.service';

import { ViewComponent } from 'src/app/components/view/view.component';
import { CreateComponent } from './../create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [CreateComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false })

  ]
})
export class ComponentModule { }
