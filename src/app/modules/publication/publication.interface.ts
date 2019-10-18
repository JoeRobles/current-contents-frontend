export interface PublicationItem {
  authorId: string;
  body: string;
  createdAt: string;
  publicationDate: string;
  publicationId: string;
  title: string;
  updatedAt?: string;
}

export interface AllPublicationsResponse {
  Items: PublicationItem[];
  Count: number;
  ScannedCount: number;
}

export interface PublicationResponse {
  Item: PublicationItem;
}

export interface DeletePublicationResponse {
  message: string;
}

export interface CreatePublicationRequest {
  authorId: string;
  body: string;
  publicationDate: string;
  title: string;
  updatedAt?: string;
}

export interface CreatePublicationResponse {
  message: string;
}

export interface EditPublicationRequest {
  Item: CreatePublicationRequest;
}
