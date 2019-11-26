import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Seller } from 'app/shared/model/seller.model';
import { SellerService } from './seller.service';
import { SellerComponent } from './seller.component';
import { SellerDetailComponent } from './seller-detail.component';
import { SellerUpdateComponent } from './seller-update.component';
import { SellerDeletePopupComponent } from './seller-delete-dialog.component';
import { ISeller } from 'app/shared/model/seller.model';

@Injectable({ providedIn: 'root' })
export class SellerResolve implements Resolve<ISeller> {
    constructor(private service: SellerService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeller> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Seller>) => response.ok),
                map((seller: HttpResponse<Seller>) => seller.body)
            );
        }
        return of(new Seller());
    }
}

export const sellerRoute: Routes = [
    {
        path: '',
        component: SellerComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sellers'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: SellerDetailComponent,
        resolve: {
            seller: SellerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sellers'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: SellerUpdateComponent,
        resolve: {
            seller: SellerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sellers'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: SellerUpdateComponent,
        resolve: {
            seller: SellerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sellers'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const sellerPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: SellerDeletePopupComponent,
        resolve: {
            seller: SellerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sellers'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
