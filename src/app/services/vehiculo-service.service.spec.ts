import { TestBed } from '@angular/core/testing';

import { VehiculoServiceService } from './vehiculo-service.service';

describe('VehiculoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiculoServiceService = TestBed.get(VehiculoServiceService);
    expect(service).toBeTruthy();
  });
});
