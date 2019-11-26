/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ChaiTimeTestModule } from '../../../test.module';
import { BeverageDetailComponent } from 'app/entities/beverage/beverage-detail.component';
import { Beverage } from 'app/shared/model/beverage.model';

describe('Component Tests', () => {
    describe('Beverage Management Detail Component', () => {
        let comp: BeverageDetailComponent;
        let fixture: ComponentFixture<BeverageDetailComponent>;
        const route = ({ data: of({ beverage: new Beverage(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ChaiTimeTestModule],
                declarations: [BeverageDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(BeverageDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(BeverageDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.beverage).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
