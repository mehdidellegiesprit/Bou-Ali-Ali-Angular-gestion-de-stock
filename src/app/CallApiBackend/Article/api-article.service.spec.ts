import { TestBed } from '@angular/core/testing';

import { ApiArticleService } from './api-article.service';

describe('ApiArticleService', () => {
  let service: ApiArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
