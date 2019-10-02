import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatediscComponent } from './createdisc.component';

describe('CreatediscComponent', () => {
  let component: CreatediscComponent;
  let fixture: ComponentFixture<CreatediscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatediscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatediscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
