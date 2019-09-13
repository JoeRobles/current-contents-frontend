import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthorItem } from './author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorFormService {
  public form: FormGroup = new FormGroup({
    authorId: new FormControl(null),
    authorName: new FormControl(''),
    birthDate: new FormControl(''),
    createdAt: new FormControl(''),
    email: new FormControl(''),
    updatedAt: new FormControl(''),
  });

  constructor() {
  }

  public setAuthor(author: AuthorItem): void {
    const authorId = author && author.authorId ? author.authorId : '';
    const authorName = author && author.authorName ? author.authorName : '';
    const birthDate = author && author.birthDate ? author.birthDate : '';
    const createdAt = author && author.createdAt ? author.createdAt : '';
    const email = author && author.email ? author.email : '';
    const updatedAt = author && author.updatedAt ? author.updatedAt : '';
    this.form.get('authorId').setValue(authorId);
    this.form.get('authorName').setValue(authorName);
    this.form.get('birthDate').setValue(birthDate);
    this.form.get('createdAt').setValue(createdAt);
    this.form.get('email').setValue(email);
    this.form.get('updatedAt').setValue(updatedAt);
  }
}
