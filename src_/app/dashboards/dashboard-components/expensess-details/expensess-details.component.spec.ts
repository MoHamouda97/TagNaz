import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensessDetailsComponent } from './expensess-details.component';

describe('ExpensessDetailsComponent', () => {
  let component: ExpensessDetailsComponent;
  let fixture: ComponentFixture<ExpensessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
