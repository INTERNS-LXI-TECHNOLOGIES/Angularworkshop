import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletnoteComponent } from './pages/bulletnote/bulletnote.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'bullet', component: BulletnoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
