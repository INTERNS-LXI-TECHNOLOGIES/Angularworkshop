import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletnoteComponent } from './pages/bulletnote/bulletnote.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'bullet', component: BulletnoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
