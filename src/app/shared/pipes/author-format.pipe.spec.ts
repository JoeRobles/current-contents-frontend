import { AuthorListPipe } from './author-format.pipe';

describe('AuthorListPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorListPipe();
    expect(pipe).toBeTruthy();
  });
});
