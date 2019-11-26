import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChaiTimeSharedModule } from 'app/shared';
import {
    SellerComponent,
    SellerDetailComponent,
    SellerUpdateComponent,
    SellerDeletePopupComponent,
    SellerDeleteDialogComponent,
    sellerRoute,
    sellerPopupRoute
} from './';

const ENTITY_STATES = [...sellerRoute, ...sellerPopupRoute];

@NgModule({
    imports: [ChaiTimeSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [SellerComponent, SellerDetailComponent, SellerUpdateComponent, SellerDeleteDialogComponent, SellerDeletePopupComponent],
    entryComponents: [SellerComponent, SellerUpdateComponent, SellerDeleteDialogComponent, SellerDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChaiTimeSellerModule {}
