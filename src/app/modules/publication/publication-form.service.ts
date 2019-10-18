import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PublicationItem, CreatePublicationRequest } from './publication.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicationFormService {
  public form: FormGroup = new FormGroup({
    authorId: new FormControl(''),
    body: new FormControl(''),
    createdAt: new FormControl(''),
    publicationDate: new FormControl(null),
    publicationId: new FormControl(null),
    title: new FormControl(''),
    updatedAt: new FormControl(''),
  });

  public setPublication(publication: PublicationItem): void {
    const authorId = publication && publication.authorId ? publication.authorId : '';
    const body = publication && publication.body ? publication.body : '';
    const createdAt = publication && publication.createdAt ? publication.createdAt : '';
    const publicationDate = publication && publication.publicationDate ? publication.publicationDate : '';
    const publicationId = publication && publication.publicationId ? publication.publicationId : '';
    const title = publication && publication.title ? publication.title : '';
    const updatedAt = publication && publication.updatedAt ? publication.updatedAt : '';
    this.form.get('authorId').setValue(authorId);
    this.form.get('body').setValue(body);
    this.form.get('createdAt').setValue(createdAt);
    this.form.get('publicationDate').setValue(publicationDate);
    this.form.get('publicationId').setValue(publicationId);
    this.form.get('title').setValue(title);
    this.form.get('updatedAt').setValue(updatedAt);
  }
}
