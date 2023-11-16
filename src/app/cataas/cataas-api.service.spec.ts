import { TestBed } from '@angular/core/testing';

import { CataasApiService } from './cataas-api.service';

describe('CataasApiService', () => {
  let service: CataasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CataasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
