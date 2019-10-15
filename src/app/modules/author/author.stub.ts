import {
  AllAuthorsResponse,
  AuthorItem,
  AuthorResponse,
  DeleteAuthorResponse
} from './author.interface';

export const AuthorStub = {
  allAuthorsResponse: <AllAuthorsResponse> {
    Items: <AuthorItem[]> [
      {
        authorId: '1m8gc7k068va1t',
        createdAt: '2019-09-05T05:22:55.265Z',
        authorName: 'J. R. R. Tolkien',
        email: 'j.r.r.tolkien@msn.com',
        birthDate: '01/03/1892'
      },
      {
        authorId: '1m8gc7k068u30c',
        createdAt: '2019-09-05T05:21:59.484Z',
        authorName: 'E. V. Gordon',
        email: 'e.v.gordon@abc.net',
        birthDate: '02/14/1896',
        updatedAt: '2019-09-06T02:22:14.748Z'
      },
      {
        authorId: '1m8gc7k068upia',
        createdAt: '2019-09-05T05:22:28.642Z',
        authorName: 'Jules Verne',
        email: 'jules.verne@gmail.com',
        birthDate: '02/08/1828'
      }
    ],
    Count: 3,
    ScannedCount: 3
  },
  singleAuthorResponse: <AuthorResponse> {
    Item: <AuthorItem> {
      authorId: '1m8gc7k068va1t',
      createdAt: '2019-09-05T05:22:55.265Z',
      authorName: 'J. R. R. Tolkien',
      email: 'j.r.r.tolkien@msn.com',
      birthDate: '01/03/1892'
    }
  },
  deleteAuthorResponse: <DeleteAuthorResponse> {
    message: 'Author deleted successfully'
  }
};
