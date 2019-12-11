import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeverageproductPage } from './beverageproduct.page';

const routes: Routes = [
  {
    path: '',
    component: BeverageproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeverageproductPageRoutingModule {}
