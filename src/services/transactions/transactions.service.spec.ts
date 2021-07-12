import { TestBed } from '@angular/core/testing';

import { TransactionssService } from './transactions.service';

describe('TransactionssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionssService = TestBed.get(TransactionssService);
    expect(service).toBeTruthy();
  });
});
