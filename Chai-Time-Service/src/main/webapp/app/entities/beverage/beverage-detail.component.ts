import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBeverage } from 'app/shared/model/beverage.model';

@Component({
    selector: 'jhi-beverage-detail',
    templateUrl: './beverage-detail.component.html'
})
export class BeverageDetailComponent implements OnInit {
    beverage: IBeverage;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ beverage }) => {
            this.beverage = beverage;
        });
    }

    previousState() {
        window.history.back();
    }
}
