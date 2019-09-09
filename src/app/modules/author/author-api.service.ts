import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Author } from './author.enum';
import { AllAuthorsResponse, AuthorResponse } from './author.interface';

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
}
