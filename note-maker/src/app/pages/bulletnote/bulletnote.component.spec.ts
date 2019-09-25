import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletnoteComponent } from './bulletnote.component';

describe('BulletnoteComponent', () => {
  let component: BulletnoteComponent;
  let fixture: ComponentFixture<BulletnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
