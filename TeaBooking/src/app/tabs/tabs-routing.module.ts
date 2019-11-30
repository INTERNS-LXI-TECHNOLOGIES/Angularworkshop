import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
          {
            path: 'home',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../home/home.module').then(m => m.HomePageModule)
              }
            ]
          },
          // {
          //   path: 'order',
          //   children: [
          //     {
          //       path: '',
          //       loadChildren: () =>
          //         import('../pages/catagory/catagory.module').then(m => m.CatagoryPageModule)

          //     }
          //   ]
          // },
          {
            path: '',
            redirectTo: 'tabs/home',
            pathMatch: 'full'
          },
          // {
          //   path: 'order',
          //   redirectTo: 'tabs/order',
          //   pathMatch: 'full'
          // }
        ]
        },
        {
          path: '',
          redirectTo: 'tabs/home',
          pathMatch: 'full'
        }
      ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
