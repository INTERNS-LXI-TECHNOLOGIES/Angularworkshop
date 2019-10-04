import { CreatediscComponent } from './pages/createdisc/createdisc.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscriptionComponent } from './pages/discription/discription.component';
import { BulletComponent } from './pages/bullet/bullet.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailComponent } from './pages/detail/detail.component';



const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'discription', component: DiscriptionComponent},
  {path: 'detail/:id', component: DetailComponent },
  {path: 'bullet', component: BulletComponent},
  {path: 'create', component: CreateComponent},
  {path: 'createdisc', component: CreatediscComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
