import { Observable, of } from 'rxjs';

import { AllPublicationsResponse, PublicationResponse, DeletePublicationResponse } from './publication.interface';
import { PublicationStub } from './publication.stub';

export const PublicationApiServiceStub = {
  getAllPublications: (): Observable<AllPublicationsResponse> => of(PublicationStub.allPublicationsResponse),
  getPublicationById: (id): Observable<PublicationResponse> => of(PublicationStub.singlePublicationResponse),
  deletePublicationById: (id): Observable<DeletePublicationResponse> => of(PublicationStub.deletePublicationResponse)
};
