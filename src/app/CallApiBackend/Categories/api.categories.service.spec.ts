import { TestBed } from '@angular/core/testing';

import { ApiCategoriesService } from './api.categories.service';

describe('ApiEntrepriseService', () => {
  let service: ApiCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
