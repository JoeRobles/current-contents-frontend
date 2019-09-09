import { Component, OnInit } from '@angular/core';
import { AuthorApiService } from '../../author-api.service';
import { AuthorResponse } from '../../author.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditComponent implements OnInit {
  public author: AuthorResponse;
  public failed: string;

  constructor(
    private authorApiService: AuthorApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.getAuthorById(this.route.snapshot.params.id);
    }
  }

  private getAuthorById(id: string): void {
    this.authorApiService.getAuthorById(id).subscribe(
      singleAuthor => {
        this.author = singleAuthor;
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
