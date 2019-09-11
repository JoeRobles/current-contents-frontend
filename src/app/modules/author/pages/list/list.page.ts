import { Component, OnInit } from '@angular/core';

import { AuthorApiService } from '../../author-api.service';
import { AuthorItem } from '../../author.interface';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListComponent implements OnInit {
  public authorsList: AuthorItem[];
  public failed: string;
  public displayedColumns: string[] = ['authorName', 'birthDate', 'email'];

  constructor(
    private authorApiService: AuthorApiService
  ) { }

  ngOnInit() {
    this.getAllAuthors();
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
}
