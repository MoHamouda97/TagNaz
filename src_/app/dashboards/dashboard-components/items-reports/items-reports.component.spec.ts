import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsReportsComponent } from './items-reports.component';

describe('ItemsReportsComponent', () => {
  let component: ItemsReportsComponent;
  let fixture: ComponentFixture<ItemsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
