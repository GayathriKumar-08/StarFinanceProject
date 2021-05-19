import { TestBed } from '@angular/core/testing';

import { PincodeApiService } from './pincode-api.service';

describe('PincodeApiService', () => {
  let service: PincodeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PincodeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
