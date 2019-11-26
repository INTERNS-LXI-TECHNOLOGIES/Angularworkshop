/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ChaiTimeTestModule } from '../../../test.module';
import { SellerDeleteDialogComponent } from 'app/entities/seller/seller-delete-dialog.component';
import { SellerService } from 'app/entities/seller/seller.service';

describe('Component Tests', () => {
    describe('Seller Management Delete Component', () => {
        let comp: SellerDeleteDialogComponent;
        let fixture: ComponentFixture<SellerDeleteDialogComponent>;
        let service: SellerService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ChaiTimeTestModule],
                declarations: [SellerDeleteDialogComponent]
            })
                .overrideTemplate(SellerDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SellerDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SellerService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
