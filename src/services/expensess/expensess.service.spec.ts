import { TestBed } from '@angular/core/testing';

import { ExpensessService } from './expensess.service';

describe('ExpensessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensessService = TestBed.get(ExpensessService);
    expect(service).toBeTruthy();
  });
});
