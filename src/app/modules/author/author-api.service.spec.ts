import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { AuthorApiService } from './author-api.service';
import { CreateAuthorRequest } from './author.interface';
import { AuthorFormService } from './author-form.service';

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

  it('should get an author by id', inject([HttpClient], http => {
    spyOn(http, 'get');
    const id = '123456';
    const endpoint = (service as any).url + '/' + id;
    service.getAuthorById(id);
    expect(http.get).toHaveBeenCalledWith(endpoint);
  }));

  it('should post an author by id', inject([HttpClient, AuthorFormService], (http, authorFormService) => {
    spyOn(http, 'post');
    const author = {
      authorId: '123456',
      authorName: 'John Doe',
      birthDate: '01/01/1970',
      createdAt: new Date(),
      email: 'john.doe@mail.com'
    };
    const payload: CreateAuthorRequest = {
      authorName: author.authorName,
      email: author.email,
      birthDate: author.birthDate
    };
    const endpoint = (service as any).url;
    authorFormService.setAuthor(author);
    expect(http.post).toHaveBeenCalledWith(endpoint, payload);
  }));
});
