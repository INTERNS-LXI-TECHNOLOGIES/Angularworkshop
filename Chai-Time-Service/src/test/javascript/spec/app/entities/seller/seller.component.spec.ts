/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ChaiTimeTestModule } from '../../../test.module';
import { SellerComponent } from 'app/entities/seller/seller.component';
import { SellerService } from 'app/entities/seller/seller.service';
import { Seller } from 'app/shared/model/seller.model';

describe('Component Tests', () => {
    describe('Seller Management Component', () => {
        let comp: SellerComponent;
        let fixture: ComponentFixture<SellerComponent>;
        let service: SellerService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ChaiTimeTestModule],
                declarations: [SellerComponent],
                providers: []
            })
                .overrideTemplate(SellerComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SellerComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SellerService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Seller(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.sellers[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
