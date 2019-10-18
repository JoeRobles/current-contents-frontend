import { Component, OnInit } from '@angular/core';

import { PublicationApiService } from '../../publication-api.service';
import { PublicationItem } from '../../publication.interface';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListComponent implements OnInit {
  public publicationsList: PublicationItem[];
  public failed: string;
  public displayedColumns: string[] = ['index', 'title', 'body', 'authorId', 'publicationDate', 'actions'];

  constructor(
    private publicationApiService: PublicationApiService
  ) { }

  ngOnInit() {
    this.getAllPublications();
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
        this.publicationsList = list.Items;
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
