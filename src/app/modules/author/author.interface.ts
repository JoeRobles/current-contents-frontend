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
