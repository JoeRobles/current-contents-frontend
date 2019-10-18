import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Publication } from './publication.enum';
import {
  AllPublicationsResponse,
  PublicationResponse,
  CreatePublicationRequest,
  CreatePublicationResponse,
  DeletePublicationResponse,
  EditPublicationRequest
} from './publication.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicationApiService {
  private apiUrl = environment.apiUrl;
  private url = this.apiUrl + Publication.Url;

  constructor(private http: HttpClient) { }

  public getAllPublications(): Observable<AllPublicationsResponse> {
    const endpoint = `${this.url}/`;

    return this.http.get<AllPublicationsResponse>(endpoint);
  }

  public getPublicationById(id: string): Observable<PublicationResponse> {
    const endpoint = `${this.url}/${id}`;

    return this.http.get<PublicationResponse>(endpoint);
  }

  public deletePublicationById(id: string): Observable<DeletePublicationResponse> {
    const endpoint = `${this.url}/${id}`;

    return this.http.delete<DeletePublicationResponse>(endpoint);
  }

  public newPublication(form: FormGroup): Observable<CreatePublicationResponse> {
    const payload: CreatePublicationRequest = {
      authorId: form.get('authorId').value,
      body: form.get('body').value,
      publicationDate: form.get('publicationDate').value,
      title: form.get('title').value,
    };
    const endpoint = `${this.url}/`;

    return this.http.post<CreatePublicationResponse>(endpoint, payload);
  }

  public editPublication(form: FormGroup): Observable<CreatePublicationResponse> {
    const payload: EditPublicationRequest = {
      Item: {
        authorId: form.get('authorId').value,
        body: form.get('body').value,
        publicationDate: form.get('publicationDate').value,
        title: form.get('title').value,
      }
    };
    const endpoint = `${this.url}/${form.get('publicationId').value}`;

    return this.http.put<CreatePublicationResponse>(endpoint, payload);
  }
}
