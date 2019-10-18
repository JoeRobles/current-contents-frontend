import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicationApiService } from '../../publication-api.service';
import { PublicationFormService } from '../../publication-form.service';
import { PublicationItem, PublicationResponse } from '../../publication.interface';
import { AuthorApiService } from '../../../author/author-api.service';
import { AuthorItem } from '../../../author/author.interface';

@Component({
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailComponent implements OnInit {
  public authorsList: AuthorItem[];
  public publication: PublicationItem;
  public failed: string;
  public form: FormGroup;

  constructor(
    private publicationApiService: PublicationApiService,
    private route: ActivatedRoute,
    private publicationFormService: PublicationFormService,
    private router: Router,
    private authorApiService: AuthorApiService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.getAllAuthors();
    }
    this.form = this.publicationFormService.form;
  }

  public back() {
    this.router.navigate(['publication/list']);
  }

  private getPublicationById(id: string): void {
    this.publicationApiService.getPublicationById(id).subscribe(
      singlePublication => {
        this.publication = singlePublication.Item;
        this.publication.authorId = this.getAuthorById(singlePublication.Item.authorId).authorName;
        this.publicationFormService.setPublication(this.publication);
      },
      error => {
        this.failed = error.message;
      }
    );
  }

  private getAllAuthors(): void {
    this.authorApiService.getAllAuthors().subscribe(
      list => {
        this.authorsList = list.Items;
        this.getPublicationById(this.route.snapshot.params.id);
      },
      error => {
        this.failed = error.message;
      }
    );
  }

  public getAuthorById(authorId: string): AuthorItem {
    if (this.authorsList) {
      const authorFound = this.authorsList.find(author => author.authorId === authorId);
      if (authorFound) {
        return authorFound;
      }
    }
  }
}
