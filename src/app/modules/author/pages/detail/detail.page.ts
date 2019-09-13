import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AuthorApiService } from '../../author-api.service';
import { AuthorFormService } from '../../author-form.service';
import { AuthorItem, AuthorResponse } from '../../author.interface';

@Component({
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailComponent implements OnInit {
  public author: AuthorItem;
  public failed: string;
  public form: FormGroup;

  constructor(
    private authorApiService: AuthorApiService,
    private route: ActivatedRoute,
    private authorFormService: AuthorFormService,
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.getAuthorById(this.route.snapshot.params.id);
    }
    this.form = this.authorFormService.form;
  }

  public back() {

  }

  private getAuthorById(id: string): void {
    this.authorApiService.getAuthorById(id).subscribe(
      singleAuthor => {
        this.author = singleAuthor.Item;
        this.authorFormService.setAuthor(singleAuthor.Item);
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
