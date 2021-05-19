import { TestBed } from '@angular/core/testing';

import { KycdocService } from './kycdoc.service';

describe('KycdocService', () => {
  let service: KycdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KycdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
