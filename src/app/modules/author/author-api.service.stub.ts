import { Observable } from 'rxjs';

import { AllAuthorsResponse } from './author.interface';
import { AuthorStub } from './author.stub';

export const AuthorApiServiceStub = {
  getAllAuthors: (): Observable<AllAuthorsResponse> => Observable.create(AuthorStub.allAuthorsResponse)
};
