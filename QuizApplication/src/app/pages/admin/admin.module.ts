import { EditComponent } from './../../components/edit/edit.component';
import { InMemoryDataService } from './../../in-memory-data.service';
import { CreateComponent } from './../../components/create/create.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from 'src/app/components/view/view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [AdminComponent,
  CreateComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false })

  ]
})
export class AdminModule { }
