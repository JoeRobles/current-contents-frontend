import {
  AllPublicationsResponse,
  PublicationItem,
  PublicationResponse,
  DeletePublicationResponse
} from './publication.interface';

export const PublicationStub = {
  allPublicationsResponse: <AllPublicationsResponse> {
    Items: <PublicationItem[]> [
      {
        authorId: '1m8gc7k068va1t',
        body: 'J. R. R. Tolkien',
        createdAt: '2019-09-05T05:22:55.265Z',
        publicationDate: '01/03/1892',
        title: 'j.r.r.tolkien@msn.com',
      },
      {
        authorId: '1m8gc7k068va1t',
        body: 'J. R. R. Tolkien',
        createdAt: '2019-09-05T05:22:55.265Z',
        publicationDate: '01/03/1892',
        title: 'j.r.r.tolkien@msn.com',
      },
      {
        authorId: '1m8gc7k068va1t',
        body: 'J. R. R. Tolkien',
        createdAt: '2019-09-05T05:22:55.265Z',
        publicationDate: '01/03/1892',
        title: 'j.r.r.tolkien@msn.com',
      }
    ],
    Count: 3,
    ScannedCount: 3
  },
  singlePublicationResponse: <PublicationResponse> {
    Item: <PublicationItem> {
      authorId: '1m8gc7k068va1t',
      body: 'J. R. R. Tolkien',
      createdAt: '2019-09-05T05:22:55.265Z',
      publicationDate: '01/03/1892',
      title: 'j.r.r.tolkien@msn.com',
    }
  },
  deletePublicationResponse: <DeletePublicationResponse> {
    message: 'Publication deleted successfully'
  }
};
