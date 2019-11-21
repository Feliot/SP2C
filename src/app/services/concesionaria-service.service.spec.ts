import { TestBed } from '@angular/core/testing';

import { ConcesionariaServiceService } from './concesionaria-service.service';

describe('ConcesionariaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcesionariaServiceService = TestBed.get(ConcesionariaServiceService);
    expect(service).toBeTruthy();
  });
});
