import { TestBed } from '@angular/core/testing';

import { ApiUtilisateurService } from './api.utilisateur.service';

describe('ApiUtilisateurService', () => {
  let service: ApiUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
