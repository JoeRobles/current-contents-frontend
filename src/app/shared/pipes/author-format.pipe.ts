import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorFormat'
})
export class AuthorFormatPipe implements PipeTransform {

  transform(authorId: string, authorItem): string {
    if (authorId && authorItem) {
      return `<${authorItem.authorName}, ${authorItem.email}>`;
    }
  }
}
