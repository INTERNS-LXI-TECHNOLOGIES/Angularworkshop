import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ComponentModule } from './components/component.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create', component: CreateComponent
  },
  {
     path: 'home', component: HomeComponent
  },
  {
    path: '' , redirectTo: 'home' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
