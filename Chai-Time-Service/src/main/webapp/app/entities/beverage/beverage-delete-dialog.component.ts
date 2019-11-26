import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IBeverage } from 'app/shared/model/beverage.model';
import { BeverageService } from './beverage.service';

@Component({
    selector: 'jhi-beverage-delete-dialog',
    templateUrl: './beverage-delete-dialog.component.html'
})
export class BeverageDeleteDialogComponent {
    beverage: IBeverage;

    constructor(protected beverageService: BeverageService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.beverageService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'beverageListModification',
                content: 'Deleted an beverage'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-beverage-delete-popup',
    template: ''
})
export class BeverageDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ beverage }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(BeverageDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.beverage = beverage;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/beverage', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/beverage', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
