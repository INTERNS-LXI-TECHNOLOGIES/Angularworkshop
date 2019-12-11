import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeverageproductPage } from './beverageproduct.page';

describe('BeverageproductPage', () => {
  let component: BeverageproductPage;
  let fixture: ComponentFixture<BeverageproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeverageproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeverageproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
