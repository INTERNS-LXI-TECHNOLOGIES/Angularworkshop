import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdiscComponent } from './searchdisc.component';

describe('SearchdiscComponent', () => {
  let component: SearchdiscComponent;
  let fixture: ComponentFixture<SearchdiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
