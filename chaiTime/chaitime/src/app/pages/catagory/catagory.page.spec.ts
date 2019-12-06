import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatagoryPage } from './catagory.page';

describe('CatagoryPage', () => {
  let component: CatagoryPage;
  let fixture: ComponentFixture<CatagoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatagoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
