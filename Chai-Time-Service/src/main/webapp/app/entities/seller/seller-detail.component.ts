import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISeller } from 'app/shared/model/seller.model';

@Component({
    selector: 'jhi-seller-detail',
    templateUrl: './seller-detail.component.html'
})
export class SellerDetailComponent implements OnInit {
    seller: ISeller;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ seller }) => {
            this.seller = seller;
        });
    }

    previousState() {
        window.history.back();
    }
}
