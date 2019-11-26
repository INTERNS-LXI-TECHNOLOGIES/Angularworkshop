import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ISeller } from 'app/shared/model/seller.model';
import { SellerService } from './seller.service';

@Component({
    selector: 'jhi-seller-update',
    templateUrl: './seller-update.component.html'
})
export class SellerUpdateComponent implements OnInit {
    seller: ISeller;
    isSaving: boolean;

    constructor(protected sellerService: SellerService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ seller }) => {
            this.seller = seller;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.seller.id !== undefined) {
            this.subscribeToSaveResponse(this.sellerService.update(this.seller));
        } else {
            this.subscribeToSaveResponse(this.sellerService.create(this.seller));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ISeller>>) {
        result.subscribe((res: HttpResponse<ISeller>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
