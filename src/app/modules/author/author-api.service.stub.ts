import { Observable, of } from 'rxjs';

import { AllAuthorsResponse, AuthorResponse, DeleteAuthorResponse } from './author.interface';
import { AuthorStub } from './author.stub';

export const AuthorApiServiceStub = {
  getAllAuthors: (): Observable<AllAuthorsResponse> => of(AuthorStub.allAuthorsResponse),
  getAuthorById: (id): Observable<AuthorResponse> => of(AuthorStub.singleAuthorResponse),
  deleteAuthorById: (id): Observable<DeleteAuthorResponse> => of(AuthorStub.deleteAuthorResponse)
};
