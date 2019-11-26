import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISeller } from 'app/shared/model/seller.model';
import { SellerService } from './seller.service';

@Component({
    selector: 'jhi-seller-delete-dialog',
    templateUrl: './seller-delete-dialog.component.html'
})
export class SellerDeleteDialogComponent {
    seller: ISeller;

    constructor(protected sellerService: SellerService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.sellerService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'sellerListModification',
                content: 'Deleted an seller'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-seller-delete-popup',
    template: ''
})
export class SellerDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ seller }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(SellerDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.seller = seller;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/seller', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/seller', { outlets: { popup: null } }]);
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
