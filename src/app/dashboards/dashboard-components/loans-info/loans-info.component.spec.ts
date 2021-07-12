import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansInfoComponent } from './loans-info.component';

describe('LoansInfoComponent', () => {
  let component: LoansInfoComponent;
  let fixture: ComponentFixture<LoansInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
