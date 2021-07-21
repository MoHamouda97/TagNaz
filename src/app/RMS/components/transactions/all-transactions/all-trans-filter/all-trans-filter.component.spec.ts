import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransFilterComponent } from './all-trans-filter.component';

describe('AllTransFilterComponent', () => {
  let component: AllTransFilterComponent;
  let fixture: ComponentFixture<AllTransFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTransFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
