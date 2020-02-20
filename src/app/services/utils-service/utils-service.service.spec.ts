import { TestBed } from '@angular/core/testing';

import { UtilsServiceService } from './utils-service.service';

describe('UtilsServiceService', () => {
  let service: UtilsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
