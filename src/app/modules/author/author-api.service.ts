import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Author } from './author.enum';
import {
  AllAuthorsResponse,
  AuthorResponse,
  CreateAuthorRequest,
  CreateAuthorResponse,
  DeleteAuthorResponse, EditAuthorRequest
} from './author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorApiService {
  private apiUrl = environment.apiUrl;
  private url = this.apiUrl + Author.Url;

  constructor(private http: HttpClient) { }

  public getAllAuthors(): Observable<AllAuthorsResponse> {
    const endpoint = `${this.url}/`;

    return this.http.get<AllAuthorsResponse>(endpoint);
  }

  public getAuthorById(id: string): Observable<AuthorResponse> {
    const endpoint = `${this.url}/${id}`;

    return this.http.get<AuthorResponse>(endpoint);
  }

  public deleteAuthorById(id: string): Observable<DeleteAuthorResponse> {
    const endpoint = `${this.url}/${id}`;

    return this.http.delete<DeleteAuthorResponse>(endpoint);
  }

  public newAuthor(form: FormGroup): Observable<CreateAuthorResponse> {
    const payload: CreateAuthorRequest = {
      authorName: form.get('authorName').value,
      email: form.get('email').value,
      birthDate: form.get('birthDate').value
    };
    const endpoint = `${this.url}/`;

    return this.http.post<CreateAuthorResponse>(endpoint, payload);
  }

  public editAuthor(form: FormGroup): Observable<CreateAuthorResponse> {
    const payload: EditAuthorRequest = {
      Item: {
        authorName: form.get('authorName').value,
        email: form.get('email').value,
        birthDate: form.get('birthDate').value
      }
    };
    const endpoint = `${this.url}/${form.get('authorId').value}`;

    return this.http.put<CreateAuthorResponse>(endpoint, payload);
  }
}
