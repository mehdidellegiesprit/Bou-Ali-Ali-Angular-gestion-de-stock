import { TestBed } from '@angular/core/testing';

import { ApiEntrepriseService } from './api.entreprise.service';

describe('EntrepriseService', () => {
  let service: ApiEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
