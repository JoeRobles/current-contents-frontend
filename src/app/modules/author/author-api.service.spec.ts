import { inject, TestBed } from '@angular/core/testing';

import { AuthorApiService } from './author-api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorApiService', () => {
  let service: AuthorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.get(AuthorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all authors', inject([HttpClient], http => {
    spyOn(http, 'get');
    const endpoint = (service as any).url + '/';
    service.getAllAuthors();
    expect(http.get).toHaveBeenCalledWith(endpoint);
  }));
});
