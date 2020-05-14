import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path :'',component: HeroListComponent },
  { path: 'hero-list', component: HeroListComponent },
  {path:'hero-detail',component:HeroDetailComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
    ],exports: [ RouterModule ]

})
export class AppRoutingModule { }
