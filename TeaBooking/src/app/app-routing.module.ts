import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },

  {
    path: 'catagory',
    loadChildren: () => import('./pages/catagory/catagory.module').then( m => m.CatagoryPageModule)
  },
  {
    path: 'beverage',
    loadChildren: () => import('./pages/beverage/beverage.module').then( m => m.BeveragePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'beverageproduct',
    loadChildren: () => import('./pages/beverageproduct/beverageproduct.module').then( m => m.BeverageproductPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'revieworder',
    loadChildren: () => import('./pages/revieworder/revieworder.module').then( m => m.RevieworderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
