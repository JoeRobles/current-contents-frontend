export interface AuthorItem {
  authorId: string;
  authorName: string;
  birthDate: string;
  createdAt: string;
  email: string;
  updatedAt?: string;
}

export interface AllAuthorsResponse {
  Items: AuthorItem[];
  Count: number;
  ScannedCount: number;
}

export interface AuthorResponse {
  Item: AuthorItem;
}

export interface DeleteAuthorResponse {
  message: string;
}

export interface CreateAuthorRequest {
  authorName: string;
  email: string;
  birthDate: string;
  updatedAt?: string;
}

export interface CreateAuthorResponse {
  message: string;
}

export interface EditAuthorRequest {
  Item: CreateAuthorRequest;
}
