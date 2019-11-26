import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISeller } from 'app/shared/model/seller.model';
import { AccountService } from 'app/core';
import { SellerService } from './seller.service';

@Component({
    selector: 'jhi-seller',
    templateUrl: './seller.component.html'
})
export class SellerComponent implements OnInit, OnDestroy {
    sellers: ISeller[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected sellerService: SellerService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.sellerService
            .query()
            .pipe(
                filter((res: HttpResponse<ISeller[]>) => res.ok),
                map((res: HttpResponse<ISeller[]>) => res.body)
            )
            .subscribe(
                (res: ISeller[]) => {
                    this.sellers = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInSellers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ISeller) {
        return item.id;
    }

    registerChangeInSellers() {
        this.eventSubscriber = this.eventManager.subscribe('sellerListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
