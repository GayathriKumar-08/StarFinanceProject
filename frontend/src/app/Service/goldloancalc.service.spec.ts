import { TestBed } from '@angular/core/testing';

import { GoldloancalcService } from './goldloancalc.service';

describe('GoldloancalcService', () => {
  let service: GoldloancalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldloancalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
