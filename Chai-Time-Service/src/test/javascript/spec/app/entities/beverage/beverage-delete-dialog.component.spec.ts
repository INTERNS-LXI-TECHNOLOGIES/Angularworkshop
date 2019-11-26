/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ChaiTimeTestModule } from '../../../test.module';
import { BeverageDeleteDialogComponent } from 'app/entities/beverage/beverage-delete-dialog.component';
import { BeverageService } from 'app/entities/beverage/beverage.service';

describe('Component Tests', () => {
    describe('Beverage Management Delete Component', () => {
        let comp: BeverageDeleteDialogComponent;
        let fixture: ComponentFixture<BeverageDeleteDialogComponent>;
        let service: BeverageService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ChaiTimeTestModule],
                declarations: [BeverageDeleteDialogComponent]
            })
                .overrideTemplate(BeverageDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(BeverageDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BeverageService);
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
