/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ChaiTimeTestModule } from '../../../test.module';
import { BeverageComponent } from 'app/entities/beverage/beverage.component';
import { BeverageService } from 'app/entities/beverage/beverage.service';
import { Beverage } from 'app/shared/model/beverage.model';

describe('Component Tests', () => {
    describe('Beverage Management Component', () => {
        let comp: BeverageComponent;
        let fixture: ComponentFixture<BeverageComponent>;
        let service: BeverageService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ChaiTimeTestModule],
                declarations: [BeverageComponent],
                providers: []
            })
                .overrideTemplate(BeverageComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(BeverageComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BeverageService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Beverage(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.beverages[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
