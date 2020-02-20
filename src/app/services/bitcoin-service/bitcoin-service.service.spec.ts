import { TestBed } from '@angular/core/testing';

import { BitcoinServiceService } from './bitcoin-service.service';

describe('BitcoinServiceService', () => {
  let service: BitcoinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
