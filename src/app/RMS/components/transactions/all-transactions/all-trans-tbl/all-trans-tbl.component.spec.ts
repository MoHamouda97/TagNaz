import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransTblComponent } from './all-trans-tbl.component';

describe('AllTransTblComponent', () => {
  let component: AllTransTblComponent;
  let fixture: ComponentFixture<AllTransTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTransTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
