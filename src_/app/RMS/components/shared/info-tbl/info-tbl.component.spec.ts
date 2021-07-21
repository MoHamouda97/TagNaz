import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTblComponent } from './info-tbl.component';

describe('InfoTblComponent', () => {
  let component: InfoTblComponent;
  let fixture: ComponentFixture<InfoTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
