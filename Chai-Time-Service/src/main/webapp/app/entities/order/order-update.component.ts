import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IOrder } from 'app/shared/model/order.model';
import { OrderService } from './order.service';
import { ISeller } from 'app/shared/model/seller.model';
import { SellerService } from 'app/entities/seller';

@Component({
    selector: 'jhi-order-update',
    templateUrl: './order-update.component.html'
})
export class OrderUpdateComponent implements OnInit {
    order: IOrder;
    isSaving: boolean;

    sellers: ISeller[];
    date: string;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected orderService: OrderService,
        protected sellerService: SellerService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ order }) => {
            this.order = order;
            this.date = this.order.date != null ? this.order.date.format(DATE_TIME_FORMAT) : null;
        });
        this.sellerService
            .query({ filter: 'order-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ISeller[]>) => mayBeOk.ok),
                map((response: HttpResponse<ISeller[]>) => response.body)
            )
            .subscribe(
                (res: ISeller[]) => {
                    if (!this.order.seller || !this.order.seller.id) {
                        this.sellers = res;
                    } else {
                        this.sellerService
                            .find(this.order.seller.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<ISeller>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<ISeller>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: ISeller) => (this.sellers = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.order.date = this.date != null ? moment(this.date, DATE_TIME_FORMAT) : null;
        if (this.order.id !== undefined) {
            this.subscribeToSaveResponse(this.orderService.update(this.order));
        } else {
            this.subscribeToSaveResponse(this.orderService.create(this.order));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrder>>) {
        result.subscribe((res: HttpResponse<IOrder>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackSellerById(index: number, item: ISeller) {
        return item.id;
    }
}
