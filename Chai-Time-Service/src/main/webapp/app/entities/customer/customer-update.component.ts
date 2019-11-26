import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ICustomer } from 'app/shared/model/customer.model';
import { CustomerService } from './customer.service';
import { IOrder } from 'app/shared/model/order.model';
import { OrderService } from 'app/entities/order';

@Component({
    selector: 'jhi-customer-update',
    templateUrl: './customer-update.component.html'
})
export class CustomerUpdateComponent implements OnInit {
    customer: ICustomer;
    isSaving: boolean;

    orders: IOrder[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected customerService: CustomerService,
        protected orderService: OrderService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ customer }) => {
            this.customer = customer;
        });
        this.orderService
            .query({ filter: 'customer-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IOrder[]>) => mayBeOk.ok),
                map((response: HttpResponse<IOrder[]>) => response.body)
            )
            .subscribe(
                (res: IOrder[]) => {
                    if (!this.customer.order || !this.customer.order.id) {
                        this.orders = res;
                    } else {
                        this.orderService
                            .find(this.customer.order.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IOrder>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IOrder>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IOrder) => (this.orders = [subRes].concat(res)),
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
        if (this.customer.id !== undefined) {
            this.subscribeToSaveResponse(this.customerService.update(this.customer));
        } else {
            this.subscribeToSaveResponse(this.customerService.create(this.customer));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICustomer>>) {
        result.subscribe((res: HttpResponse<ICustomer>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
