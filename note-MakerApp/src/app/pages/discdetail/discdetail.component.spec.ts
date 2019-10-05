import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscdetailComponent } from './discdetail.component';

describe('DiscdetailComponent', () => {
  let component: DiscdetailComponent;
  let fixture: ComponentFixture<DiscdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
