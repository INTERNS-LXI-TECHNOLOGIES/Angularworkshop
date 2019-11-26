import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IBeverage } from 'app/shared/model/beverage.model';
import { AccountService } from 'app/core';
import { BeverageService } from './beverage.service';

@Component({
    selector: 'jhi-beverage',
    templateUrl: './beverage.component.html'
})
export class BeverageComponent implements OnInit, OnDestroy {
    beverages: IBeverage[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected beverageService: BeverageService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.beverageService
            .query()
            .pipe(
                filter((res: HttpResponse<IBeverage[]>) => res.ok),
                map((res: HttpResponse<IBeverage[]>) => res.body)
            )
            .subscribe(
                (res: IBeverage[]) => {
                    this.beverages = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInBeverages();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IBeverage) {
        return item.id;
    }

    registerChangeInBeverages() {
        this.eventSubscriber = this.eventManager.subscribe('beverageListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
