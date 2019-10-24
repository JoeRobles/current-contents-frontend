import { Component, OnInit } from '@angular/core';

import { PublicationApiService } from '../../publication-api.service';
import { PublicationItem } from '../../publication.interface';
import { AuthorApiService } from '../../../author/author-api.service';
import { AuthorItem } from '../../../author/author.interface';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListComponent implements OnInit {
  public authorsList: AuthorItem[];
  public ascending = true;
  public publicationsList: PublicationItem[];
  public failed: string;
  public displayedColumns: string[] = ['index', 'title', 'body', 'authorId', 'publicationDate', 'actions'];

  constructor(
    private publicationApiService: PublicationApiService,
    private authorApiService: AuthorApiService
  ) { }

  ngOnInit() {
    this.getAllPublications();
    this.getAllAuthors();
  }

  public delete(publicationId: string) {
    this.publicationApiService.deletePublicationById(publicationId).subscribe(
      () => {
        this.publicationsList = this.publicationsList.filter(publication => publication.publicationId !== publicationId);
      }
    );
  }

  private getAllPublications(): void {
    this.publicationApiService.getAllPublications().subscribe(
      list => {
        this.publicationsList = list.Items.sort((a, b) => {
          if (this.ascending) {
            return Number(a.publicationDate) - Number(b.publicationDate);
          } else {
            return Number(b.publicationDate) - Number(a.publicationDate);
          }
        });
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

  public sortByDate() {
    this.ascending = !this.ascending;
    this.publicationsList = null;
    this.getAllPublications();
  }
}
