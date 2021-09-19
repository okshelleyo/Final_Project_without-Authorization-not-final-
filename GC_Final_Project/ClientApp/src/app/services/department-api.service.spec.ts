import { TestBed } from '@angular/core/testing';

import { DepartmentAPIService } from './department-api.service';

describe('DepartmentAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentAPIService = TestBed.get(DepartmentAPIService);
    expect(service).toBeTruthy();
  });
});
