import { TestBed } from '@angular/core/testing';

import { GoldloanapiService } from './goldloanapi.service';

describe('GoldloanapiService', () => {
  let service: GoldloanapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldloanapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
