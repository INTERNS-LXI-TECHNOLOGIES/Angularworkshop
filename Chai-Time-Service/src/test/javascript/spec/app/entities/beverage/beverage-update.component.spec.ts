/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ChaiTimeTestModule } from '../../../test.module';
import { BeverageUpdateComponent } from 'app/entities/beverage/beverage-update.component';
import { BeverageService } from 'app/entities/beverage/beverage.service';
import { Beverage } from 'app/shared/model/beverage.model';

describe('Component Tests', () => {
    describe('Beverage Management Update Component', () => {
        let comp: BeverageUpdateComponent;
        let fixture: ComponentFixture<BeverageUpdateComponent>;
        let service: BeverageService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ChaiTimeTestModule],
                declarations: [BeverageUpdateComponent]
            })
                .overrideTemplate(BeverageUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(BeverageUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BeverageService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Beverage(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.beverage = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Beverage();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.beverage = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
