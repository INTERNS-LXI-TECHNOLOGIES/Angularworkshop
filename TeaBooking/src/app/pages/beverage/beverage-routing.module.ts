import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeveragePage } from './beverage.page';

const routes: Routes = [
  {
    path: '',
    component: BeveragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeveragePageRoutingModule {}
