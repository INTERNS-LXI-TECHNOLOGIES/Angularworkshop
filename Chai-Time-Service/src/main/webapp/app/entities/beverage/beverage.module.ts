import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChaiTimeSharedModule } from 'app/shared';
import {
    BeverageComponent,
    BeverageDetailComponent,
    BeverageUpdateComponent,
    BeverageDeletePopupComponent,
    BeverageDeleteDialogComponent,
    beverageRoute,
    beveragePopupRoute
} from './';

const ENTITY_STATES = [...beverageRoute, ...beveragePopupRoute];

@NgModule({
    imports: [ChaiTimeSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BeverageComponent,
        BeverageDetailComponent,
        BeverageUpdateComponent,
        BeverageDeleteDialogComponent,
        BeverageDeletePopupComponent
    ],
    entryComponents: [BeverageComponent, BeverageUpdateComponent, BeverageDeleteDialogComponent, BeverageDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChaiTimeBeverageModule {}
