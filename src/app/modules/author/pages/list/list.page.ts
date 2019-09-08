import { Component, OnInit } from '@angular/core';

import { AuthorApiService } from '../../author-api.service';
import { AllAuthorsResponse } from '../../author.interface';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListComponent implements OnInit {
  public authorsList: AllAuthorsResponse;
  public failed: string;

  constructor(
    private authorApiService: AuthorApiService
  ) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  private getAllAuthors() {
    this.authorApiService.getAllAuthors().subscribe(
      list => {
        this.authorsList = list;
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
