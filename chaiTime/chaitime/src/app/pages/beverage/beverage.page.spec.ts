import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeveragePage } from './beverage.page';

describe('BeveragePage', () => {
  let component: BeveragePage;
  let fixture: ComponentFixture<BeveragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeveragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
