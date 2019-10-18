import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { PublicationApiService } from './publication-api.service';
import { CreatePublicationRequest } from './publication.interface';
import { PublicationFormService } from './publication-form.service';

describe('PublicationApiService', () => {
  let service: PublicationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.get(PublicationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all publications', inject([HttpClient], http => {
    spyOn(http, 'get');
    const endpoint = (service as any).url + '/';
    service.getAllPublications();
    expect(http.get).toHaveBeenCalledWith(endpoint);
  }));

  it('should get an publication by id', inject([HttpClient], http => {
    spyOn(http, 'get');
    const id = '123456';
    const endpoint = (service as any).url + '/' + id;
    service.getPublicationById(id);
    expect(http.get).toHaveBeenCalledWith(endpoint);
  }));

  it('should post an publication by id', inject([HttpClient, PublicationFormService], (http, publicationFormService) => {
    spyOn(http, 'post');
    const publication = {
      authorId: '123456',
      body: 'john.doe@mail.com',
      createdAt: new Date(),
      publicationDate: '01/01/1970',
      title: 'John Doe',
    };
    const payload: CreatePublicationRequest = {
      authorId: publication.authorId,
      body: publication.body,
      publicationDate: publication.publicationDate,
      title: publication.title,
    };
    const endpoint = (service as any).url;
    publicationFormService.setPublication(publication);
    expect(http.post).toHaveBeenCalledWith(endpoint, payload);
  }));
});
