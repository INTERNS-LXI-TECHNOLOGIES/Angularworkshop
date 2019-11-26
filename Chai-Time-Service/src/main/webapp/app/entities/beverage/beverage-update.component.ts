import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IBeverage } from 'app/shared/model/beverage.model';
import { BeverageService } from './beverage.service';
import { IOrder } from 'app/shared/model/order.model';
import { OrderService } from 'app/entities/order';

@Component({
    selector: 'jhi-beverage-update',
    templateUrl: './beverage-update.component.html'
})
export class BeverageUpdateComponent implements OnInit {
    beverage: IBeverage;
    isSaving: boolean;

    orders: IOrder[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected beverageService: BeverageService,
        protected orderService: OrderService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ beverage }) => {
            this.beverage = beverage;
        });
        this.orderService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IOrder[]>) => mayBeOk.ok),
                map((response: HttpResponse<IOrder[]>) => response.body)
            )
            .subscribe((res: IOrder[]) => (this.orders = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.beverage.id !== undefined) {
            this.subscribeToSaveResponse(this.beverageService.update(this.beverage));
        } else {
            this.subscribeToSaveResponse(this.beverageService.create(this.beverage));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IBeverage>>) {
        result.subscribe((res: HttpResponse<IBeverage>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackOrderById(index: number, item: IOrder) {
        return item.id;
    }
}
