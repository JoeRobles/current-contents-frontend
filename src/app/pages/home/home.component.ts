import { Component, OnInit } from '@angular/core';

import { AuthorApiService } from '../../modules/author/author-api.service';
import { AuthorItem } from '../../modules/author/author.interface';
import { PublicationItem } from '../../modules/publication/publication.interface';
import { PublicationApiService } from '../../modules/publication/publication-api.service';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ascending = true;
  public authorsList: AuthorItem[];
  public displayedColumns: string[] = ['index', 'title', 'body', 'authorId', 'publicationDate', 'actions'];
  public failed: string;
  public publicationsList: PublicationItem[];
  public publicationsListSpinner = false;
  public selectedAuthor: AuthorItem = null;


  constructor(
    private authorApiService: AuthorApiService,
    private publicationApiService: PublicationApiService,
  ) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  public delete(publicationId: string) {
    this.publicationApiService.deletePublicationById(publicationId).subscribe(
      () => {
        this.publicationsList = this.publicationsList.filter(publication => publication.publicationId !== publicationId);
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

  public listPublications(authorId) {
    this.selectedAuthor = authorId;
    this.listPublicationsByAuthorId();
  }

  private listPublicationsByAuthorId(): void {
    this.publicationsList = null;
    this.publicationsListSpinner = true;
    this.publicationApiService.getPublicationsByAuthorId(this.selectedAuthor.authorId).subscribe(
      list => {
        this.publicationsList = list.Items;
        this.publicationsListSpinner = false;
      },
      error => {
        this.failed = error.message;
        this.publicationsListSpinner = false;
      }
    );
  }

  public sortByDate() {
    this.ascending = !this.ascending;
    this.publicationsList = null;
    this.listPublicationsByAuthorId();
  }
}
