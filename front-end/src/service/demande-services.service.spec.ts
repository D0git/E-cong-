import { TestBed } from '@angular/core/testing';

import { DemandeServicesService } from './demande-services.service';

describe('DemandeServicesService', () => {
  let service: DemandeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
