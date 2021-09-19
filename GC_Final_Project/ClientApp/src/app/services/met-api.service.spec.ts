import { TestBed } from '@angular/core/testing';

import { MetAPIService } from './met-api.service';

describe('MetAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetAPIService = TestBed.get(MetAPIService);
    expect(service).toBeTruthy();
  });
});
