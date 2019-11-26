import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'beverage',
                loadChildren: './beverage/beverage.module#ChaiTimeBeverageModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#ChaiTimeCustomerModule'
            },
            {
                path: 'seller',
                loadChildren: './seller/seller.module#ChaiTimeSellerModule'
            },
            {
                path: 'order',
                loadChildren: './order/order.module#ChaiTimeOrderModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#ChaiTimeCustomerModule'
            },
            {
                path: 'order',
                loadChildren: './order/order.module#ChaiTimeOrderModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChaiTimeEntityModule {}
