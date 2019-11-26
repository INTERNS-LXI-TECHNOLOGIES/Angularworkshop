import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Beverage } from 'app/shared/model/beverage.model';
import { BeverageService } from './beverage.service';
import { BeverageComponent } from './beverage.component';
import { BeverageDetailComponent } from './beverage-detail.component';
import { BeverageUpdateComponent } from './beverage-update.component';
import { BeverageDeletePopupComponent } from './beverage-delete-dialog.component';
import { IBeverage } from 'app/shared/model/beverage.model';

@Injectable({ providedIn: 'root' })
export class BeverageResolve implements Resolve<IBeverage> {
    constructor(private service: BeverageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBeverage> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Beverage>) => response.ok),
                map((beverage: HttpResponse<Beverage>) => beverage.body)
            );
        }
        return of(new Beverage());
    }
}

export const beverageRoute: Routes = [
    {
        path: '',
        component: BeverageComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Beverages'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: BeverageDetailComponent,
        resolve: {
            beverage: BeverageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Beverages'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: BeverageUpdateComponent,
        resolve: {
            beverage: BeverageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Beverages'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: BeverageUpdateComponent,
        resolve: {
            beverage: BeverageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Beverages'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const beveragePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: BeverageDeletePopupComponent,
        resolve: {
            beverage: BeverageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Beverages'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
